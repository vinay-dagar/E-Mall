const fields = require('./fields');

const cartProductSchema = SequelizeConnect.define('CartProduct', fields, {
    tableName: 'cart_product',
    hooks: requireDirectory(module, 'hooks')
});

module.exports = cartProductSchema