const { omit } = require('lodash');

exports.login = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body;

        if (!username) throw new Error('Usename is required');
        if (!password) throw new Error('Password is required');

        let user = await domain.User.findOne({
            where: {
                email: username
            },
            include: [
                {
                    model: domain.Customer,
                    include: [
                        {
                            model: domain.Cart
                        },
                    ]
                },
                {
                    model: domain.Shop
                },
            ]
        });

        if (!user) {
            const err = new Error('User not found. Please try again with different username')
            err.statusCode = 404
            next(err)
        }

        if (!user.isPasswordValid(password)) {
            throw new Error('Authentication failed. Wrong password!')
        }

        if (user.isAccountLocked) throw new Error('Your account has been locked. Please contact our support!')
        if (!user.isEmailVerified) throw new Error('Please verify your email')

        if (req.isTesting) {
            return res.status(200).json({
                token: process.env.JWT_DUMMY_TOKEN,
                user: DUMMY_USER
            })
        }

        user = JSON.parse(JSON.stringify(user));
        user = omit(user, ['password', 'salt']);

        const payload = {
            userId: user.id,
            type: "login"
        }

        const token = configHolder.jwtUtility.createToken(payload)

        if (!token) throw new Error('Token not generated!')

        return res.status(200).json({
            user,
            token
        })

    } catch (err) {
        next(err)
    }
}

const encryptData = async (data) => {
    try {
        const user = {}

        const userKeys = Object.keys(data);
        for (const key of userKeys) {
            user[key] = configHolder.secureUtility.encryptData(JSON.stringify(data[key]))
        }
        return user

    } catch (err) {
        err.statusCode = err.status || 500;
        throw err
    }
}
const DUMMY_USER = {
    name: "dummy",
    _id: "dummy_user_id_",
    email: "dummy122@emall.com",
    phone: "9999999999",
    role: "test"
}