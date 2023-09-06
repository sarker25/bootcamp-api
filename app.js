const express = require("express");
const app = express();
const applyMiddlewares = require("./middlewares");
applyMiddlewares(app);
module.exports = app;
