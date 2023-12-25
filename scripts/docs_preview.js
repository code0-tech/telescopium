import path from "path";
import fs from "fs";
import {spawn} from "child_process";

const project = process.argv[2];
if(!project) {
    console.error('No project for preview specified')
    process.exit(1)
}

const __dirname = path.resolve();

fs.mkdirSync(path.join(__dirname, 'tmp'), { recursive: true })
const tmpDir = fs.mkdtempSync(path.join(__dirname, 'tmp', 'c0-docs-preview-'))

fs.mkdirSync(path.join(tmpDir, 'content'), { recursive: true })
fs.mkdirSync(path.join(tmpDir, 'docs'), { recursive: true })
fs.symlinkSync(path.join(__dirname, '..', project, 'docs', 'content'), path.join(tmpDir, 'content', 'docs'))
fs.symlinkSync(path.join(__dirname, 'src', 'content', 'config.ts'), path.join(tmpDir, 'content', 'config.ts'))
fs.symlinkSync(path.join(__dirname, '..', project, 'docs', 'starlight.json'), path.join(tmpDir, 'docs', 'starlight.json'))

const childProcess = spawn('npm', ['run', 'dev'], {
    env: { ...process.env, SRC_DIR: tmpDir, BASE_URL: `/${project}/` },
    stdio: 'inherit',
    cwd: __dirname
})

const cleanupDir = () => fs.rmSync(tmpDir, { recursive: true, force: true })

const quit = () => {
    childProcess.kill('SIGINT')
    cleanupDir()
}

childProcess.on('exit', cleanupDir)

process.on('SIGINT', quit)
process.on('SIGQUIT', quit)
process.on('SIGTERM', quit)



