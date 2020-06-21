const userController = require('../application/controllers');
const router = require('express').Router();
const { validate } = require('express-validation');

router.post('/user/register', userController.registerUser);

module.exports = router