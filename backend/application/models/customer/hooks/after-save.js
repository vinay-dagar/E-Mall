module.exports = async (customer) => {
    try {

        await domain.User.findOneAndUpdate({ _id: customer.user }, {
            customer
        });

        Promise.resolve(customer)
    } catch (err) {
        Promise.reject(err)
    }
}