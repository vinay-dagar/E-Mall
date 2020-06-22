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

exports.login = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body;

        if (!username) throw new Error('Usename is required');
        if (!password) throw new Error('Password is required');

        const user = await domain.User.findByEmailOrPhone(username);

        if (!user) throw new Error('User not found. Please try again!')

        if (user.isAccountLocked) throw new Error('Your account has been locked. Please contact support!')
        if (!user.isEmailVerified) throw new Error('Please verify your email')

        const sendUser = omit(user, ['isAccountLocked', 'isEmailVerified', 'salt', 'password'])

        const token = configHolder.jwtUtility.createToken(sendUser.id)

        if (!token) throw new Error('Token not generated!')

        return res.status(200).json({
            user: sendUser,
            token
        })

    } catch (err) {
        next(err)
    }
}
