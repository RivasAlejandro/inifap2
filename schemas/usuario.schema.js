var mongoose= require('mongoose'); 
var UsuarioSchema = new mongoose.Schema(
{
usuario:{type:String, required:true}, 
pass:{type:String, required:true}
}, 
{

versionKey:false
}

);

module.exports = mongoose.model('Usuario',UsuarioSchema,'usuario');

