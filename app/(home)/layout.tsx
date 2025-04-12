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
        <head>
            <meta httpEquiv={"refresh"} content={"0; URL=code0"}/>
        </head>
        <body className="flex flex-col min-h-screen">
        {children}
        </body>
        </html>
    );
}
