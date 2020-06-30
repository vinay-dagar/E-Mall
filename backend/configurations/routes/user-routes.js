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
)

//  User Wishlist routes

router.post('/wishlist/:productId',
    middleware.authentication,
    middleware.access.canAccess(['customer']),
    controller.user.addToWishlist
)
    .get('/wishlist/get',
        middleware.authentication,
        middleware.access.canAccess(['customer']),
        controller.user.getWishlists
    )

//  User Cart Routes

router.post('/cart/add-to-cart',
    middleware.authentication,
    middleware.access.canAccess(['customer']),
    controller.cart.addToCart
)
    .post('/cart/remove-product-from-cart',
        middleware.authentication,
        middleware.access.canAccess(['customer']),
        controller.cart.removeProduct
    )

module.exports = router
