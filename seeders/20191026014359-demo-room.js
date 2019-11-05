'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('rooms', [
        {
          name: 'A1',
          customer_id: 1,
          order_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'A2',
          customer_id: 2,
          order_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'A3',
          customer_id: 1,
          order_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'B1',
          customer_id: null,
          order_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('rooms', null, {});
    
  }
};
