import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import transformLocalLinks from "./src/plugins/transformLocalLinks.js";

const defaultConfig = {
    title: 'Code0 Documentation',
    pagefind: false,
    logo: {
        src: "./src/assets/code0_logo.png",
    },
}

const config = process.env.SRC_DIR
	? (await import(/* @vite-ignore */`${process.env.SRC_DIR}/docs/starlight.json`)).default
	: defaultConfig;

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
