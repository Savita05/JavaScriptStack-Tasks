var fs = require('fs');

fs.unlink('mynewupdatedFile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});