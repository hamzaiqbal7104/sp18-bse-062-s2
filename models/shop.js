var mongoose=require("mongoose");
var shopschema=mongoose.Schema({
    quantity:String,
    address:String,
    productname:String,
    shopname :String,
}); 
const shop=mongoose.model("shop",shopschema);
module.exports=shop;



