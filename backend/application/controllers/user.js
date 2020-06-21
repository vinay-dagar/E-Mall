const domain = require("../models");

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

        const salt = uuid.v1();
        const encryptedPassword = domain.User.encryptPassword(salt, password);

        const userData = {
            name,
            password: encryptedPassword,
            email,
            phone,
            address,
            salt,
        }

        const result = await new domain.User(userData).save();

        return res.status(200).json({
            result,
            message: "user created!"
        })
    } catch (err) {
        next(err)
    }
}