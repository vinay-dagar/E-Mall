module.exports = async (instance) => {
    try {

        if (instance.role === 'shopAdmin') {
            const data = {
                name: instance.name,
                userId: instance.id,
            }

            await domain.Shop.create(data)
        }

        if (instance.role === 'customer') {
            const data = {
                name: instance.name,
                userId: instance.id,
            }

            await domain.Customer.create(data)
        }

        return Promise.resolve(instance)
    } catch (err) {
        return Promise.reject(err)
    }
}