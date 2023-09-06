const express = require("express");
const errorHandler = require("./errorHandlers");

const applyMiddlewares = (app) => {
  app.use(express.json());
};

module.exports = { applyMiddlewares, errorHandler };
