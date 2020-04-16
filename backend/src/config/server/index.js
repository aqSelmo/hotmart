const config = require('./config');
const express = require('express');
const consign = require('consign');
const expressUpload = require('express-fileupload');

const App = express();

App.use(express.json());
App.use(expressUpload());

consign()
    .include("./src/config/db/index.js")
    .then("./src/routes")
    .then("./src/controllers")
    .then("./src/models")
    .into(App);

App.listen(config.server.port);
module.exports = App;