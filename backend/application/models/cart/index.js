const fields = require('./fields');

const cartSchema = SequelizeConnect.define('Cart', fields, {
    tableName: 'cart'
})

module.exports = cartSchema
