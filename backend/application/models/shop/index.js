const ShopSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
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
    ],
    orders: [
        {
            type: ObjectId,
            ref: 'Order'
        }
    ]
}, {
    timestamp: true
})

module.exports = Mongoose.model('Shop', ShopSchema)
