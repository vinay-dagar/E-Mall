const fields = require('./fields');

const wishlistSchema = SequelizeConnect.define('Wishlist', fields, {
    tableName: 'wishlist'
})

module.exports = wishlistSchema
