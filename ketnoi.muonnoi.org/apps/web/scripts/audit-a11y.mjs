#!/usr/bin/env node
/**
 * Accessibility audit — basic checks
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
    } else if (stat.isFile() && /\.(tsx|jsx|astro)$/.test(f)) {
      files.push(fp);
    }
  }
}

collect(path.join(rootDir, 'src'));

for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf-8');
  const lines = content.split('\n');

  // Check for <img> without alt (in components, not layout pages)
  if (!fp.includes('layouts/')) {
    const imgMatches = content.match(/<img[^>]*>/g) || [];
    for (const img of imgMatches) {
      if (!img.includes('alt=') && !img.includes('role="presentation"')) {
        const lineIdx = lines.findIndex((l) => l.includes(img));
        issues.push({ file: path.relative(rootDir, fp), line: lineIdx + 1, type: 'Missing alt on <img>', code: img });
      }
    }
  }

  // Check for buttons without aria-label when icon-only (in components)
  if (!fp.includes('layouts/')) {
    const btnMatches = content.match(/<button[^>]*>\s*<[^/][^>]*\/>\s*<\/button>/g) || [];
    for (const btn of btnMatches) {
      if (!btn.includes('aria-label=') && !btn.includes('title=')) {
        const lineIdx = lines.findIndex((l) => l.includes(btn.split('>')[0] + '>'));
        issues.push({ file: path.relative(rootDir, fp), line: lineIdx + 1, type: 'Button missing aria-label', code: btn.trim() });
      }
    }
  }

  // Check MainLayout has lang attribute
  if (fp.includes('MainLayout.astro')) {
    if (!content.includes('lang=')) {
      issues.push({ file: path.relative(rootDir, fp), line: 1, type: 'Layout missing lang attribute', code: '<html>' });
    }
  }
}

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║        a11y AUDIT — Kết Nối Muôn Nơi                 ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

if (issues.length === 0) {
  console.log('✓ No accessibility issues found.\n');
} else {
  for (const issue of issues) {
    console.log(`⚠ ${issue.type}`);
    console.log(`  ${issue.file}:${issue.line}`);
    console.log(`  ${issue.code}`);
    console.log();
  }
}

const reportDir = path.join(rootDir, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(
  path.join(reportDir, 'a11y-audit.json'),
  JSON.stringify({ timestamp: new Date().toISOString(), issues }, null, 2)
);

console.log(`Report saved: reports/a11y-audit.json`);
console.log(`Status: ${issues.length === 0 ? 'PASS' : 'WARN'}\n`);
