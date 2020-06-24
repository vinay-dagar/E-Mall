const domain = require("../../models");

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
            imageUrl
        }

        if (req.loggedInUser.isAccountLocked)
            throw new Error('Your account is locked. Please contact support')

        if (!req.loggedInUser.isEmailVerified || !req.loggedInUser.isPhoneVerified) {
            const err = new Error('Please verify your Email and Phone first')
            err.statusCode = 401
            throw err
        }

        const product = await domain.Product(data).save()

        return res.status(201).json({
            message: "Product successfully created!",
        })

    } catch (err) {
        next(err)
    }
}