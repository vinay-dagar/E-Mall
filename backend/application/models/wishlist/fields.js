module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        allowNull: false
    },
    customerId: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        allowNull: false
    }
}