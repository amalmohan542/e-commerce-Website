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

//Delete a existing product by admin
router.get("/delete-product/:id", (req, res) => {
  let proid = req.params.id;
  console.log(proid);
  productHelper.deleteProduct(proid).then((response) => {
    res.redirect("/admin/");
  });
});

//GET to edits details of existing product in admin panel
router.get("/edit-product/:id", async (req, res) => {
  let product = await productHelper.getProductDetails(req.params.id);

  res.render("admin/edit-product", { product });
});

//Post req to update the edited details on Database
router.post("/edit-product/:id", (req, res) => {
  console.log(req.params.id);
  productHelper.updateProduct(req.params.id, req.body).then(() => {
    res.redirect("/admin/");
    let id=req.params.id;
    let image = req.files.image;
    if (image) {
      image.mv("./public/images/product-images/" + id + ".jpg")
    }
  });
});
module.exports = router;
