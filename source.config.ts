import {defineDocs, defineConfig} from 'fumadocs-mdx/config';
import {remarkMdxMermaid} from "fumadocs-core/mdx-plugins";

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
    dir: 'content',
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMdxMermaid],
    },
});
