module.exports = async (customer) => {
    try {

        await domain.Cart.create({
            customerId: customer.id,
            totalAmount: 0
        })

        return Promise.resolve(customer)
    } catch (err) {
        return Promise.reject(err)
    }
}