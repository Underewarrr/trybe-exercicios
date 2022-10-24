module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "modules",
      [
        {
          name: "Fundamentos",
          description: "Base para programação",
          duration: 2,
        },
        {
          name: "Frontend",
          description: "Base para programação frontend",
          duration: 2,
        },
        {
          name: "Backend",
          description: "Base para programação backend",
          duration: 7,
        },
        {
          name: "CS",
          description: "Base para programação CS",
          duration: 2,
        },
        {
          name: "Nest.JS",
          description: "Base para Nest.JS",
          duration: 2,
        },
        {
          name: "React Native",
          description: "Base para programação Mobile com React",
          duration: 2,
        },
        {
          name: "Flutter",
          description: "Base para programação Mobile com Flutter",
          duration: 2,
        },
      ],
      {}
    );
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modules", null, {});
  },
};