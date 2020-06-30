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
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    cartId: {
        type: Sequelize.INTEGER,
        field: 'cart_id',
        allowNull: false
    }
}