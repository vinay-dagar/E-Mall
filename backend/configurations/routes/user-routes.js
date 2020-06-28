const router = require('express').Router();
const controller = require('../../application/controllers');
const validationSchema = require('../../application/validation');

const { validate } = Validate

router.post('/register/:role',
    validate(validationSchema.user.registerUser, {}, {}),
    controller.user.registerUser
);

router.post('/login',
    // middleware.decrypt,
    validate(validationSchema.user.login, {}, {}),
    controller.authentication.login
);

router.post('/wishlist/:productId',
    middleware.authentication,
    middleware.access.canAccess(['customer']),
    controller.user.addToWishlist
);

module.exports = router
