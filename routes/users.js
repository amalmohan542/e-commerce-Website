var express = require('express');
var router = express.Router();
var productHelper = require("../helpers/product-helpers");

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products) => {
    res.render("user/view-products.hbs", { products, admin: false });
  });
});

module.exports = router;
