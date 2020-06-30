module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    totalAmount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        field: 'total_amount'
    },
    customerId: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        allowNull: false
    },
}