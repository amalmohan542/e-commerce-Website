const { response } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
var productHelper = require("../helpers/product-helpers");
const { doLogin } = require('../helpers/user-helpers');
var userHelper=require('../helpers/user-helpers')

/*Middleware to check whether user is loggedin or not.If not redirect to login page  */
const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn)
  {
    next()
  }else
  {
    res.redirect('/login')
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user //While first loading Homepage it first check whether a scession exist or not then pass that user data to view-product page
  console.log(user);
  productHelper.getAllProducts().then((products) => {
    res.render("user/view-products.hbs", { products, user });
  });
});

/* GET Login Page*/
router.get('/login',(req,res)=>
{
  if(req.session.loggedIn) //If the user is already loggedin then no back to login page and redirect to home
  {
    res.redirect('/');
  }
  else//If not already loggedin go to Login page
  {
  res.render('user/login.hbs',{"loginErr":req.session.loginErr})
  req.session.loginErr=false
  } 
});

/* GET Signup Page*/
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})

/* POST Signup Page*/
router.post('/signup', (req, res) => {
  userHelper.doSignup(req.body).then((userData) => {
    
    res.redirect('/login');
  }) 
})

/* POST Login Page*/
router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
    if(response.status)
    {
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }
    else{
      req.session.loginErr="Invalid Username or Password !"
      res.redirect('/login')
    }
  })
})


/* GET Logout and redirect to Home Page*/
router.get('/logout',(req,res)=>{
  req.session.destroy() //Session is destroyed when Logout
  res.redirect('/')
})


router.get('/cart',verifyLogin,(req,res)=>{
  res.render('user/cart')
})


module.exports = router;
