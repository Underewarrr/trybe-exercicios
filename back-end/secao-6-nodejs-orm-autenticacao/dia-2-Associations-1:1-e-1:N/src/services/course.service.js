const { Course, Student, Module } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration }) => 
  Course.create({ name, description, creationDate, active, duration });

const getCourses = async () => Course.findAll({
  include: [
    { model: Student, as: 'students', attributes: { exclude: ['name'] } },
    { model: Module, as: 'modules', attributes: ['name', 'duration'], through: { attributes: [] } },
  ],
});

const updateCourse = async (id, { name, description, creationDate, active, duration }) => {
  const [qtdUpdated] = await Course.update(
    { name, description, creationDate, active, duration },
    { where: { id } },
  );

  return qtdUpdated > 0;
};

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id } });

  return qtdRemoved > 0;
};

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
};