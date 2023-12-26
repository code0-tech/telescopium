const replaceUrl = (directoryPrefix) => (match, fullUrl, matchedUrl) => {
    if(new URL(fullUrl, 'https://docs.code0.tech').origin !== 'https://docs.code0.tech') {
        // not a relative url
        return match;
    }

    let replacementUrl = matchedUrl;

    if(/(?:^|\/)index$/.test(matchedUrl)) {
        replacementUrl = matchedUrl === 'index' ? '' : matchedUrl.replace(/\/index/, '');
    }

    return match.replace(fullUrl, `${directoryPrefix}${replacementUrl}/`.replace('//', ''))
}

export default () => ({
    name: 'transform-local-links',

    transform(src, id) {
        if (id.endsWith('.md') || id.endsWith('.mdx')) {
            const directory = id.endsWith('index.md') || id.endsWith('index.mdx') ? '' : '../';

            const regexes = [
                /\[[^\]]+?]\((([^)]+?)\.mdx?)\)/g,
                /href=\\"(([^"]+?)\.mdx?)\\"/g,
                /href: "(([^"]+?)\.mdx?)"/g
            ]

            return {
                code: regexes.reduce((acc, regex) => acc.replaceAll(regex, replaceUrl(directory)), src),
                map: null
            }
        }
    },
})
