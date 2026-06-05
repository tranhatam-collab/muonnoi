#!/usr/bin/env node
/**
 * Continuous Dev Loop
 * DEV → AUDIT → QA → (BUILD) → loop
 *
 * Usage: node scripts/dev-loop.mjs [watch]
 */

import { spawn } from 'child_process';
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
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(phase, msg, color = 'reset') {
  const time = new Date().toLocaleTimeString('vi-VN');
  console.log(`${COLOR.cyan}[${time}]${COLOR.reset} ${COLOR[color]}${COLOR.bold}[${phase}]${COLOR.reset} ${msg}`);
}

function run(cmd, args = [], cwd = rootDir) {
  return new Promise((resolve) => {
    const [bin, ...rest] = cmd.split(' ');
    const child = spawn(bin, [...rest, ...args], {
      cwd,
      stdio: 'inherit',
      shell: true,
    });
    child.on('close', (code) => resolve(code));
  });
}

async function loop() {
  const iteration = Date.now();
  const reportsDir = path.join(rootDir, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  console.log(`\n${COLOR.cyan}${COLOR.bold}═══════════════════════════════════════════════════════${COLOR.reset}`);
  console.log(`${COLOR.cyan}${COLOR.bold}  CONTINUOUS DEV LOOP — Iteration ${iteration}${COLOR.reset}`);
  console.log(`${COLOR.cyan}${COLOR.bold}═══════════════════════════════════════════════════════${COLOR.reset}\n`);

  // Phase 1: LINT
  log('PHASE 1', 'Running linter...', 'blue');
  const lintCode = await run('npm', ['run', 'lint']);
  if (lintCode !== 0) {
    log('FAIL', `Lint failed (exit ${lintCode}). Fix and retry.`, 'red');
    return false;
  }
  log('PASS', 'Lint clean', 'green');

  // Phase 2: TYPECHECK
  log('PHASE 2', 'Running TypeScript type check...', 'blue');
  const typeCode = await run('npm', ['run', 'typecheck']);
  if (typeCode !== 0) {
    log('FAIL', `Type check failed (exit ${typeCode}). Fix and retry.`, 'red');
    return false;
  }
  log('PASS', 'Type check clean', 'green');

  // Phase 3: AUDIT
  log('PHASE 3', 'Running security audit...', 'blue');
  const auditCode = await run('node', ['scripts/audit-security.mjs']);
  if (auditCode !== 0) {
    log('FAIL', `Security audit failed. Fix and retry.`, 'red');
    return false;
  }
  log('PASS', 'Security audit clean', 'green');

  // Phase 4: i18n
  log('PHASE 4', 'Running i18n audit...', 'blue');
  await run('node', ['scripts/audit-i18n.mjs']);
  log('INFO', 'i18n audit complete (WARN allowed)', 'yellow');

  // Phase 5: a11y
  log('PHASE 5', 'Running accessibility audit...', 'blue');
  await run('node', ['scripts/audit-a11y.mjs']);
  log('INFO', 'a11y audit complete (WARN allowed)', 'yellow');

  // Phase 6: BUILD
  log('PHASE 6', 'Running production build...', 'blue');
  const buildCode = await run('npm', ['run', 'build']);
  if (buildCode !== 0) {
    log('FAIL', `Build failed (exit ${buildCode}). Fix and retry.`, 'red');
    return false;
  }
  log('PASS', 'Build successful', 'green');

  // Phase 7: FULL AUDIT
  log('PHASE 7', 'Running full audit...', 'blue');
  const fullAuditCode = await run('node', ['scripts/audit.mjs']);
  if (fullAuditCode !== 0) {
    log('FAIL', `Full audit failed. Check reports/audit-report.json`, 'red');
    return false;
  }
  log('PASS', 'Full audit clean', 'green');

  // Done
  console.log(`\n${COLOR.green}${COLOR.bold}✓ ALL PHASES PASSED${COLOR.reset}`);
  console.log(`${COLOR.cyan}Reports saved to: reports/${COLOR.reset}\n`);

  // Update progress
  const progressFile = path.join(rootDir, '..', '..', 'KETNOI_MUONNOI_DEV_PROGRESS.md');
  const progressEntry = `\n- ${new Date().toISOString()}: Dev loop iteration ${iteration} — ALL PASS\n`;
  fs.appendFileSync(progressFile, progressEntry);

  return true;
}

// Run once
loop().then((ok) => {
  process.exit(ok ? 0 : 1);
});
