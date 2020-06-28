const afterSave = require("./hooks/after-create")
const fields = require("./fields")

const productSchema = SequelizeConnect.define('Product', fields, {
    tableName: 'product',
    hooks: requireDirectory(module, 'hooks')
})

module.exports = productSchema
