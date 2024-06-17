#!/usr/bin/node

const request = require('request');

request({ url: process.argv[2], json: true }, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const object = {};
    for (const todo of body) {
      if (todo.completed === true) {
        if (object[todo.userId]) {
          object[todo.userId] = object[todo.userId] + 1;
        } else {
          object[todo.userId] = 1;
        }
      }
    }
    console.log(object);
  } else {
    return console.error(error);
  }
});
