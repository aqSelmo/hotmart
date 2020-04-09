const config = require('./config');
const express = require('express');
const consign = require('consign');

const App = express();

App.use(express.json());

consign()
    .include("./src/config/db/index.js")
    .then("./src/routes")
    .then("./src/controllers")
    .then("./src/models")
    .into(App);

App.listen(config.server.port);
module.exports = App;