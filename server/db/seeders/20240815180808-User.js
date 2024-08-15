'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Andrey',
          email: 'Andrey@k.ru',
          password: '123',
        },
        {
          username: 'Sultan',
          email: 'Sultan@k.ru',
          password: '123',
        },
        {
          username: 'Pavel',
          email: 'Pavel@k.ru',
          password: '123',
        },
        {
          username: 'Sergey',
          email: 'Sergey@k.ru',
          password: '123',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
