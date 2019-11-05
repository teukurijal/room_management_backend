'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    is_done: DataTypes.BOOLEAN,
    is_booked: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.DATE
  }, {});
  order.associate = function(models) {
   
  };
  return order;
};