'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Andrey',
          email: 'Andrey@k.ru',
          password: '123',
        },
        {
          name: 'Sultan',
          email: 'Sultan@k.ru',
          password: '123',
        },
        {
          name: 'Pavel',
          email: 'Pavel@k.ru',
          password: '123',
        },
        {
          name: 'Sergey',
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
