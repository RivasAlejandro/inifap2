

var mongoose = require("mongoose");
var Historial = require("../schemas/historial.schema");
HistorialAPI= {


    todos:function(req,res){
        Historial.find({},function(err,objetos){
    if(err){
       throw err;        
            }
    else {
       res.status(200).json(objetos);
        }

        }
    );
    },
    crear: function(req,res){
        var nuevoHistorial = new Historial({
            recomendacion:req.body.recomendacion,
        



        });
        nuevoHistorial.save(function(err){
             if(err){
                 throw err; 

             }
            else{
             res.status(200).json(nuevoHistorial);
            }
        }); //fin save 
    },// fin crear 
        
    //Actualiza
    actualiza: function (req,res){
 
     Historial.findByIdAndUpdate(
        
        req.body._id,
      {
       recomendacion:req.body.recomendacion,
       
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

    }, //fin Actualiza  historial
          //borra historial
    borra: function(req,res){
      Historial.findByIdAndRemove(
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
   module.exports=HistorialAPI;

