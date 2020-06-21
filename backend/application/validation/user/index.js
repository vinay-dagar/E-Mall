const { Joi } = Validate;

const registerUser = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .message('User name is required. And must be atleast 3 character long!'),
        email: Joi.string()
            .email()
            .message('User email must be provided!'),
        password: Joi.string()
            .required()
            .min(8)
            .max(15)
            .message('Password must be Alpha Numeric and 8-15 character long'),
        phone: Joi.string()
            .min(10)
            .max(10)
            .message('Phone number should be of 10 character'),
        address: Joi.string(),
    })
}

module.exports = {
    registerUser
}