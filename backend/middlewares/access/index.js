module.exports = (function () {
    const canAccess = (access = ['superAdmin']) => {
        return async (req, res, next) => {
            try {
                const { role } = req.loggedInUser;

                if (!role) {
                    const err = new Error('Permission denied.')
                    err.statusCode = 403
                    next(err)
                }

                if (!access.includes(role)) {
                    const err = new Error('Permission denied. Forbidden!')
                    err.statusCode = 403
                    next(err)
                }

                next()

            } catch (err) {
                next(err)
            }
        }
    }

    return {
        canAccess
    }

})()