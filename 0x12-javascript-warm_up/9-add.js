#!/usr/bin/node

const process = require('process');

function add (a, b) {
  const sum = a + b;
  console.log(sum);
}

add(parseInt(process.argv[2]), parseInt(process.argv[3]));
