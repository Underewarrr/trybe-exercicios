module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course_modules",
      [
        {
          course_id: 1,
          module_id: 1,
        },
        {
          course_id: 1,
          module_id: 2,
        },
        {
          course_id: 1,
          module_id: 3,
        },
        {
          course_id: 1,
          module_id: 4,
        },
        {
          course_id: 2,
          module_id: 1,
        },
        {
          course_id: 2,
          module_id: 3,
        },
        {
          course_id: 2,
          module_id: 5,
        },
        {
          course_id: 3,
          module_id: 1,
        },
        {
          course_id: 3,
          module_id: 2,
        },
        {
          course_id: 3,
          module_id: 6,
        },
        {
          course_id: 3,
          module_id: 7,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course_modules", null, {});
  },
};