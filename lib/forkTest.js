'use strict';
const cp = require('child_process');

function forkTest(file, opts) {
  let hasErr = false;
  let error = '';

  const child = cp.fork(file, opts);
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => {
    hasErr = true;
    error += data;
  });
  child.on('close', (code, sig) => {
    if (!hasErr) {
      child.emit('success');
    } else {
      child.emit('failure', error);
    }
  });

  return child;
}

module.exports = forkTest;
