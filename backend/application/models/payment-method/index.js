const PaymentMethodSchema = new MongooseSchema({
    type: {
        type: String,
        enum: ['card', 'upi', 'net_banking'],
        default: 0
    },
    cardNumber: {
        type: String,
        default: ''
    },
    upiId: {
        type: String,
        default: ''
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
}, {
    timestamp: true
})

module.exports = Mongoose.model('PaymentMethod', PaymentMethodSchema)
