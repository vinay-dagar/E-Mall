const qs = require('qs');

const parsedQuery = (req) => {
    const { url } = req;
    const queryString = url.split('?')

    const parsedQuery = qs.parse(queryString[1], {
        ignoreQueryPrefix: true,
        depth: 50,
        parameterLimit: 1000
    });

    if (parsedQuery.hasOwnProperty('limit')) {
        parsedQuery.limit = parseInt(parsedQuery.limit)
    }

    if (parsedQuery.hasOwnProperty('offset')) {
        parsedQuery.offset = parseInt(parsedQuery.offset)
    }

    return parsedQuery

}
exports.createProduct = async (req, res, next) => {
    try {
        const {
            title,
            price,
            description,
            imageUrl
        } = req.body;

        const data = {
            title,
            price,
            description,
            imageUrl,
            shopId: req.loggedInUser.Shop.id
        }

        if (req.isTesting) {
            return res.status(200).json({ msg: "Product created!" })
        }

        if (req.loggedInUser.isAccountLocked) {
            const err = new Error('Your account is locked. Please contact support')
            err.statusCode = 401
            next(err)
        }

        if (!req.loggedInUser.isEmailVerified || !req.loggedInUser.isPhoneVerified) {
            const err = new Error('Please verify your Email and Phone first')
            err.statusCode = 401
            throw err
        }

        await domain.Product.create(data)

        return res.status(201).json({
            message: "Product successfully created!",
        })

    } catch (err) {
        next(err)
    }
}

exports.getProductsList = async (req, res, next) => {
    try {
        let query = parsedQuery(req)

        query = {
            ...query,
            include: [
                {
                    model: domain.Rating,
                    attributes: ['id', 'rating']
                }
            ]
        }

        const product = await domain.Product.findAndCountAll(query)

        return res.status(200).json({ product })

    } catch (err) {
        next(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        if (!productId)
            throw new Error('Product id is required in order to delete the product!')

        const product = await domain.Product.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            const err = new Error('Product not found!');
            err.statusCode = 404;
            next(err)
        }

        await domain.Product.destroy({
            where: {
                id: productId
            }
        });

        return res.status(200).json({
            message: 'Product successfully deleted!'
        })

    } catch (err) {
        next(err)
    }
}

exports.getOneProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        if (!productId)
            throw new Error('Product identity is required!')

        const product = await domain.Product.findOne({
            where: {
                id: productId
            },
            include: [
                {
                    model: domain.Rating,
                    include: [{ model: domain.Review }]
                }
            ]
        });

        if (!product) {
            const err = new Error('Product not found!');
            err.statusCode = 404;
            next(err)
        }

        return res.status(200).json({
            product,
            message: "success"
        });

    } catch (err) {
        next(err)
    }
}

