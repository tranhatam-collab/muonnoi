const fs = require('fs');
const testFile = '/Users/tranhatam/Documents/Devnewproject/muonnoi.org/test-modified.txt';
fs.writeFileSync(testFile, 'modified by node\n');
console.log('done');
