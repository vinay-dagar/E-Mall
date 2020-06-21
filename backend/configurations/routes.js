const controller = require('../application/controllers');
const router = require('express').Router();
const validationSchema = require('../application/validation');

const { validate } = Validate

router.post('/user/register',
    validate(validationSchema.user.registerUser, {}, {}),
    controller.user.registerUser
);

module.exports = router
