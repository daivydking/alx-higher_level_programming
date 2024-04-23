#!/usr/bin/node
const { argv } = require('process');
const argc = argv.length;

if (process.argv.length === 3) {
    console.log('No argument');
} else if (process.argv.length === 4) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
