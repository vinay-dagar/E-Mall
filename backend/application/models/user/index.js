const beforeCreate = require('./hooks/before-create');

const userSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        requied: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isPhoneVerified: {
        type: Boolean,
        default: false
    },
    isAccountDeactive: {
        type: Boolean,
        default: false
    },
    role: {
        type: ObjectId,
        ref: 'Role'
    },
    reviews: [
        {
            type: ObjectId,
            ref: 'Review'
        }
    ],
    ratings: [
        {
            type: ObjectId,
            ref: 'Rating'
        }
    ],
    cart: {
        type: ObjectId,
        ref: 'Cart'
    },
    products: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
    paymentMethods: [
        {
            type: ObjectId,
            ref: 'PaymentMethod'
        }
    ],
    rememberPayment: {
        type: Boolean,
        default: false
    },
    whishlist: [
        {
            type: ObjectId,
            ref: 'Wishlist'
        }
    ],
    shop: {
        type: ObjectId,
        ref: 'Shop'
    },
    orders: [
        {
            type: ObjectId,
            ref: 'Order'
        }
    ],
    salt: {
        type: String,
        default: '',
        trim: true,
    },
    password: {
        type: String,
        trim: true
    },
}, {
    timestamp: true
})

Object.assign(userSchema.statics, requireDirectory(module, 'class-methods'))

module.exports = DB.model('User', userSchema)
