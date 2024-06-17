#!/usr/bin/node

const request = require('request');

let count = 0;
request({ url: process.argv[2], json: true }, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const dataArray = body.results;
    for (const film of dataArray) {
      //      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      const item = film.characters;
      for (let j = 0; j < item.length; j++) {
        const val = item[j].split('/');
        if (val[val.length - 2] === '18') {
          count++;
          break;
        }
      }
      //        count = count + 1;
    }
  }
  console.log(count);
});
