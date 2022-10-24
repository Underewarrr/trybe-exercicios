const express = require('express');
const courseRouter = require('./course.router');
const studentRouter = require('./student.router');
const moduleRouter = require('./module.router');


const routers = express.Router();

routers.use('/courses', courseRouter);
routers.use('/students', studentRouter);
routers.use('/modules', moduleRouter);


module.exports = routers;