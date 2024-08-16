'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Космос',
          image: 'https://c4.wallpaperflare.com/wallpaper/899/936/977/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg',
         
        },
        {
          title: 'География',
          image: 'https://images.wallpaperscraft.com/image/single/globe_country_ball_94625_1600x900.jpg',
         
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
