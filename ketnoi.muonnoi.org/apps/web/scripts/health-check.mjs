#!/usr/bin/env node
/**
 * Health check — verify critical files, routes, and config
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║        HEALTH CHECK — Kết Nối Muôn Nơi               ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

const checks = [];

function check(name, condition, detail = '') {
  checks.push({ name, ok: condition, detail });
  const icon = condition ? '✓' : '✗';
  const color = condition ? '\x1b[32m' : '\x1b[31m';
  console.log(`${color}${icon}\x1b[0m ${name}${detail ? ` — ${detail}` : ''}`);
}

// File checks
check('package.json exists', fs.existsSync(path.join(rootDir, 'package.json')));
check('astro.config.mjs exists', fs.existsSync(path.join(rootDir, 'astro.config.mjs')));
check('tsconfig.json exists', fs.existsSync(path.join(rootDir, 'tsconfig.json')));

// Page checks
const pagesDir = path.join(rootDir, 'src/pages');
check('index.astro', fs.existsSync(path.join(pagesDir, 'index.astro')));
check('login.astro', fs.existsSync(path.join(pagesDir, 'login.astro')));
check('register.astro', fs.existsSync(path.join(pagesDir, 'register.astro')));
check('404.astro', fs.existsSync(path.join(pagesDir, '404.astro')));

// Component checks
const compDir = path.join(rootDir, 'src/components');
check('Header.tsx', fs.existsSync(path.join(compDir, 'Header.tsx')));
check('Hero.tsx', fs.existsSync(path.join(compDir, 'Hero.tsx')));
check('Features.tsx', fs.existsSync(path.join(compDir, 'Features.tsx')));
check('LoginForm.tsx', fs.existsSync(path.join(compDir, 'LoginForm.tsx')));
check('RegisterForm.tsx', fs.existsSync(path.join(compDir, 'RegisterForm.tsx')));
check('ProfileForm.tsx', fs.existsSync(path.join(compDir, 'ProfileForm.tsx')));
check('MatchCard.tsx', fs.existsSync(path.join(compDir, 'MatchCard.tsx')));
check('ChatWindow.tsx', fs.existsSync(path.join(compDir, 'ChatWindow.tsx')));

// Public assets
check('favicon.svg', fs.existsSync(path.join(rootDir, 'public/favicon.svg')));
check('robots.txt', fs.existsSync(path.join(rootDir, 'public/robots.txt')));

// Layouts & stores
check('MainLayout.astro', fs.existsSync(path.join(rootDir, 'src/layouts/MainLayout.astro')));
check('authStore.ts', fs.existsSync(path.join(rootDir, 'src/stores/authStore.ts')));
check('types/index.ts', fs.existsSync(path.join(rootDir, 'src/types/index.ts')));

// Scripts
check('scripts/audit.mjs', fs.existsSync(path.join(rootDir, 'scripts/audit.mjs')));
check('scripts/dev-loop.mjs', fs.existsSync(path.join(rootDir, 'scripts/dev-loop.mjs')));

// Config content checks
const astroConfig = fs.readFileSync(path.join(rootDir, 'astro.config.mjs'), 'utf-8');
check('astro.config: i18n config', astroConfig.includes('i18n'));
check('astro.config: react integration', astroConfig.includes('@astrojs/react'));

const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'));
check('package.json: lint script', !!pkg.scripts.lint);
check('package.json: typecheck script', !!pkg.scripts.typecheck);
check('package.json: test:unit script', !!pkg.scripts['test:unit']);
check('package.json: audit script', !!pkg.scripts.audit);
check('package.json: loop:dev script', !!pkg.scripts['loop:dev']);

// Summary
const pass = checks.filter((c) => c.ok).length;
const fail = checks.filter((c) => !c.ok).length;
const total = checks.length;

console.log(`\n${'─'.repeat(40)}`);
console.log(`Total: ${total} | Pass: \x1b[32m${pass}\x1b[0m | Fail: \x1b[31m${fail}\x1b[0m`);
console.log(`Status: ${fail === 0 ? '\x1b[32mHEALTHY\x1b[0m' : '\x1b[31mUNHEALTHY\x1b[0m'}\n`);

process.exit(fail === 0 ? 0 : 1);
