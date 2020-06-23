module.exports = function(value) {
    try {
        return domain.User.encryptPassword(this.salt, value) === this.password;
    } catch (err) {
        throw new Error(err)
    }
}