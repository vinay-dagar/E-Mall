const controller = require('../application/controllers');
const router = require('express').Router();
const validationSchema = require('../application/validation');

const { validate } = Validate

router.post('/user/register',
    validate(validationSchema.user.registerUser, {}, {}),
    controller.user.registerUser
);

router.post('/user/login',
    validate(validationSchema.user.login, {}, {}),
    controller.authentication.login
);

module.exports = router
