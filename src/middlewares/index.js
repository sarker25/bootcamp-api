const express = require("express");

const applyMiddlewares = (app) => {
  app.use(express.json());
};

module.exports = applyMiddlewares;
