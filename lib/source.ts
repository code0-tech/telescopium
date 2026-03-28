import {docs} from '@/.source/server';
import {loader} from 'fumadocs-core/source';
import * as tablerIcons from '@tabler/icons-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
    // it assigns a URL to your pages
    baseUrl: '/',
    source: docs.toFumadocsSource(),
    icon(icon) {
        const tablerName = `${icon}`;
        if (tablerName in tablerIcons) {
            return createElement(tablerIcons[tablerName as keyof typeof tablerIcons] as any);
        }
    }
});
