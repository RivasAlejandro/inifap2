var mongoose = require("mongoose");
var Recomendacion = require("../schemas/recomendacion.schema");
var RecomendacionAPI = {

   
     todas: function(req,res){
         Recomendacion.find({},function(err,recomendaciones)
      {
     if(err){
    throw err; 

     }
      else {
     res.status(200).json(recomendaciones);
          }
       });
        },
        crear: function (req,res){
         
var  NuevaRecomendacion= new Recomendacion({
    recomendacion: req.body.recomendacion, 
    fecha: req.body.fecha,
    catalogo:req.body.catalogo, 
    fase: req.body.fase,
    titulo:req.body.titulo,
    valor:req.body.valor,
    visible:req.body.visible
});
NuevaRecomendacion.save(function(err){
      if(err){
          throw err; 
      }
         else {
             res.status(200).json(NuevaRecomendacion);
            }
          });

        },
        eliminar:function(req,res){
          Recomendacion.findByIdAndRemove(
              req.params.id,
              function(error,result){
                if(error){
                  throw error; 
                }else {
                    res.status(200).json(result);
                }
              }


            );

        },
        update:function(req,res){
          Recomendacion.findByIdAndUpdate( 
              req.body._id,
          {
             recomendacion: req.body.recomendacion, 
    fecha: req.body.fecha,
    catalogo:req.body.catalogo, 
    fase: req.body.fase,
    titulo:req.body.titulo,
    visible:req.body.visible
  },
     function(error,result){
    if(error){
          throw error; 

    }else{

     res.status(200).json(result);
          }
  }
     );
}
        



};
module.exports=RecomendacionAPI;