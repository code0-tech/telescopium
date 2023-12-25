import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const defaultConfig = {
	title: 'Code0 Documentation'
}

const config = process.env.SRC_DIR
	? (await import(/* @vite-ignore */`${process.env.SRC_DIR}/docs/starlight.json`)).default
	: defaultConfig;

const transformLocalLinks = () => {
	return {
		name: 'transform-local-links',

		transform(src, id) {
			if (id.endsWith('.md') || id.endsWith('.mdx')) {
				const directory = id.endsWith('index.md') || id.endsWith('index.mdx') ? '' : '../';

				const code = src
					.replaceAll(/\[([^\]]+?)]\(([^)]+?)\.mdx?\)/g, `[$1](${directory}$2/)`)
					.replaceAll(/href=\\"([^"]+?)\.mdx?\\"/g, `href=\\"${directory}$1/\\"`)
					.replaceAll(/href: "([^"]+?)\.mdx?"/g, `href: "${directory}$1/"`);

				return {
					code: code,
					map: null, // provide source map if available
				}
			}
		},
	}
}

// https://astro.build/config
export default defineConfig({
	base: process.env.BASE_URL,
	outDir: process.env.OUT_DIR ?? './dist',
	srcDir: process.env.SRC_DIR ?? './src',
	trailingSlash: 'always',
	integrations: [
		starlight(config),
	],
	vite: {
		resolve: {
			preserveSymlinks: true
		},
		plugins: [
			transformLocalLinks(),
		]
	}
});
