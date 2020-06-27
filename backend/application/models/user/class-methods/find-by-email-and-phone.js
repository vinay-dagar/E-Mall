module.exports = async ({ email, phone }) => {
    try {
        const user = await domain.User.findOne({
            $or: [
                { phone },
                { email },
            ]
        })

        return user;
    } catch (err) {
        throw new Error(err)
    }
}