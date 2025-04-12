import '../global.css';
import {RootProvider} from 'fumadocs-ui/provider';
import {Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import {source} from "@/lib/source";
import {baseOptions} from "@/app/layout.config";
import {DocsLayout} from "fumadocs-ui/layouts/docs";

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen">
        <RootProvider search={{
            options: {
                type: 'static',
            },
        }}>
            <DocsLayout tree={source.pageTree} {...baseOptions}>
                {children}
            </DocsLayout>
        </RootProvider>
        </body>
        </html>
    );
}
