module.exports = async (newUser) => {
    try {

        if (newUser.role === 'shopAdmin') {
            const data = {
                name: newUser.name,
                user: newUser,
            }

            await new domain.Shop(data).save()
        }

        if (newUser.role === 'customer') {
            const data = {
                name: newUser.name,
                user: newUser,
            }

            await new domain.Customer(data).save()
        }

        Promise.resolve(newUser)
    } catch (err) {
        Promise.reject(err)
    }
}