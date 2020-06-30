module.exports = (cartProduct) => {
    try {
        return Promise.resolve(cartProduct)
    } catch (err) {
        return Promise.reject(err)
    }
}