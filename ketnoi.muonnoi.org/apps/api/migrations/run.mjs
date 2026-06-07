#!/usr/bin/env node
/**
 * D1 Migration Runner
 * Usage: node migrations/run.mjs [local|remote]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.argv[2] || 'local';
const dbName = env === 'local' ? 'ketnoi-muonnoi-dev' : 'ketnoi-muonnoi-prod';

const migrationFiles = fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.sql') && f !== 'run.mjs')
  .sort();

console.log(`Running ${migrationFiles.length} migrations on ${dbName} (${env})...\n`);

for (const file of migrationFiles) {
  const filepath = path.join(__dirname, file);
  const sql = fs.readFileSync(filepath, 'utf-8');
  
  console.log(`→ ${file}`);
  
  try {
    if (env === 'local') {
      execSync(`wrangler d1 execute ${dbName} --local --file=${filepath}`, {
        cwd: path.resolve(__dirname, '..'),
        stdio: 'inherit',
      });
    } else {
      execSync(`wrangler d1 execute ${dbName} --remote --file=${filepath}`, {
        cwd: path.resolve(__dirname, '..'),
        stdio: 'inherit',
      });
    }
    console.log(`  ✓ Done\n`);
  } catch (e) {
    console.error(`  ✗ Failed: ${e.message}\n`);
    process.exit(1);
  }
}

console.log('All migrations completed!');
