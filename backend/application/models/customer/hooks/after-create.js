module.exports = async (customer) => {
    try {
        return Promise.resolve(customer)
    } catch (err) {
        return Promise.reject(err)
    }
}