"use client";
import {type AnchorHTMLAttributes} from "react";
import {FrameworkProvider} from "fumadocs-core/framework";
import type {Framework} from "fumadocs-core/framework";
import {useParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {RootProvider as BaseRootProvider, type RootProviderProps} from "fumadocs-ui/provider/base";

const artifactViewer = process.env.NEXT_PUBLIC_ARTIFACT_VIEWER === "true";

function useNormalizedPathname(): string {
    const pathname = usePathname();
    return pathname.endsWith("/index.html")
        ? pathname.replace(/\/index\.html$/, "/")
        : pathname;
}

function addIndexHtml(href: string): string {
    const [path, hash] = href.split("#", 2);
    const normalized = path.endsWith("/") ? `${path}index.html` : `${path}/index.html`;
    return hash != null ? `${normalized}#${hash}` : normalized;
}

function ArtifactLink({href, prefetch, ...props}: AnchorHTMLAttributes<HTMLAnchorElement> & {prefetch?: boolean}) {
    if (!href || href.startsWith("http")) return <a {...props} href={href}/>;
    return <Link {...props} href={addIndexHtml(href)}/>;
}

export function RootProvider({children, dir, theme, search, i18n}: RootProviderProps) {
    const LinkComponent = artifactViewer ? ArtifactLink : Link;
    return (
        <FrameworkProvider usePathname={artifactViewer ? useNormalizedPathname : usePathname} useRouter={useRouter} useParams={useParams} Link={LinkComponent as unknown as Framework["Link"]} Image={Image as unknown as Framework["Image"]}>
            <BaseRootProvider dir={dir} theme={theme} search={search} i18n={i18n}>
                {children}
            </BaseRootProvider>
        </FrameworkProvider>
    );
}
