var mongoose=require("mongoose");
require('../modelos/placeModel.js');
var placeModel=mongoose.model("Place");

//agregar objetos product al contenedor
exports.addPlace=function(req,callback){
    var objPlace=new placeModel();
    objPlace.name=req.body.name;
    objPlace.category=req.body.category;
    objPlace.location=req.body.location;
    objPlace.description=req.body.description;
    objPlace.urlphoto=req.body.urlphoto;
    objPlace.urlmaps=req.body.urlmaps;
    objPlace.save(function(err,retorno){
        if (err) callback({codigo:2,texto:err.message});
        callback({place:retorno});
    });

};
//actualizar 
exports.updatePlace=function(req,callback){
    productModel.findById(req.params.id,function(err,placeBuscado){
        placeBuscado.name=req.body.name;
        placeBuscado.category=req.body.category;
        placeBuscado.location=req.body.location;
        placeBuscado.description=req.body.description;
        placeBuscado.urlphoto=req.body.urlphoto;
        placeBuscado.urlmaps=req.body.urlmaps;

        placeBuscado.save(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({place:resultadoUpdate});
        });
    });
};
//eliminar
exports.deletePlace=function(req,callback){
    placeModel.findById(req.params.id,function(err,placeBuscado){

        placeBuscado.remove(function(err,resultadoUpdate){
            if (err) callback({codigo:2,texto:err.message});
            callback({estado:{codigo:1,respuesta:"Proceso exitoso"}});
        });
    });
};
//buscar product por id
exports.findByIdPlace=function(req,callback){
   placeModel.findById(req.params.id,function(err,placeBuscado){
        if (err) callback({codigo:2,texto:err.message});
        callback(placeBuscado);
    });
};
//listar todos los product del contenedor
exports.findAllPlace=function(req,callback){
    placeModel.find({},function(err,placesBuscados){
        if (err) callback({codigo:2,texto:err.message});
        callback(placesBuscados);
    });
};
