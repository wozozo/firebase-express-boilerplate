import * as functions from 'firebase-functions';
import express = require('express');
import path = require('path');

const app = express();

app.set('views', path.join(path.dirname(__dirname), 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/xxx', function(req, res, next) {
  res.render('xxx');
});

const api = functions.https.onRequest(app);

module.exports = {
  api,
};

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
