const fields = require('./fields');

const customerSchema = SequelizeConnect.define('Customer', fields, {
    tableName: 'customer',
    hooks: requireDirectory(module, 'hooks')
});

module.exports = customerSchema
