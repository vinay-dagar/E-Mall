const WishlistSchema = new MongooseSchema({
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
}, {
    timestamp: true
})

module.exports = Mongoose.model('Wishlist', WishlistSchema)
