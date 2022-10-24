const express = require('express');
const moduleController = require('../controllers/module.controller');

const router = express.Router();

router.get('/:id', moduleController.findById);

module.exports = router;