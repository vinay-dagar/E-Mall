module.exports = async function (product) {
    try {

        await domain.Shop.findOneAndUpdate({ _id: product.shop }, {
            $push: {
                products: product
            }
        });

        return Promise.resolve(product);
    } catch (err) {
        return Promise.reject(err);
    }
};
