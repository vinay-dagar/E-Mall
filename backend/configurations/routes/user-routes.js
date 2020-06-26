const router = require('express').Router();
const controller = require('../../application/controllers');
const validationSchema = require('../../application/validation');

const { validate } = Validate

router.post('/register',
    validate(validationSchema.user.registerUser, {}, {}),
    controller.user.registerUser
);

router.post('/login',
    middleware.decrypt,
    validate(validationSchema.user.login, {}, {}),
    controller.authentication.login
);

module.exports = router
