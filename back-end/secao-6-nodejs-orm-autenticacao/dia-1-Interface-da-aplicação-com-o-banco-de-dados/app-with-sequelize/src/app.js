const express = require('express');

const app = express();

const { Course } = require('./models');

app.get('/', async (_request, response) => {
  const courses = await Course.findAll();
  response.json(courses);
});

module.exports = app;
