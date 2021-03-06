'use strict';
const colo = require('colo');

class Reporter {
  reportFileNumber(num) {
    console.log(colo.cyan(`Test File Num : ${num}`));
  }
  reportTestName(name) {
    console.log(colo.grey(`Testing... : ${name}`));
  }
  reportSubTestName(name, parent) {
    console.log(colo.cyan.bold(`Test Name : ${name} in ${parent}`));
  }
  setChildProc(child) {
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }
  reportSubFailure(name, parent) {
    console.log(`${colo.red.bold('  ✗ failure: ')} ${name}`);
  }
  reportSubSuccess(name, parent) {
    console.log(`${colo.green.bold('  ✓ success: ')} ${name}`);
  }
  reportFailure(name) {
    console.log(`${colo.red('✗ failure: ')} ${name}`);
  }
  reportSuccess(name) {
    console.log(`${colo.green('✓ success: ')} ${name}`);
  }
  reportFinish(hasAnyError, errors) {
  }
}

module.exports = Reporter;
