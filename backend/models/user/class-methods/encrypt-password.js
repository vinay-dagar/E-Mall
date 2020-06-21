const uuid = require('uuid');
const crypto = require('crypto');

module.exports = (value) => {
    try {
        const salt = uuid.v1()
        const password = crypto.createHmac('sha256', salt).update(value).digest('hex');

        return { salt, password }
    } catch (err) {
        throw new Error(err)
    }
}