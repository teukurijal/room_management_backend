const models = require('../models')
const Room = models.room


//done
exports.index = (req, res) => {

    Room.findAll({
       
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
    }
    Room.create(body)
    .then(room=> {
        res.send({
            message: "success", 
            room
        })
    }).catch(err => {
        console.log(err)
    })
}

//done
exports.update = (req, res) => {

    const{id} = req.params

    Room.update(
        req.body,
        { 
            where: {id: id}
        }

    ).then(room=> {
        res.send({
            message: "success update room"
        })
    }).catch(err => {
        console.log(err)
    })
}







// exports.show = (req, res) => {
//     const { toon_id } = req.params
//     User.findOne({
//         where: { id: toon_id },
//         //   include: [{
//         //     model: User,
//         //     as: "userid"
//         // }]
//     }).then(posts=>
//         res.send(posts)
//     ).catch(err => {
//         console.log(err)
//     })
// }

// exports.delete = (req, res) => {
//     const {user_id, toon_id} =req.params
//     Webtoon.destroy({
//         where: {createdBy: user_id, id: toon_id}
//     }).then(post=> {
//         res.send({
//             message: "success",
//             post
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }

