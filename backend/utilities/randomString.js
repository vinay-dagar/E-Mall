module.exports = (function () {

    const generateRandomHash = (len) => {
        const characters = 'QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp1234567890-_';

        let RANDOM_HASH = ''
        for (let i = len; i > 0; i--) {
            RANDOM_HASH += characters[Math.floor(Math.random() * VALUES.length)];
        }
        return RANDOM_HASH
    }

    return {
        generateRandomHash
    }
})()