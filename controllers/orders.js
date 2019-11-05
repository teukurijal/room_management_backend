const models = require('../models')
const Order = models.order
const Customer = models.customer
const Room = models.room




exports.index = (req, res) => {

    Room.findAll({
       include: [
            {
              model: Customer,
              as: 'customer',
              attributes: {exclude: ["createdAt","updatedAt"]},
            },
            {
              model: Order,
              as: 'order',
              attributes: {exclude: ["createdAt","updatedAt"]},
              // where: {is_done: false}
            },
        ],
        attributes: {exclude: ["createdAt","updatedAt",]},
    
    }).then(data => {

        res.status(200).send(
            {data}
          
        )
    }).catch(err => {
        console.log(err)
    })
}


exports.store = (req, res) => {

    const order = {
      duration: req.body.duration,
      order_end_time: req.body.order_end_time,
      is_done: req.body.is_done,
      is_booked: req.body.is_booked,
    }
    const room = {
      room_id: req.body.room_id,
      customer_id: req.body.customer_id,
    }
    Order.create(order).then((order_res) => {
      // console.log(order_res.dataValues)
      Room.update(
        {
          ...room,
          order_id: order_res.dataValues.id,
        },
        {
          where: { id: room.room_id }
        }
      ).then(room_res => {
        res.send({
          message: "success create order",
        })
      }).catch(room_err => console.log('room_err', room_err))
    }).catch(order_err => console.log('order_err', order_err))

}


exports.update = (req, res) => {

    const{ id } = req.params

    Room.update(
      req.body,
      {
        where: {id: id}
      }

    ).then(customer=> {
        res.send({
            message: "success update order"
        })
    }).catch(err => {
        console.log(err)
    })
}





