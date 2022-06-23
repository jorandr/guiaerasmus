var mongoose=require("mongoose");
require('../modelos/productModel.js');
require('../modelos/categoryModel.js');
var productCategory=mongoose.model("Product");
var categoryModel=mongoose.model("Category");

//agregar objetos product al contenedor
exports.addCategory=function(req,callback){
    var objCategory=new categoryModel();
    objCategory.name=req.body.name;
    objCategory.save(function(err,retorno){
        if (err) callback({codigo:2,texto:err.message});
        callback({estado:{codigo:1,respuesta:"Proceso exitoso"},category:retorno});
    });

};
//actualizar 
exports.updateCategory=function(req,callback){
    objCategory.findById(req.params.id,function(err,categoryBuscada){
        categoryBuscada.name=req.body.name;

        categoryBuscada.save(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({estado:{codigo:1,respuesta:"Proceso exitoso"},product:resultadoUpdate});
        });
    });
};
//eliminar
exports.deleteCategory=function(req,callback){
    productCategory.findById(req.params.id,function(err,categoryBuscada){

        categoryBuscada.remove(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({estado:{codigo:1,respuesta:"Proceso exitoso"}});
        });
    });
};
//buscar category por id
exports.findByIdCategory=function(req,callback){
    productCategory.findById(req.params.id,function(err,categoryBuscada){
        if (err) callback({codigo:2,texto:err.message});
        callback(categoryBuscada);
    });
};
//listar todos los product del contenedor
exports.findAllProduct=function(req,callback){
    productCategory.find({},function(err,categoriesBuscadas){
        if (err) callback({codigo:2,texto:err.message});
        callback(categoriesBuscadas);
    });
};
