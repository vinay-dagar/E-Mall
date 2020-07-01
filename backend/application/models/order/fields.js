module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'customer_id'
    },
    amount: {
        type: Sequelize.TEXT,
        defaultValue: '0'
    },
    orderHash: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'order_hash'
    }
}