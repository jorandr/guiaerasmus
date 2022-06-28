var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var productSchema=new Schema({
    category:String,
    price:Number,
    description:String,
    name:String,
    url:String,
    market:String
    idCategory:{type:Schema.Types.ObjectId,ref:'Category'}
});

module.exports=mongoose.model("Product",productSchema);
