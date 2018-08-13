var mongoose = require ("mongoose"); 
var HistorialSchema = new  mongoose.Schema(
{
  catalogo:[{}]
},


{
versionKey:false

  });



module.exports=  mongoose.model('Historial',HistorialSchema,'historial');