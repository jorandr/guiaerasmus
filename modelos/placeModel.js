var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var placeSchema=new Schema({
    name:String,
    category:String,
    location:String,
    description:String,
    urlphoto:String,
    urlmaps:String,
    qualityprice:Number}
});

module.exports=mongoose.model("Place",placeSchema);
