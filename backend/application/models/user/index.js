const afterSave = require('./hooks/after-save');

const UserSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        requied: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isPhoneVerified: {
        type: Boolean,
        default: false
    },
    isAccountLocked: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['superAdmin', 'shopAdmin', 'customer'],
        default: 'customer'
    },
    customer: {
        type: ObjectId,
        ref: 'Customer'
    },
    shop: {
        type: ObjectId,
        ref: 'Shop'
    },
    salt: {
        type: String,
        default: '',
        trim: true,
    },
    password: {
        type: String,
        trim: true
    },
}, {
    timestamp: true
})


Object.assign(UserSchema.statics, requireDirectory(module, 'class-methods'))
Object.assign(UserSchema.methods, requireDirectory(module, 'instance-methods'))

UserSchema.post('save', afterSave)

module.exports = DB.model('User', UserSchema)
