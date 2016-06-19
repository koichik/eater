const test = require(`${process.cwd()}/lib/runner`).test;
const assert = require('power-assert');

console.log('runner', process.execArgv);
test('assert truthy', (done) => {
  assert(true);
  done();
});

