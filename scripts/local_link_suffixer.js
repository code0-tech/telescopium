import path from "path";
import fs from "fs";

const __dirname = path.resolve('dist');

function getFiles(targetDirectory = '.') {
    const directoryPath = path.join(__dirname, targetDirectory);
    return readDirectoryRecursive(directoryPath, `${__dirname}/${targetDirectory}`);
}

function readDirectoryRecursive(directory, currentPath) {
    const dirents = fs.readdirSync(directory, { withFileTypes: true });

    const files = dirents
        .filter(dirent => dirent.isFile())
        .map(dirent => `${dirent.name}`)
        .filter(name => name.endsWith('.html'));
    const directories = dirents.filter(dirent => dirent.isDirectory());
    directories.forEach(dir => {
        const recursedFiles = readDirectoryRecursive(path.join(currentPath, dir.name), `${currentPath}/${dir.name}`).map(filename => `${dir.name}/${filename}`);
        files.push(...recursedFiles);
    });
    return files;
}

function readFile(file) {
    return fs.readFileSync(path.resolve(__dirname, file), "utf-8");
}

function writeFile(file, content) {
    fs.writeFileSync(path.resolve(__dirname, file), content, "utf-8");
}

function suffixLink(match, url) {
    const urlObj = new URL(url, 'https://docs.code0.tech');
    if(urlObj.origin !== 'https://docs.code0.tech') {
        // not a relative url
        return match;
    }

    if(urlObj.pathname === '/' && urlObj.hash !== '') {
        // mostly a link to a hash on the same page
        return match;
    }

    return match.replace(url, url.split('#')[0] + 'index.html' + urlObj.hash);
}

getFiles().forEach(file => {
    const content = readFile(file);

    const replacedContent = content.replaceAll(/<a [^>]*?href="([^"]+?)"[^>]*?>/g, suffixLink);

    writeFile(file, replacedContent);
});
