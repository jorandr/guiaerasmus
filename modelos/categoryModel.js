var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var categorySchema=new Schema({
    name:String,
    url:String
    
});

module.exports=mongoose.model("Category",categorySchema);
