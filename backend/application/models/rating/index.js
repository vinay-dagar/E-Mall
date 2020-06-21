const RatingSchema = new MongooseSchema({
    rate: {
        type: Number,
        defult: 0
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    products: {
        type: ObjectId,
        ref: 'Product'
    },
    review: {
        type: ObjectId,
        ref: 'Product'
    }
}, {
    timestamp: true
})

module.exports = Mongoose.model('Rating', RatingSchema)
