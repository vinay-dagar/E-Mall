module.exports = async (username) => {
    try {
        const user = await domain.User.findOne({
            where: {
                $or: [
                    { phone: username },
                    { email: username },
                ]
            }
        })

        return user;
    } catch (err) {
        throw new Error(err)
    }
}