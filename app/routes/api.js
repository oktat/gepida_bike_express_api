const Router = require('express')
const router = Router()

const AuthController = require('../controllers/authcontroller')
const UserController = require('../controllers/usercontroller')
const BikeController = require('../controllers/bikecontroller')
const { verifyToken } = require('../middleware/authjwt')
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)

router.get('/bikes', BikeController.index)
router.post('/bikes', BikeController.create)
router.get('/bikes/:id', BikeController.show)
router.put('/bikes/:id', BikeController.update)
router.delete('/bikes/:id', BikeController.destroy)
 
module.exports = router
