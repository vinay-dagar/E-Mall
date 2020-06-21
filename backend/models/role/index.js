const { Mongoose } = require("mongoose");

const Schema = Mongoose.Schema;

const roleSchema = new Schema({
    name: {
        type: String,
        enum: ['superAdmin', 'shopAdmin', 'user'],
        default: 'user'
    },
}, {
    timestamp: true
})

module.exports = Mongoose.model('Role', roleSchema)
