const { Module, Course } = require('../models');

const findById = (id) => Module.findByPk(id, {
  include: [
    { 
      model: Course, 
      as: 'courses',
      through: { attributes: [] },
    },
  ],
});

module.exports = {
  findById,
};