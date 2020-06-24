const crypto = require('crypto');

module.exports = (() => {
    const getCipherKeyAndIV = () => {
        const key = crypto.scryptSync(process.env.SECRET_KEY, process.env.RANDOM_SALT, 24);

        const iv = Buffer.alloc(16, 0);

        return { key, iv }
    }
    const encryptData = (data) => {
        const { key, iv } = getCipherKeyAndIV()

        const cipher = crypto.createCipheriv(process.env.ENCRYPT_ALGO, key, iv);
        return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    };

    const decryptData = (data) => {
        const { key, iv } = getCipherKeyAndIV()

        const decipher = crypto.createDecipheriv(process.env.ENCRYPT_ALGO, key, iv);
        return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
    }

    return {
        encryptData,
        decryptData
    }
})()