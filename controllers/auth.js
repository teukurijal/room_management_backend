const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    
    
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!

    User.findOne({
        where: {email, password}
    
    }).then(user=>{
        
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            const name = user.name
            res.status(200).send({
                name,
                email,
                token
            })
        
    }).catch(err =>{
        res.status(400).send({
            
            error: true,
            message: "Wrong Email or Password!"
        })
        console.log(err)
    })
}

