exports.addToCart = async (req, res, next) => {
    try {
        const { productId } = req.body;

        if (!productId)
            throw new Error('Product is required!')

        const customerId = req.loggedInUser.Customer.id

        const cart = await domain.Cart.findOne({
            where: {
                customerId,
            },
            include: [
                {
                    model: domain.CartProduct,
                    include: [{ model: domain.Product }]
                }
            ]
        });

        if (!cart)
            throw new Error('Cart not found!')

        const product = await domain.Product.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            const err = new Error('Product not found!')
            err.statusCode = 404
            next(err)
        }

        let totalAmount = parseInt(cart.totalAmount);
        const isProductExist = cart.CartProducts.find(c => c.productId === productId);


        await domain.Cart.update({
            totalAmount: totalAmount + parseInt(product.price)
        }, {
            where: {
                id: cart.id,
            }
        })

        if (isProductExist) {
            let quantity = isProductExist.quantity;

            await domain.CartProduct.update({
                quantity: ++quantity
            }, {
                where: {
                    cartId: cart.id,
                    productId
                }
            })

        } else {
            const data = {
                productId,
                cartId: cart.id,
                quantity: 1
            }
            await domain.CartProduct.create(data)
        }

        return res.status(200).json({
            message: "Cart successfully updated"
        })

    } catch (err) {
        next(err)
    }
}

exports.removeProduct = async (req, res, next) => {
    try {
        const { productId } = req.body;

        const customerId = req.loggedInUser.Customer.id

        if (!productId)
            throw new Error('Product is required')

        const cart = await domain.Cart.findOne({
            where: {
                customerId
            },
            include: [{ model: domain.CartProduct }]
        });

        if (!cart) {
            const err = new Error('Cart not available!')
            err.statusCode = 404
            next(err)
        }

        const product = await domain.Product.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            throw new Error('Product not found!')
        }

        const isProductAvailableInCart = cart.CartProducts.find(p => p.productId === productId);

        if (!isProductAvailableInCart) {
            throw new Error('Product is not available in your cart.')
        }

        let quantity = isProductAvailableInCart.quantity;
        let totalAmount = cart.totalAmount;

        await domain.Cart.update({
            totalAmount: totalAmount - parseInt(product.price)
        }, {
            where: {
                id: cart.id
            }
        })

        if (quantity == 1) {

            await domain.CartProduct.destroy({
                where: {
                    productId: productId,
                    cartId: cart.id
                }
            })
        } else {
            await domain.CartProduct.update({
                quantity: --quantity
            }, {
                where: {
                    cartId: cart.id,
                    productId
                }
            })
        }

        return res.status(200).json({
            message: 'Cart successfully updated!'
        })

    } catch (err) {
        next(err)
    }
}

