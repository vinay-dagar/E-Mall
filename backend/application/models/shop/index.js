const afterSave = require('./hooks/after-save');

const ShopSchema = new MongooseSchema({
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
    ]
}, {
    timestamp: true
})
ShopSchema.post('save', afterSave)

module.exports = Mongoose.model('Shop', ShopSchema)
