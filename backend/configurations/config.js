const mongoose = require('mongoose');
const dotEnv = require('dotenv');

const initApp = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Express server starting at port ${process.env.PORT} in ${process.env.NODE_ENV}`)
    })
};

module.exports = () => {
    dotEnv.config({
        path: `${__dirname}/../env/${process.env.NODE_ENV}.env`
    })
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 5000,
    });
    mongoose.set('debug', true)

    const db = mongoose.connection;
    global.DB = db

    db.on('error', (err) => {
        console.error(err)
    });

    db.on('open', () => {
        console.log('Database connected!')
        initApp()
    })


    return db
};