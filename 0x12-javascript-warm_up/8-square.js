#!/usr/bin/node

const process = require('process');

if (!parseInt(process.argv[2])) {
  console.log('Missing size');
} else {
  for (let i = 0; i < process.argv[2]; i++) {
    let square = '';
    for (let j = 0; j < process.argv[2]; j++) {
      square = square + 'X';
    }
    console.log(square);
  }
}

/* console.log(square); */
