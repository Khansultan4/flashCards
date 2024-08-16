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
        {
          title: 'Авто',
          image: 'https://img.uhdpaper.com/wallpaper/sports-car-digital-art-755@1@l-preview.jpg',
         
        },
        {
          title: 'Реакт',
          image: 'https://wallpapersmug.com/download/1600x900/acd20d/reactjs-atom-minimal.jpg',
         
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
