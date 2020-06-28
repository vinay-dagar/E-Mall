module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    items: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    totalAmount: {
        type: Sequelize.TEXT,
        defaultValue: 0,
        field: 'total_amount'
    },
    customerId: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        allowNull: false
    },
    productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
    }
}