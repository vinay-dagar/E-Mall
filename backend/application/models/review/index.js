const fields = require('./fields');

const reviewSchema = SequelizeConnect.define('Review', fields, {
    tableName: 'review'
});

module.exports = reviewSchema