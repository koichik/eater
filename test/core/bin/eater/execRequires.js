const cp = require('child_process');
const assert = require('power-assert');

const result = cp.execSync(`
  node --require ./test/fixture/success.js ${process.cwd()}/bin/eater.js --dir test/fixture/ --ext success.js --procs 10 --reporter eater-tap-reporter
`).toString();

assert(result.indexOf(`success!!`) !== -1);
assert(result.indexOf(`1..1`) !== -1);
assert(result.indexOf(`ok 1 test/fixture/success.js`) !== -1);
