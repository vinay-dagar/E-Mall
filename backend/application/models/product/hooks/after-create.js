module.exports = async function (product) {
    try {
        return Promise.resolve(product);
    } catch (err) {
        return Promise.reject(err);
    }
};
