#!/usr/bin/node

const process = require('process');

const value = parseInt(process.argv[2]);

function factorial (num) {
  if (isNaN(num)) {
    return 1;
  } else if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(value));
