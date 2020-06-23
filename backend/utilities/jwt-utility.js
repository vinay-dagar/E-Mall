const jwt = require('jsonwebtoken');

const services = {};

services.createToken = (payload) => {
    if (!payload) throw new Error('Payload must be provided!');

    return jwt.sign(payload, process.env.APP_SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_EXPIRE_TIME,
    })
};

services.get = (token) => {
    if (!token) throw new Error('Token must be provide!');
    return jwt.verify(token, process.env.APP_SECRET_KEY);
}

module.exports = services
