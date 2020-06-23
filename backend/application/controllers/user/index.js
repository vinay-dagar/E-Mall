const uuid = require('uuid');
const { omit } = require('lodash')

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

        const user = await new domain.User(userData).save();

        return res.status(200).json({
            user,
            message: "user created!"
        })
    } catch (err) {
        next(err)
    }
}
