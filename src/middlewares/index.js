const express = require("express");
const errorHandler = require("./errorHandlers");
const asyncHandler = require("./asyncHandler");

const applyMiddlewares = (app) => {
  app.use(express.json());
};

module.exports = { applyMiddlewares, errorHandler, asyncHandler };
