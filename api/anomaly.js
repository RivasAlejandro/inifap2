var PromiseFtp = require('promise-ftp');
  var fs = require('fs');

  var ftp = new PromiseFtp();


 ftp.connect({host:'ftp.cpc.ncep.noaa.gov', user:'anonymous', password:'anonymous@domain.com'})
  .then(function (serverMessage) {
    return ftp.get('wd53du/sstcon34t.txt');
  }).then(function (stream) {
    return new Promise(function (resolve, reject) {
      stream.once('close', resolve);
      stream.once('error', reject);
      stream.pipe(fs.createWriteStream('anomalía.txt'));
    });
  }).then(function () {
    return ftp.end();
  });

