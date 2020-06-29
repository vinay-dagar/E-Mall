module.exports = function (domain) {

    domain.User.hasOne(domain.Customer, {
        foreignKey: 'userId'
    });

    domain.Customer.belongsTo(domain.User, {
        foreignKey: 'userId'
    });

    // ------------ Shop -------------------

    domain.User.hasOne(domain.Shop, {
        foreignKey: 'userId'
    });

    domain.Shop.belongsTo(domain.User, {
        foreignKey: 'userId'
    });

    domain.Product.belongsTo(domain.Shop, {
        foreignKey: 'shopId'
    });

    domain.Shop.hasMany(domain.Product, {
        foreignKey: 'shopId'
    })

    // ---------- Cart ----------------------

    domain.Customer.hasOne(domain.Cart, {
        foreignKey: 'customer_id'
    });

    domain.Cart.belongsTo(domain.User, {
        foreignKey: 'customer_id'
    });

    domain.Cart.belongsTo(domain.Product, {
        foreignKey: 'productId'
    })

    // ----------- Rating --------------------

    domain.Rating.belongsTo(domain.Product, {
        foreignKey: 'productId'
    })

    domain.Product.hasMany(domain.Rating, {
        foreignKey: 'productId'
    })

    domain.Rating.belongsTo(domain.Customer, {
        foreignKey: 'customerId'
    })

    domain.Customer.hasMany(domain.Rating, {
        foreignKey: 'customerId'
    })

    // --------------- Review --------------------

    domain.Review.belongsTo(domain.Rating, {
        foreignKey: 'ratingId'
    })

    domain.Rating.hasOne(domain.Review, {
        foreignKey: 'ratingId'
    })

    // ---------------- Wishlist --------------------------

    domain.Wishlist.belongsTo(domain.Product, {
        foreignKey: 'productId'
    })

    domain.Product.hasMany(domain.Wishlist, {
        foreignKey: 'productId'
    })

    domain.Wishlist.belongsTo(domain.Customer, {
        foreignKey: 'customerId'
    })

}