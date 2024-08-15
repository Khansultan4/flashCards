'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Космос',
          image: 'https://vladivostok.mir-kvestov.ru/uploads/quests/2743/original/kvestkafe_kosmos_photo1.jpg?1692627455',
         
        },
        {
          title: 'География',
          image: 'https://petrsu.ru/files/news_notice_event/2021/8/17/thumbnails/970_1629274047_unnamed-1.jpg',
         
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
