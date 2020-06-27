const afterSave = require('./hooks/after-save');

const CustomerSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
    orders: [
        {
            type: ObjectId,
            ref: 'Order'
        }
    ],
    cart: {
        type: ObjectId,
        ref: 'Cart'
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
}, {
    timestamp: true
})
CustomerSchema.post('save', afterSave)

module.exports = Mongoose.model('Customer', CustomerSchema)
