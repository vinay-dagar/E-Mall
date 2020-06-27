const uuid = require('uuid');

exports.registerUser = async (req, res, next) => {
    try {
        const {
            name,
            password,
            email,
            phone,
            address
        } = req.body;

        const { role } = req.params;

        const existingUser = await domain.User.findByEmailAndPhone({ email, phone })

        if (existingUser)
            throw new Error('The Email/Phone already exists please try a different one.')

        const salt = uuid.v1();
        const encryptedPassword = domain.User.encryptPassword(salt, password);

        const userData = {
            name,
            password: encryptedPassword,
            email,
            phone,
            address,
            salt,
            role
        }

        const user = await new domain.User(userData).save();

        // if (role === 'shopAdmin') {
        //     await new domain.Shop({ name: user.name, user: user }).save()
        // }

        return res.status(200).json({
            user,
            message: "user created!"
        })
    } catch (err) {
        next(err)
    }
}
