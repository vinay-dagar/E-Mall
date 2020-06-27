const User = require('./user');
const Product = require('./product');
const Shop = require('./shop');
const Customer = require('./customer');
const Cart = require('./cart');
const Order = require('./order');
const Review = require('./review');
const Rating = require('./rating');
const Wishlist = require('./wishlist');
const PaymentMethod = require('./payment-method');

const domain = {
    User,
    Product,
    Shop,
    Cart,
    Order,
    Review,
    Rating,
    Wishlist,
    PaymentMethod,
    Customer
};

module.exports = domain 