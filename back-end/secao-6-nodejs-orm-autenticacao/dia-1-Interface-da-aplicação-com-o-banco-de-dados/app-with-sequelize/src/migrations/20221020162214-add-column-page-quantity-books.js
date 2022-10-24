'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('books', 'pageQuantity', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'author', // mérito do Pablo e Edmilson
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'pageQuantity');
  }
};
