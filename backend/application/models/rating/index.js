const fields = require('./fields');

const ratingSchema = SequelizeConnect.define('Rating', fields, {
    tableName: 'rating'
});

module.exports = ratingSchema
