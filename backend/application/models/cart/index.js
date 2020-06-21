const CartSchema = new MongooseSchema({
    items: {
        type: Number,
        default: 0
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    products: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ]
}, {
    timestamp: true
})

module.exports = Mongoose.model('Cart', CartSchema)
