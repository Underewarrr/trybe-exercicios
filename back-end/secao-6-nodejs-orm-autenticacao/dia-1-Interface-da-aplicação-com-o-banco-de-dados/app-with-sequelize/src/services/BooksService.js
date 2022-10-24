const { book } = require('../models');

const getAll = async () => {
    const result = await book.findAll();
    return result;
};

const getById = async (id) => {
    const result = await book.findByPk(id);
    return result;
};

const createBook = async (b) => {
    const result = await book.create(b);
    return result;
}

module.exports = {
    getAll,
    getById,
    createBook,
};