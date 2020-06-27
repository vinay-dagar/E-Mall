module.exports = async (req, res, next) => {
    try {
        let token = req.get('x-access-token');

        if (!token) {
            const err = new Error('Unauthorized. Token not found!');
            err.statusCode = 401
            next(err)
        }

        token = token.split(' ')[1];

        if (!token) {
            const err = new Error('ACCESS-TOKEN is not formated properly!');
            err.statusCode = 401
            next(err)
        }

        const { userId, type } = configHolder.jwtUtility.get(token, process.env.APP_SECRET_KEY)

        if (type && type === 'test') {
            req.isTesting = true
            return next()
        }

        if (!userId) {
            const err = new Error('Unauthorized.');
            err.statusCode = 401
            next(err)
        }

        const user = await domain.User.findById(userId)
            .populate('shop');

        if (!user) {
            const error = new Error('Unauthorised. user not found!')
            error.statusCode = 401
            next(error);
        }

        req.loggedInUser = user
        next()

    } catch (err) {
        err.statusCode = 500;
        next(err)
    }
}