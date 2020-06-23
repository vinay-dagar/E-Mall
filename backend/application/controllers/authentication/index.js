const { omit } = require('lodash')

exports.login = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body;

        if (!username) throw new Error('Usename is required');
        if (!password) throw new Error('Password is required');

        let user = await domain.User.findByEmailOrPhone(username);

        if(!user.isPasswordValid(password)) {
            throw new Error('Authentication failed. Wrong password!')
        }

        if (!user) throw new Error('User not found. Please try again!')

        if (user.isAccountLocked) throw new Error('Your account has been locked. Please contact our support!')
        if (!user.isEmailVerified) throw new Error('Please verify your email')

        user = JSON.parse(JSON.stringify(user));
        user = omit(user, ['password', 'salt']);

        const token = configHolder.jwtUtility.createToken(user._id)

        if (!token) throw new Error('Token not generated!')

        return res.status(200).json({
            user,
            token
        })

    } catch (err) {
        next(err)
    }
}