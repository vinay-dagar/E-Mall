const beforeSave = require('./hooks/before-save');

const UserSchema = new MongooseSchema({
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
    isAccountLocked: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['superAdmin', 'shopAdmin', 'user'],
        default: 'user'
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

UserSchema.pre('save', beforeSave)

Object.assign(UserSchema.statics, requireDirectory(module, 'class-methods'))

module.exports = DB.model('User', UserSchema)
