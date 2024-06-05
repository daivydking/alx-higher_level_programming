#!/usr/bin/node

const request = require('request');

request({ url: `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, json: true }, function (error, response, body) {
  if (!error) {
    return console.log(body.title);
  } else {
    console.error(error);
  }
});
