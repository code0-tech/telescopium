import {source} from '@/lib/source';
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import {createRelativeLink} from 'fumadocs-ui/mdx';
import {getMDXComponents} from '@/mdx-components';
import type {LoaderConfig, LoaderOutput, Page} from 'fumadocs-core/source';
import type {ComponentProps, FC} from 'react';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{
            style: 'clerk',
            single: false,
        }}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDXContent
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLinkWithFilenameOnly(source, page),
                    })}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}

type InferSource = typeof source;
type InferPage = NonNullable<ReturnType<typeof source.getPage>>;

function createRelativeLinkWithFilenameOnly(
    sourceInst: InferSource,
    page: InferPage,
): FC<ComponentProps<'a'>> {
    const RelativeLinkBase = createRelativeLink(sourceInst, page);

    return function RelativeLink({ href, ...props }) {
        if (!href || href.startsWith('http')) {
            return <RelativeLinkBase {...props} href={href} />;
        }

        let finalHref = href;

        const [path, hash] = href.split('#');

        if (path.endsWith('.md')) {
            finalHref = `./${path}${hash ? `#${hash.toLowerCase()}` : ''}`;
        }

        return <RelativeLinkBase {...props} href={finalHref} />;
    };
}
