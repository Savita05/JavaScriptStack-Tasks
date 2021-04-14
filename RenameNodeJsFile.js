var fs = require('fs');

fs.rename('index.html', 'API_call.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});