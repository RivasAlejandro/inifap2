var mongoose = require('mongoose');
var AnomaliaSchema = new mongoose.Schema({
  JFM:{},
  FMA:{},
  MAM:{},
  AMJ:{},
  MJJ:{},
  JJA:{},
  JAS:{},
  ASO:{},
  SON:{},
  OND:{},
  NDJ:{},
  DJF:{},
  visible:{ type:String},
  ciclo:{type:String},
  _id:{type:String, required:true}
},
{
  versionKey:false  
}
);
module.exports= mongoose.model('anomalia',AnomaliaSchema);
                                                  