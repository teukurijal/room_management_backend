const models = require('../models')
const Customer = models.customer


//done
exports.index = (req, res) => {

        Customer.findAll({
           
        }).then(room => {

            res.status(200).send({
                room
            })
        })
}

//done
exports.store = (req, res) => {
    const body = {
        name: req.body.name,
        identity_number: req.body.identity_number,
        phone_number: req.body.phone_number,
        image: req.body.image
    }
    Customer.create(body)
    .then(customer=> {
        res.send({
            message: "success", 
            customer
        })
    }).catch(err => {
        console.log(err)
    })
}

//done
exports.update = (req, res) => {

    const{id} = req.params

    Customer.update(
        req.body,{
             where: {id: id}
        }

    ).then(customer=> {
        res.send({
            message: "success update customer"
        })
    }).catch(err => {
        console.log(err)
    })
}





