var express = require("express");
var router = express.Router();
var productHelper = require("../helpers/product-helpers");


/* GET users listing. */
router.get("/", function (req, res, next) {
  productHelper.getAllProducts().then((products) => {
    res.render("admin/view-products", { products, admin: true });
  });
});

router.get("/add-product", (req, res) => {
  res.render("admin/add-product", { admin: true });
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  console.log(req.files.image);

  productHelper.addProduct(req.body, (id) => {
    console.log(id);
    let image = req.files.image;
    image.mv("./public/images/product-images/" + id + ".jpg", (err, done) => {
      if (!err) {
        res.render("admin/add-product", { admin: true });
      } else {
        console.log(err);
      }
    });
  });
});

router.get('/delete-product/:id',(req,res)=>{
  let proid=req.params.id
  console.log(proid);
  productHelper.deleteProduct(proid).then((response)=>{
    res.redirect('/admin/')
  })


})

module.exports = router;
