/**
 * Server file with express and the app
 * The app listens to env port or
 * default 5000 for development
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Version 1.0 api
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('Server listening on PORT', PORT);
});
