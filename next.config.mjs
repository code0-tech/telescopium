import {createMDX} from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: process.env.BASE_PATH || '',
};

export default withMDX(config);
