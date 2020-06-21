const OrderSchema = new MongooseSchema({
    paymentId: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    paymentMethod: {
        type: ObjectId,
        ref: 'PaymentMethod'
    },
    shop: {
        type: ObjectId,
        ref: 'Shop'
    },
    products: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
    paymentResponse: {
        type: Object,
        default: {}
    }
}, {
    timestamp: true
})

module.exports = Mongoose.model('Order', OrderSchema)
