'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('users', [
      {
        name: 'Said Ahmad Ali',
        email: 'admin1@gmail.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Muhammad Yunus',
        email: 'admin2@gmail.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sulaiman Ali',
        email: 'admin3@gmail.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], 
    {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('users', null, {});
  
  }
};
