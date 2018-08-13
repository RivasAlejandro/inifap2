var express = require('express'); 
var mongoose = require('mongoose'); 
var router= express.Router();
mongoose.connect('mongodb://localhost:27017/maiz'); 
var UsuarioAPI = require('./usuario.api'); 
var RecomendacionAPI =  require('./recomendacion.api');
var HistorialAPI = require('./historial.api');
var CatalogoAPI = require('./catalogo.api');
var enso = require('./anomalia.api');

router.get('/recomendacion/todas',RecomendacionAPI.todas);
router.post('/recomendacion/crear',RecomendacionAPI.crear);
  router.get('/catalogo/todos',CatalogoAPI.todos);
   router.get('/historial/todos',HistorialAPI.todos);
 router.post('/catalogo/crear',CatalogoAPI.crear);
  router.post('/historial/crear',HistorialAPI.crear);
 router.put('/catalogo/actualiza',CatalogoAPI.actualiza); 
  router.put('/historial/actualiza',HistorialAPI.actualiza); 
 router.put('/recomendacion/actualiza',RecomendacionAPI.update);
 router.delete('/recomendacion/eliminar/:id',RecomendacionAPI.eliminar);
  router.delete('/catalogo/borra/:id',CatalogoAPI.borra);
    router.delete('/historial/borra/:id',HistorialAPI.borra);

router.get('/usuario/findAll',UsuarioAPI.findAll); 
router.post('/usuario/login',UsuarioAPI.login);
//router.get('/enso/',enso.anomalia);
router.put('/enso/actualiza',enso.update);
router.get('/enso/todos',enso.getAnomalias);
module.exports  = router; 



