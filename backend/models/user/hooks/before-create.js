module.exports = async (instance, callback) => {
    try {
        console.log('Thi is the hooks')
        console.log({instance})
    } catch (err) {
        callback(err)
    }
}