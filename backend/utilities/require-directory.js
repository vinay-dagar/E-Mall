const requireDirectory = require('require-directory');
const us = require('underscore.string');

module.exports = (base, directory) => {
    return requireDirectory(base, directory, {
        rename: name => us.camelize(name),
    })
}