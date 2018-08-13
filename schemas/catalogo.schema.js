var mongoose = require ("mongoose"); 
var CatalogoSchema = new  mongoose.Schema(
{
nombre:{type:String, required:true},
temporal:{type:String,required:true},
descripcion:{type:String, required:true}
 
},


{
versionKey:false
  });



module.exports=  mongoose.model('Catalogo',CatalogoSchema,'catalogo');