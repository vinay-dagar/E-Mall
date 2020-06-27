const afterSave = require("./hooks/after-save")

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
        default: true
    },
    shop: {
        type: ObjectId,
        ref: 'Shop',
        required: true
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
}, {
    timestamp: true
})

ProductSchema.post('save', afterSave)

module.exports = Mongoose.model('Product', ProductSchema)
