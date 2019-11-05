'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {});
  room.associate = function(models) {
    // associations can be defined here
    room.belongsTo(models.customer, {
      through: 'customer',
      as: 'customer',
      foreignKey: 'customer_id',
    });
    room.belongsTo(models.order, {
      through: 'order',
      as: 'order',
      foreignKey: 'order_id',
    });
  };
  return room;
};