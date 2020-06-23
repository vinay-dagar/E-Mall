const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { ValidationError } = require('express-validation');

global.MongooseConnect = require('./configurations/config')();

app.use(cors());
app.use(bodyParser.json());

// global.validation = require('./validations/todo');
global.router = express.Router();
global.app = app;

global.configHolder = require('./configurations/dependency-include');
const userRoutes = require('./configurations/routes/user-routes');
const productRoutes = require('./configurations/routes/product-routes');

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)

app.get('/', (req, res, next) => res.status(200).send('Service is running!'));

app.use((error, req, res, next) => {
    console.error(error)
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }

    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    return res.status(status).json({ message })
})