var mongoose = require("mongoose"); 
var Catalogo= require("./catalogo.schema");

var  RecomendaciónSchema = new  mongoose.Schema(
    {
      titulo:{type:String,required:true},
    fecha:{type:String,required:true},
     fase:{type:String,required:true},
     valor:{type:String,required:true},
visible:{type:String,required:true},
     catalogo:[{}],
     recomendacion:{type:String,required:true}
  },
   {
    versionKey:false  
 }
);
module.exports = mongoose.model('Recomendacion',RecomendaciónSchema,'recomendacion');
