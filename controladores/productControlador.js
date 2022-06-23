var mongoose=require("mongoose");
require('../modelos/productModel.js');
require('../modelos/categoryModel.js');
var productModel=mongoose.model("Product");
var categoryModel=mongoose.model("Category");

//agregar objetos product al contenedor
exports.addProduct=function(req,callback){
    var objProduct=new productModel();
    objProduct.category=req.body.category;
    objProduct.price=req.body.price;
    objProduct.description=req.body.description;
    objProduct.name=req.body.name;
    objProduct.url=req.body.url;
    objProduct.save(function(err,retorno){
        if (err) callback({codigo:2,texto:err.message});
        callback({product:retorno});
    });

};
//actualizar 
exports.updateProduct=function(req,callback){
    productModel.findById(req.params.id,function(err,productBuscado){
        productBuscado.category=req.body.category;
        productBuscado.price=req.body.price;
        productBuscado.description=req.body.description;
        productBuscado.name=req.body.name;
        productBuscado.url=req.body.url;

        productBuscado.save(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({product:resultadoUpdate});
        });
    });
};
//eliminar
exports.deleteProduct=function(req,callback){
    productModel.findById(req.params.id,function(err,productBuscado){

        productBuscado.remove(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({estado:{codigo:1,respuesta:"Proceso exitoso"}});
        });
    });
};
//buscar product por id
exports.findByIdProduct=function(req,callback){
    productModel.findById(req.params.id,function(err,productBuscado){
        if (err) callback({codigo:2,texto:err.message});
        callback(productBuscado);
    });
};
//listar todos los product del contenedor
exports.findAllProduct=function(req,callback){
    productModel.find({},function(err,productsBuscados){
        if (err) callback({codigo:2,texto:err.message});
        callback({estado:{codigo:1,respuesta:"Proceso exitoso"},product:productsBuscados});
    });
};
