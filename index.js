const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 9000

const AuthController = require('./controllers/auth') //done
const UserController = require('./controllers/users') //done
const RoomController = require('./controllers/rooms') //done
const CustomerController = require('./controllers/customers')
const OrderController = require('./controllers/orders')

const { authenticated } = require('./middleware')

const multer = require('multer')
    //change memoryStorage to buffer file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {

      cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
  })

const upload = multer({ storage: storage })
app.use(express.static('uploads')); 

app.use(bodyParser.json())

app.group("/api/v2", (router) => {

  // router.put('/user/:user_id/upload', upload.single('profile'), CustomerController.upload)

  router.post('/register',UserController.store) //done
  router.post('/login', AuthController.login) //done
  
  router.get('/rooms', authenticated, RoomController.index)  //done
  router.post('/room', authenticated,  RoomController.store) //done
  router.put('/room/:id', authenticated, RoomController.update) //done

  router.get('/customers',  authenticated, CustomerController.index)//done
  router.post('/customer',  authenticated, CustomerController.store)//done
  router.put('/customer/:id', upload.single('profile'), authenticated, CustomerController.update) //done

  router.get('/checkin', authenticated, OrderController.index)//done
  router.post('/checkin', authenticated, OrderController.store)//done
  router.put('/order/:id', authenticated, OrderController.update) //done
  // router.delete('/user/:user_id/webtoon/:toon_id/', authenticated, RoomController.delete)


})

app.listen(port, () => console.log(`Listening on port ${port}!`))