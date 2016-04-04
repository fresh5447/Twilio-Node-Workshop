/* eslint-disable no-console */
var express = require('express');
var app = new express.Router();

app.get('/', function getCb(req, res) {
  res.send({ ok: true });
});

module.exports = app;