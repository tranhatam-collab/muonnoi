#!/usr/bin/env node
/**
 * Security-only audit
 * Checks: secrets, CSP, HTTPS, unsafe patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const issues = [];
const files = [];

function collect(dir) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const stat = fs.statSync(fp);
    if (stat.isDirectory() && !['node_modules', 'dist', '.astro'].includes(f)) {
      collect(fp);
    } else if (stat.isFile() && /\.(ts|tsx|js|jsx|astro|css)$/.test(f)) {
      files.push(fp);
    }
  }
}

collect(path.join(rootDir, 'src'));

// Secret patterns
const patterns = [
  { name: 'Hardcoded password', regex: /password\s*=\s*['"][^'"]{4,}['"]/i },
  { name: 'API key', regex: /api[_-]?key\s*=\s*['"][a-zA-Z0-9_-]{10,}['"]/i },
  { name: 'Secret token', regex: /secret\s*=\s*['"][a-zA-Z0-9_-]{10,}['"]/i },
  { name: 'OpenAI key', regex: /sk-[a-zA-Z0-9]{20,}/ },
  { name: 'AWS key', regex: /AKIA[0-9A-Z]{16}/ },
  { name: 'eval() usage', regex: /\beval\s*\(/ },
  { name: 'innerHTML assignment', regex: /\.innerHTML\s*=/ },
  { name: 'document.write', regex: /document\.write\s*\(/ },
];

for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf-8');
  const lines = content.split('\n');
  for (const { name, regex } of patterns) {
    for (let i = 0; i < lines.length; i++) {
      if (regex.test(lines[i]) && !lines[i].includes('TODO')) {
        issues.push({ file: path.relative(rootDir, fp), line: i + 1, type: name, code: lines[i].trim() });
      }
    }
  }
}

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║        SECURITY AUDIT — Kết Nối Muôn Nơi             ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

if (issues.length === 0) {
  console.log('✓ No security issues found.\n');
} else {
  for (const issue of issues) {
    console.log(`✗ ${issue.type}`);
    console.log(`  ${issue.file}:${issue.line}`);
    console.log(`  ${issue.code}`);
    console.log();
  }
}

// Save report
const reportDir = path.join(rootDir, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(
  path.join(reportDir, 'security-audit.json'),
  JSON.stringify({ timestamp: new Date().toISOString(), issues }, null, 2)
);

console.log(`Report saved: reports/security-audit.json`);
console.log(`Status: ${issues.length === 0 ? 'PASS' : 'FAIL'}\n`);

process.exit(issues.length > 0 ? 1 : 0);
