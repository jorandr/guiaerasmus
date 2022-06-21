var express=require("express");
var bodyParser=require("body-parser");
var methodOverride =require("method-override");
var mongoose=require("mongoose");
var app=express();

//configuracion
app.use(bodyParser.json());
app.use(methodOverride());

//definir puerto de escucha
app.listen(3000,function(){
    console.log("Buongiorno, escuchando en puerto 3000");
});

mongoose.connect('mongodb+srv://jorandr:YK7LIFkh@cluster0.uyodojk.mongodb.net/?retryWrites=true&w=majority',function(err,res){
    if(err){
        console.log('ERROR: connecting to Database. '+err);
    }else{
        console.log('Conectado a MongoDB');
    }
});

//definir enrutamiento de solicitudes
var controladorProduct=require('./controladores/productControlador')
var categoryControlador=require('./controladores/categoryControlador')
var router=express.Router();

router.get('/',function(req,res){
    res.send("hola mundo del servicio nodejs");
});

//agregar producto
router.post('/API/product/addProduct',function(req,res){
    controladorProduct.addProduct(req,function(data){
        res.send(data);
    });
});

//actualizar producto
router.post('/API/product/updateProduct/:id',function(req,res){
    controladorProduct.updateProduct(req,function(data){
        res.send(data);
    });
});


//eliminar producto
router.delete('/API/product/deleteProduct/:id',function(req,res){
    controladorProduct.deleteProduct(req,function(data){
        res.send(data);
    });
});

//todos los productos
router.get('/API/product/findAllProduct',function(req,res){
    controladorProduct.findAllProduct(req,function(data){
        res.send(data);
    });
})

//buscar producto
router.get('/API/product/findProduct/:id',function(req,res){
    controladorProduct.findByIdProduct(req,function(data){
        res.send(data);
    });
})


//agregar categoria
router.post('/API/category/addCategory',function(req,res){
    categoryControlador.addCategory(req,function(data){
        res.send(data);
    });
});

//actualizar categoria
router.post('/API/category/updateCategory/:id',function(req,res){
    categoryControlador.updateCategory(req,function(data){
        res.send(data);
    });
});


//eliminar categoria
router.delete('/API/category/deleteCategory/:id',function(req,res){
    categoryControlador.deleteCategory(req,function(data){
        res.send(data);
    });
});

//todos los categoria
router.get('/API/category/findAllCategory',function(req,res){
    categoryControlador.findAllCategory(req,function(data){
        res.send(data);
    });
})

//buscar categoria
router.get('/API/category/findCategory/:id',function(req,res){
    categoryControlador.findByIdCategory(req,function(data){
        res.send(data);
    });
})




app.use(router);





