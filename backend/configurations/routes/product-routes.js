const router = require('express').Router();
const controller = require('../../application/controllers');
const validationSchema = require('../../application/validation');

const { validate } = Validate

router.post('/create',
    middleware.authentication,
    middleware.access.canAccess(['shopAdmin', 'superAdmin']),
    validate(validationSchema.product.createProduct, {}, {}),
    controller.product.createProduct
);

// router.post('/login',
//     validate(validationSchema.user.login, {}, {}),
//     controller.authentication.login
// );

module.exports = router
