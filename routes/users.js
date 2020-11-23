const { response } = require('express');
var express = require('express');
var router = express.Router();
var productHelper = require("../helpers/product-helpers");
const { doLogin } = require('../helpers/user-helpers');
var userHelper=require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user //While first loading Homepage it first check whether a scession exist or not then pass that user data to view-product page
  console.log(user);
  productHelper.getAllProducts().then((products) => {
    res.render("user/view-products.hbs", { products, user });
  });
});

router.get('/login',(req,res)=>
{
  res.render('user/login.hbs')
});

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})


router.post('/signup', (req, res) => {
  userHelper.doSignup(req.body).then((userData) => {
    
    res.redirect('/login');
  }) 
})


router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
    if(response.status)
    {
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }
    else{
      res.redirect('/login')
    }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})


module.exports = router;
