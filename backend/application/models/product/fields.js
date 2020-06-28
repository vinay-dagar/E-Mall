module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '0'
    },
    imageId: {
        type: Sequelize.INTEGER,
        field: 'image_id'
    },
    isInStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        field: 'is_in_stock'
    },
    shopId: {
        type: Sequelize.INTEGER,
        field: 'shop_id',
        allowNull: false
    },
}