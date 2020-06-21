const domain = require("../models");

exports.registerUser = async (req, res, next) => {
    try {
        const { body } = req;

        const result = await new domain.User(body).save();

        return res.status(200).json({
            result,
            message: "user created!"
        })
    } catch (err) {
        next(err)
    }
}