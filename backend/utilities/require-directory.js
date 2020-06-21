const requireDirectory = require('require-directory');

module.exports = (base, directory) => {
    return requireDirectory(base, directory)
}