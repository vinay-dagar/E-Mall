
exports.createProduct = async (req, res, next) => {
    try {
        const {
            title,
            price
        } = req.body;

        return res.status(200).json({
            title,
            price
        })

    } catch (err) {
        next(err)
    }
}