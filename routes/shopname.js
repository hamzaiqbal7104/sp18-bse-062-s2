var express = require('express');
var router = express.Router();
var shop=require("../models/shop");
/* GET home page. */
router.get('/', async function(req, res, next) {
let shopinfo= await shop.find();
//console.log(shopinfo);
  res.render('info/list',{shops:shopinfo});
  
});
router.get('/add', async function(req, res, next) {
  
   res.render('info/add');
 });
router.post('/add', async function(req, res, next) {
  let newshop=new shop(req.body);
  await newshop.save();
   res.redirect('/shopname');
 });
 router.get('/delete/:id', async function(req, res, next) {
  let newshop = await  shop.findByIdAndDelete(req.params.id);
  
  res.redirect('/shopname');
 });
 router.get('/edit/:id', async function(req, res, next) {
  let newshop = await  shop.findById(req.params.id);
  res.render('info/edit',{newshop});
  
 });
 
  router.post('/edit/:id', async function(req, res, next) {
  let newshop = await  shop.findById(req.params.id);
  newshop.shopname=req.body.shopname;
  newshop.productname=req.body.productname;
  newshop.quantity=req.body.quantity;
  newshop.address=req.body.address;
  await newshop.save();
  res.redirect('/shopname');
   });

module.exports = router;
