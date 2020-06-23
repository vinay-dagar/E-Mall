const { Joi } = Validate;

const createProduct = {
    body: Joi.object({
        title: Joi.string()
            .required()
            .min(3)
            .message('Title is required. And must be atleast 3 character long!'),
        price: Joi.number()
            .required()
            .min(1)
            .message('Product price must be provided!'),
        description: Joi.string()
            .required()
            .min(50)
            .message('Description is required and must be atleast 50 character long'),
        imageUrl: Joi.string(),
    })
};

module.exports = {
    createProduct
}