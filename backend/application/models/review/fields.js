module.exports = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ratingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'rating_id'
    }
}