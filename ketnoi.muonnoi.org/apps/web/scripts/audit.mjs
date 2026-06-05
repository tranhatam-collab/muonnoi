#!/usr/bin/env node
/**
 * Continuous Dev Loop — Master Audit Script
 * Run: node scripts/audit.mjs
 *
 * This script runs all sub-audits and generates a report.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const COLOR = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(title, msg = '', color = 'reset') {
  console.log(`${COLOR[color]}${COLOR.bold}[${title}]${COLOR.reset} ${msg}`);
}

function run(cmd, cwd = rootDir) {
  try {
    return execSync(cmd, { cwd, encoding: 'utf-8', stdio: 'pipe' });
  } catch (e) {
    return e.stdout || e.stderr || e.message;
  }
}

// ─── CHECKS ─────────────────────────────────────────────

const checks = [];

function addCheck(name, status, detail = '') {
  checks.push({ name, status, detail });
}

// 1. Package.json dependencies audit
function auditDeps() {
  const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'));
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

  const issues = [];
  const risky = ['lodash', 'moment', 'jquery', 'underscore'];
  for (const r of risky) {
    if (allDeps[r]) issues.push(`Legacy dependency: ${r}`);
  }

  if (!allDeps['typescript']) issues.push('TypeScript not found');
  if (!allDeps['eslint']) issues.push('ESLint not found');

  addCheck(
    'Dependencies',
    issues.length === 0 ? 'PASS' : 'WARN',
    issues.join('; ') || 'All clear'
  );
}

// 2. File structure audit
function auditStructure() {
  const required = [
    'src/layouts',
    'src/components',
    'src/pages',
    'src/stores',
    'src/styles',
    'src/types',
    'public',
  ];

  const missing = required.filter((d) => !fs.existsSync(path.join(rootDir, d)));
  addCheck(
    'File Structure',
    missing.length === 0 ? 'PASS' : 'FAIL',
    missing.length === 0 ? 'All required directories present' : `Missing: ${missing.join(', ')}`
  );
}

// 3. Security patterns audit
function auditSecurityPatterns() {
  const issues = [];

  // Scan for hardcoded secrets
  const srcFiles = [];
  function collect(dir) {
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      const stat = fs.statSync(fp);
      if (stat.isDirectory() && f !== 'node_modules' && f !== 'dist') {
        collect(fp);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx|astro)$/.test(f)) {
        srcFiles.push(fp);
      }
    }
  }
  collect(path.join(rootDir, 'src'));

  const secretPatterns = [
    /password\s*=\s*['"][^'"]+['"]/i,
    /api_key\s*=\s*['"][^'"]+['"]/i,
    /secret\s*=\s*['"][^'"]+['"]/i,
    /token\s*=\s*['"][a-zA-Z0-9_-]{20,}['"]/,
    /sk-[a-zA-Z0-9]{20,}/,
  ];

  for (const fp of srcFiles) {
    const content = fs.readFileSync(fp, 'utf-8');
    for (const p of secretPatterns) {
      if (p.test(content)) {
        const line = content.split('\n').findIndex((l) => p.test(l)) + 1;
        issues.push(`${path.relative(rootDir, fp)}:${line} — potential secret/hardcoded value`);
      }
    }
  }

  addCheck(
    'Security Patterns',
    issues.length === 0 ? 'PASS' : 'FAIL',
    issues.length === 0 ? 'No hardcoded secrets found' : issues.slice(0, 5).join('; ')
  );
}

// 4. i18n audit
function auditI18n() {
  const issues = [];
  const pagesDir = path.join(rootDir, 'src/pages');
  if (fs.existsSync(pagesDir)) {
    const pages = fs.readdirSync(pagesDir);
    const hasI18nPages = pages.some((p) => p.startsWith('en/') || p.startsWith('vi/'));
    if (!hasI18nPages) {
      issues.push('No /en or /vi subdirectories for i18n routing');
    }
  }
  addCheck('i18n', issues.length === 0 ? 'PASS' : 'WARN', issues.join('; ') || 'i18n structure OK');
}

// 5. Accessibility audit (basic)
function auditA11y() {
  const issues = [];
  const pagesDir = path.join(rootDir, 'src/pages');
  if (fs.existsSync(pagesDir)) {
    const files = [];
    function collect(dir) {
      for (const f of fs.readdirSync(dir)) {
        const fp = path.join(dir, f);
        if (fs.statSync(fp).isDirectory()) collect(fp);
        else if (f.endsWith('.astro')) files.push(fp);
      }
    }
    collect(pagesDir);

    for (const fp of files) {
      const content = fs.readFileSync(fp, 'utf-8');
      // Pages that import MainLayout get lang from layout; skip those
      if (content.includes('MainLayout') || content.includes('@layouts/')) {
        continue;
      }
      // Only check standalone pages (not using a layout)
      if (!content.includes('lang=') && content.includes('<html')) {
        issues.push(`${path.relative(rootDir, fp)} — missing lang attribute`);
      }
    }
  }
  addCheck('Accessibility', issues.length === 0 ? 'PASS' : 'WARN', issues.join('; ') || 'Basic a11y OK');
}

// 6. Performance audit (bundle size estimate)
function auditPerf() {
  const nodeModules = path.join(rootDir, 'node_modules');
  if (!fs.existsSync(nodeModules)) {
    addCheck('Performance', 'SKIP', 'node_modules not installed, skip bundle analysis');
    return;
  }

  // Check for heavy deps
  const heavy = ['lodash', 'moment', 'three', 'd3', 'echarts'];
  const found = heavy.filter((d) => fs.existsSync(path.join(nodeModules, d)));

  addCheck(
    'Performance',
    found.length === 0 ? 'PASS' : 'WARN',
    found.length === 0 ? 'No heavy dependencies detected' : `Heavy deps: ${found.join(', ')}`
  );
}

// 7. Pages completeness
function auditPages() {
  const requiredPages = [
    'index.astro',
    'login.astro',
    'register.astro',
    'about.astro',
    'safety.astro',
    'guide.astro',
    'terms.astro',
    'privacy.astro',
    '404.astro',
  ];
  const pagesDir = path.join(rootDir, 'src/pages');
  const existing = fs.existsSync(pagesDir) ? fs.readdirSync(pagesDir) : [];
  const missing = requiredPages.filter((p) => !existing.includes(p));

  addCheck(
    'Pages Completeness',
    missing.length === 0 ? 'PASS' : 'WARN',
    missing.length === 0 ? 'All required pages present' : `Missing: ${missing.join(', ')}`
  );
}

// ─── MAIN ───────────────────────────────────────────────

console.log(`\n${COLOR.cyan}${COLOR.bold}═══════════════════════════════════════════════════════${COLOR.reset}`);
console.log(`${COLOR.cyan}${COLOR.bold}  KẾT NỐI MUÔN NƠI — Continuous Dev Audit${COLOR.reset}`);
console.log(`${COLOR.cyan}${COLOR.bold}═══════════════════════════════════════════════════════${COLOR.reset}\n`);

auditDeps();
auditStructure();
auditSecurityPatterns();
auditI18n();
auditA11y();
auditPerf();
auditPages();

// Summary
const pass = checks.filter((c) => c.status === 'PASS').length;
const warn = checks.filter((c) => c.status === 'WARN').length;
const fail = checks.filter((c) => c.status === 'FAIL').length;
const skip = checks.filter((c) => c.status === 'SKIP').length;

console.log('\n' + '─'.repeat(55));
for (const c of checks) {
  const color = c.status === 'PASS' ? 'green' : c.status === 'FAIL' ? 'red' : c.status === 'SKIP' ? 'yellow' : 'yellow';
  const icon = c.status === 'PASS' ? '✓' : c.status === 'FAIL' ? '✗' : '!';
  console.log(`  ${icon} ${c.name.padEnd(25)} ${COLOR[color]}${c.status}${COLOR.reset}`);
  if (c.detail && c.status !== 'PASS') {
    console.log(`    → ${c.detail}`);
  }
}
console.log('─'.repeat(55));

const total = pass + warn + fail;
console.log(`\n${COLOR.bold}Result:${COLOR.reset} ${COLOR.green}${pass} PASS${COLOR.reset}  ${COLOR.yellow}${warn} WARN${COLOR.reset}  ${COLOR.red}${fail} FAIL${COLOR.reset}  ${COLOR.yellow}${skip} SKIP${COLOR.reset}`);

// Write report
const report = {
  timestamp: new Date().toISOString(),
  project: 'ketnoi-muonnoi-web',
  checks,
  summary: { pass, warn, fail, skip, total },
};

const reportDir = path.join(rootDir, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'audit-report.json'), JSON.stringify(report, null, 2));

console.log(`\n${COLOR.blue}Report saved to: reports/audit-report.json${COLOR.reset}\n`);

if (fail > 0) {
  process.exit(1);
}
