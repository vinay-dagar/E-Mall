const Sequlize = require('sequelize')
const dotEnv = require('dotenv');

const initApp = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Express server starting at port ${process.env.PORT} in ${process.env.NODE_ENV}`)
    })
};

const checkConenction = (db) => {
    db.authenticate().then(() => {
        console.info('Successfully connected to database.');
        initApp()
    }).catch((err) => {
        console.error('Could not connect to database!', err);
    });
}

module.exports = () => {
    dotEnv.config({
        path: `${__dirname}/../env/${process.env.NODE_ENV}.env`
    })
    const options = {
        logging: process.env.ENABLE_DB_LOG === 'true',
        dialect: 'mysql',
        sync: process.env.DB_SYNC === 'true',
        timezone: '+05:30',
        pool: {
            max: 10,
            min: 0,
            idle: 20000,
            // acquire: 20000
        },
        dialectOptions: {
            ssl: false,
        },
        define: {
            underscored: true,
            timestamps: true,
        },
    };

    const db = new Sequlize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, options)

    checkConenction(db)

    if (process.env.DB_SYNC === 'true') {
        const option = process.env.DB_SYNC_APPEND ? {
            append: true
        } : {};
        db.sync(option);
    }

    return db
};