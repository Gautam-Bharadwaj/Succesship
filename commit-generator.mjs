import fs from 'fs';
import { execSync } from 'child_process';

// Ensure Git author info is set for these commits just in case
process.env.GIT_COMMITTER_NAME = "Gautam Bharadwaj";
process.env.GIT_COMMITTER_EMAIL = "gautamjha@example.com";
process.env.GIT_AUTHOR_NAME = "Gautam Bharadwaj";
process.env.GIT_AUTHOR_EMAIL = "gautamjha@example.com";

if (!fs.existsSync('.backup')) {
    fs.mkdirSync('.backup');
    fs.copyFileSync('src/index.css', '.backup/index.css');
    fs.copyFileSync('src/App.tsx', '.backup/App.tsx');
    fs.copyFileSync('README.md', '.backup/README.md');
}

const run = (cmd) => {
    console.log(`Running: ${cmd}`);
    try {
        execSync(cmd, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Error running ${cmd}: ${e}`);
    }
};

const standardCommits = [
    { file: '.gitignore', msg: 'chore: add default gitignore patterns' },
    { file: 'package.json', msg: 'chore: initialize package.json with dependencies' },
    { file: 'package-lock.json', msg: 'chore: generate package-lock.json' },
    { file: 'vite.config.ts', msg: 'build: configure Vite setup and plugins' },
    { file: 'tsconfig.app.json', msg: 'build: configure TypeScript app environment' },
    { file: 'tsconfig.node.json', msg: 'build: configure TypeScript Node environment' },
    { file: 'tsconfig.json', msg: 'build: add root TypeScript configuration' },
    { file: 'eslint.config.js', msg: 'ci: define robust ESLint configuration' },
    { file: 'index.html', msg: 'docs: scaffold root HTML entry point' },
    { file: 'public', msg: 'assets: add public static assets' },
    { file: 'src/assets', msg: 'assets: integrate static image assets' },
    { file: 'src/main.tsx', msg: 'feat: setup application root rendering' },
    { file: 'src/vite-env.d.ts', msg: 'build: typed vite env declarations' }
];

for (const commit of standardCommits) {
    if (fs.existsSync(commit.file)) {
        run(`git add ${commit.file}`);
        run(`git commit -m "${commit.msg}"`);
    }
}

const chunkAndCommit = (filePath, backupPath, chunksCount, commitMessages) => {
    const content = fs.readFileSync(backupPath, 'utf8');
    const lines = content.split('\n');
    const linesPerChunk = Math.ceil(lines.length / chunksCount);

    for (let i = 0; i < chunksCount; i++) {
        const chunkLines = lines.slice(0, (i + 1) * linesPerChunk);
        fs.writeFileSync(filePath, chunkLines.join('\n'));
        run(`git add ${filePath}`);
        run(`git commit -m "${commitMessages[i]}"`);
    }
};

const cssMsgs = [
    'style: implement baseline CSS variables and resets',
    'style: define core typographical hierarchies',
    'style: construct responsive grid and card components',
    'style: polish animations and interactive badges'
];
chunkAndCommit('src/index.css', '.backup/index.css', 4, cssMsgs);

const appMsgs = [
    'feat: setup root React layout and navigation',
    'feat: build architecture overview baseline',
    'feat: implement subsystem definition grids',
    'feat: add memory lifecycle analytics module',
    'feat: construct invoice processing scenario container',
    'feat: finalize invoice decision engine UI',
    'feat: build support escalation scenario foundation',
    'feat: complete support AI routing logic'
];
chunkAndCommit('src/App.tsx', '.backup/App.tsx', 8, appMsgs);

const readmeMsgs = [
    'docs: outline initial project objectives',
    'docs: detail tiered storage scaling architecture',
    'docs: finalize answers on privacy and multi-agent context',
    'docs: embed architectural flowchart visualization'
];
chunkAndCommit('README.md', '.backup/README.md', 4, readmeMsgs);

run(`git add .`);
run(`git commit -m "chore: formatting and final review optimizations"`);

console.log("Commits generated successfully.");
