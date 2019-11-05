'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('customers', [
        {
          name: 'ANDI',
          identity_number: "110202987648450001",
          phone_number: "+62852244377211",
          image: 'https://swebtoon-phinf.pstatic.net/20190903_153/1567496069160zB6Ds_PNG/thumb_SWEETHOME_100_004.png?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BUDI',
          identity_number: "110202987648450001",
          phone_number: "+62852244377211",
          image: 'https://swebtoon-phinf.pstatic.net/20190903_153/1567496069160zB6Ds_PNG/thumb_SWEETHOME_100_004.png?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DIMAS',
          identity_number: "110202987648450001",
          phone_number: "+62852244377211",
          image: 'https://swebtoon-phinf.pstatic.net/20190903_153/1567496069160zB6Ds_PNG/thumb_SWEETHOME_100_004.png?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TOMY',
          identity_number: "110202987648450001",
          phone_number: "+62852244377211",
          image: 'https://swebtoon-phinf.pstatic.net/20190903_153/1567496069160zB6Ds_PNG/thumb_SWEETHOME_100_004.png?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('customers', null, {});
    
  }
};
