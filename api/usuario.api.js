var mongoose = require('mongoose'); 
var Usuario = require('../schemas/usuario.schema'); 
var UsuarioAPI = {
findAll: function (req,res){
Usuario.find({},function (err,usuarios) {
 if(err) {
  throw err; 
}
  else {
    res.status(200).json(usuarios);  
       }

   });
 },
 login:function(req,res){
  Usuario.find()
  .where('usuario').equals(req.body.usuario)
  .where('pass').equals(req.body.pass)
  .count(function(err,r){
       res.status(200).json({
         count:r
       });
  });
  }
};
module.exports = UsuarioAPI;
