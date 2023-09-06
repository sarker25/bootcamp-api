const express = require("express");
const app = express();
const applyMiddlewares = require("./src/middlewares");

applyMiddlewares(app);

module.exports = app;
