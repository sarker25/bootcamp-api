const express = require("express");

const applyMiddlewares = (app) => {
  app.use(logger);
};

module.exports = applyMiddlewares;
