module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_id',
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'customer_id'
    }
}