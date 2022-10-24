const express = require('express');
const BooksController = require('../controllers/BooksController');

const routes = express.Router();

routes.get('/', BooksController.getAll);
routes.get('/:id', BooksController.getById);
routes.post('/', BooksController.createBook);

module.exports = {
    routes,
};
