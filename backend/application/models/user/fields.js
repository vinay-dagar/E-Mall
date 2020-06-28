module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    address: {
        type: Sequelize.TEXT,
    },
    isEmailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_email_verified'
    },
    isPhoneVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_phone_verified'
    },
    isAccountLocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_account_locked'
    },
    role: {
        type: Sequelize.TEXT,
        enum: ['superAdmin', 'shopAdmin', 'customer'],
        defaultValue: 'customer'
    },
    salt: {
        type: Sequelize.TEXT,
        defaultValue: '',
        trim: true,
    },
    password: {
        type: Sequelize.TEXT,
        trim: true
    },
}