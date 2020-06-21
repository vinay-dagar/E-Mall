const ReviewSchema = new MongooseSchema({
    comment: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['bad', 'average', 'good'],
        default: 'good'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    product: {
        type: ObjectId,
        ref: 'Product'
    },
    rating: {
        type: ObjectId,
        ref: 'Rating'
    }
}, {
    timestamp: true
})

module.exports = Mongoose.model('Review', ReviewSchema)
