var mongoose = require('mongoose');
var Anomalia = require('../schemas/anomalia.schema');
var fs = require('fs');
var anomaly= require('./anomaly');
var info="";
var obj={};
var AnomaliaAPI={
anomalia:function(request,response){
    fs.readFile("anomalía.txt", function (err, data) {
        if (err) return
            info= data.toString();
            obj.enso=info;
          
    });
    setTimeout(function(){
        response.status(200).json(obj);
    }, 3000);
       

 
        
},
update:function(req,res){
    console.log(req.body._id);
Anomalia.findByIdAndUpdate( 
    req.body._id,
    {
        JFM:req.body.JFM,
  FMA:req.body.FMA,
  MAM:req.body.MAM,
  AMJ:req.body.AMJ,
  MJJ:req.body.MJJ,
  JJA:req.body.JJA,
  JAS:req.body.JAS,
  ASO:req.body.ASO,
  SON:req.body.SON,
  OND:req.body.OND,
  NDJ:req.body.NDJ,
  DJF:req.body.DJF,
  visible:req.body.visible,
  ciclo:req.body.visible


    },
    function(error,result){
        if(error){
            throw error; 

        } 
        else{
         if(result==null){
            var nuevo = new Anomalia({
                _id:req.body.ciclo,
                JFM:req.body.JFM,
                FMA:req.body.FMA,
                MAM:req.body.MAM,
                AMJ:req.body.AMJ,
                MJJ:req.body.MJJ,
                JJA:req.body.JJA,
                JAS:req.body.JAS,
                ASO:req.body.ASO,
                SON:req.body.SON,
                OND:req.body.OND,
                NDJ:req.body.NDJ,
                DJF:req.body.DJF,
                visible:req.body.visible,
                ciclo:req.body.ciclo
            

            });
            nuevo.save(function(err){
                if(err){
                    throw err; 
   
                } else {
                    res.status(200).json(nuevo);
                }
            });
        }else{

         
            res.status(200).json(result);
         }  

        }

    }
    );

},
getAnomalias:function(req,response){
Anomalia.find({},function(error,anomalias){
    if(error){
        throw error;
    }else{
        response.status(200).json(anomalias);
    }
})
}



};
module.exports=AnomaliaAPI;
