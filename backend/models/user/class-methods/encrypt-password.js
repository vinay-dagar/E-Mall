const crypto = require('crypto');

module.exports = (salt, value) => {
    try {
        return crypto.createHmac('sha256', salt).update(value).digest('hex');
    } catch (err) {
        throw new Error(err)
    }
}