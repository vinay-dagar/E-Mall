/**
 * 
 *  @author Vinay Dagar
 *  Here includes all the global variable, utilities, modules required by application 
 * 
 */

global.requireDirectory = require('../utilities/require-directory');
global.validate = require('express-validation');

global.Mongoose = require('mongoose')
global.MongooseSchema = Mongoose.Schema;
global.ObjectId = Mongoose.Types.ObjectId;

global.domain = require('../application/models');

const configHolder = {};

module.exports = configHolder