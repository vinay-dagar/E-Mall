const beforeSave = require("./hooks/before-save")

const ProductSchema = new MongooseSchema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    imageUrl: [
        {
            type: String,
        }
    ],
    isInStock: {
        type: Boolean,
        default: false
    },
    shop: {
        type: ObjectId,
        ref: 'Shop'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    }
}, {
    timestamp: true
})

ProductSchema.post('update', beforeSave)

module.exports = Mongoose.model('Product', ProductSchema)
