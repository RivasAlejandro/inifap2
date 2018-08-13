

var mongoose = require("mongoose");
var Catalogo = require("../schemas/catalogo.schema");
CatalogoAPI= {


    todos:function(req,res){
        Catalogo.find({},function(err,catalogos){
    if(err){
       throw err;        
            }
    else {
       res.status(200).json(catalogos);
        }

        }
    );
    },
    crear: function(req,res){
        var nuevoCatalogo = new Catalogo({
            temporal:req.body.temporal,
           nombre:req.body.titulo,
        descripcion:req.body.descripcion



        });
        nuevoCatalogo.save(function(err){
             if(err){
                 throw err; 

             }
            else{
             res.status(200).json(nuevoCatalogo);
            }
        }); //fin save 
    },// fin crear 
        
    //Actualiza
    actualiza: function (req,res){
 
     Catalogo.findByIdAndUpdate(
        
        req.body._id,
      {
       nombre:req.body.nombre,
       temporal:req.body.temporal,
       
        descripcion: req.body.descripcion
      }, 
      function(error,result){
          if(error){
              throw error; 

          } 
          else {
             
              res.status(200).json(result);
          }
      }
     );

    }, //fin Actualiza  catalogo 
          //borra Catalogo 
    borra: function(req,res){
      Catalogo.findByIdAndRemove(
          req.params.id, 
          function(error,result){
          if(error){
              throw error; 
          } 
          else {
                res.status(200).json(result); 
                
          }
          }

      );

    }
   };
   module.exports=CatalogoAPI;

