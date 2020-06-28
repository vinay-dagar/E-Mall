const fields = require('./fields');

const shopSchema = SequelizeConnect.define('Shop', fields, {
    tableName: 'shop',
    hooks: requireDirectory(module, 'hooks')
})

module.exports = shopSchema
