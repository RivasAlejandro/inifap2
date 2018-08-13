var fs = require('fs');
var anomaly= require('./anomaly');

fs.readFile("anomalía.txt", function (err, data) {
if (err) return
      var  a = data.toString();
var ciclos = a.lenght-4;
var i;

a= a.split("\n");

  for (i =0; i <a.length; i++) {
if(i==0){
//    arreglo.push({cadena:a[i].split(" ")});
}
  if(i>2){
  //var row = a[i].split(" ");
//var y=row[row.length-1];
//var ciclo=row[0]; 
}

//arreglo.push({anomalia:y,fase:ciclo});
}

});

