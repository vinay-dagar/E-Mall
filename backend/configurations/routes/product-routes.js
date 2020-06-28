const router = require('express').Router();
const controller = require('../../application/controllers');
const validationSchema = require('../../application/validation');

const { validate } = Validate

router.post('/create',
    middleware.authentication,
    middleware.access.canAccess(['shopAdmin', 'superAdmin']),
    validate(validationSchema.product.createProduct, {}, {}),
    controller.product.createProduct
)
    .get('/list',
        middleware.access.canAccess(['anonymous']),
        controller.product.getProductsList
    )
    .delete('/delete/:productId',
        middleware.authentication,
        middleware.access.canAccess(['shopAdmin', 'superAdmin']),
        controller.product.deleteProduct
    )
    .get('/details/:productId',
        middleware.access.canAccess(['anonymous']),
        controller.product.getOneProduct
    )


module.exports = router
