module.exports = async (shop) => {
    try {

        await domain.User.findOneAndUpdate({ _id: shop.user }, {
            shop
        });

        Promise.resolve(shop)
    } catch (err) {
        Promise.reject(err)
    }
}