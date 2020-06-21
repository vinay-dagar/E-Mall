const userController = require('../controllers/user');
const router = require('express').Router();
const { validate } = require('express-validation');

router.post('/user/register', userController.registerUser);

module.exports = router