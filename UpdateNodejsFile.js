var fs = require('fs');

fs.appendFile('mynewupdatedFile.txt', ' This File is updated.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});