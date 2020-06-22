const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (data) => {

    const secretKey = crypto.createHash('sha256').update(data).digest("hex");
    return secretKey
}