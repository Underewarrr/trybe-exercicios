const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
    const result = await BooksService.getAll();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await BooksService.getById(id);
    if (!result) {
        return res.status(404).json({ "message": "Book not found" });
    }
    res.status(200).json(result);
};

const createBook = async (req, res) => {
    const book = req.body;
    try {
        const result = await BooksService.createBook(book);
        return res.status(201).json(result);
    } catch {
        return res.status(500).json({ error: 'Erro durante o cadastro' })
    };
};

module.exports = {
    getAll,
    getById,
    createBook,
};