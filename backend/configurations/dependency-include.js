/**
 * 
 *  @author Vinay Dagar
 *  Here includes all the global variable, utilities, modules required by application 
 * 
 */

global.requireDirectory = require('../utilities/require-directory');
global.Validate = require('express-validation');

global.Joi = require('joi');

global.Mongoose = require('mongoose')
global.MongooseSchema = Mongoose.Schema;
global.ObjectId = Mongoose.Types.ObjectId;

global.domain = require('../application/models');

const configHolder = {};

configHolder.jwtUtility = require('../utilities/jwt-utility');
configHolder.createSecret = require('../utilities/create-secret');

module.exports = configHolder
