exports.createOrder = async (req, res, next) => {
    try {
        const customerId = req.loggedInUser.Customer.id;

        const cart = await domain.Cart.findOne({
            where: {
                customerId
            }
        });

        if(!cart) {
            const err = new Error('Cart not found!');
            err.statusCode = 404;
            next(err)
        }

        const cartItems = await domain.CartProduct.findAll({
            where: {
                cartId: cart.id
            }
        });

        if(!cartItems || !cartItems.length) 
            throw new Error('Your cart is empty!')

        return res.status(200).json({
            message: "Order successfull"
        })

    } catch (err) {
        next(err)
    }
}