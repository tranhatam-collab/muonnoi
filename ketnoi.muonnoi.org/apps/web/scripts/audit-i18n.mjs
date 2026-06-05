#!/usr/bin/env node
/**
 * i18n audit — checks for hardcoded Vietnamese/English strings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const hardcoded = [];
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

// Vietnamese characters outside of i18n key contexts
const viPattern = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf-8');
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip comments, import statements, and i18n key references
    if (line.trim().startsWith('//') || line.trim().startsWith('import') || line.includes('t(') || line.includes('id=')) continue;
    if (viPattern.test(line) && (line.includes('>') || line.includes('</'))) {
      hardcoded.push({ file: path.relative(rootDir, fp), line: i + 1, text: line.trim() });
    }
  }
}

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║        i18n AUDIT — Kết Nối Muôn Nơi                 ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

if (hardcoded.length === 0) {
  console.log('✓ No hardcoded strings found.\n');
} else {
  console.log(`Found ${hardcoded.length} hardcoded strings:\n`);
  for (const h of hardcoded) {
    console.log(`${h.file}:${h.line}`);
    console.log(`  ${h.text}`);
  }
}

const reportDir = path.join(rootDir, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(
  path.join(reportDir, 'i18n-audit.json'),
  JSON.stringify({ timestamp: new Date().toISOString(), hardcoded }, null, 2)
);

console.log(`\nReport saved: reports/i18n-audit.json`);
console.log(`Status: ${hardcoded.length === 0 ? 'PASS' : 'WARN'}\n`);
