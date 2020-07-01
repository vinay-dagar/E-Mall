const fields = require('./fields');

const orderSchema = SequelizeConnect.define('Order', fields, {
    tableName: 'order'
});

module.exports = orderSchema