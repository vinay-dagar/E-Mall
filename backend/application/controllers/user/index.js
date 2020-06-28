const uuid = require('uuid');

exports.registerUser = async (req, res, next) => {
    try {
        const {
            name,
            password,
            email,
            phone,
            address
        } = req.body;

        const { role } = req.params;

        const existingUser = await domain.User.findOne({
            where: {
                email: email
            }
        })

        if (existingUser)
            throw new Error('The Email/Phone already exists please try a different one.')

        const salt = uuid.v1();
        const encryptedPassword = domain.User.encryptPassword(salt, password);

        const userData = {
            name,
            password: encryptedPassword,
            email,
            phone,
            address,
            salt,
            role
        }

        const user = await domain.User.create(userData);

        return res.status(200).json({
            user,
            message: "user created!"
        })
    } catch (err) {
        next(err)
    }
}

exports.addToWishlist = async (req, res, next) => {
    try {
        const { productId } = req.params;

        if (!productId)
            throw new Error('Product not provided!')

        const product = await domain.Product.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            const err = new Error('Product not found!');
            err.statusCode = 404
            next(err)
        };

        const { Wishlists } = req.loggedInUser.Customer;

        const isProductWishlisted = Wishlists.find(a => a.productId === productId)

        if (isProductWishlisted) {
            await domain.Wishlist.destroy({
                where: {
                    id: isProductWishlisted.id
                }
            })
        } else {
            const data = {
                productId,
                customerId: req.loggedInUser.Customer.id
            }
        }

        await domain.Wishlist.create(data)

        return res.status(200).json({
            message: `Product successfully ${isProductWishlisted ? 'removed from' : 'added to'} wishlist`
        })

    } catch (err) {
        next(err)
    }
}
