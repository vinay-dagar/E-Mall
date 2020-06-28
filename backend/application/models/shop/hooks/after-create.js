module.exports = async (shop) => {
    try {
        return Promise.resolve(shop)
    } catch (err) {
        return Promise.reject(err)
    }
}