const moduleService = require('../services/module.service');

const findById = async (req, res) => {
  const { id } = req.params;

  const student = await moduleService.findById(id);

  res.status(200).json(student);
};

module.exports = {
  findById,
};