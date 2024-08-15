'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Scores',
      [
        {
          rating: '10',
          userId: '1',
          themeId: '1',
        
        },
        {
          rating: '9',
          userId: '2',
          themeId: '2',
        
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scores', null, {});
  },
};
