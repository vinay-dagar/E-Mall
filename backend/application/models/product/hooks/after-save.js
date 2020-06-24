module.exports = async function (product) {
    try {
        console.log({product})
        return product;
    } catch (err) {
        return Promise.reject(err);
    }
};
