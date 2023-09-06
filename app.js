const express = require("express");
const app = express();
const { applyMiddlewares, errorHandler } = require("./src/middlewares");

// global middlewares

applyMiddlewares(app);

// global error handler

app.use(errorHandler);

module.exports = app;
