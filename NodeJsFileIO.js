var fs = require('fs');

//Reading file
fs.readFile('demo.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

//Create file
//Creates empty file, alternate is write file.
fs.open('newFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved File!!!!!!');
});

//Write file
fs.appendFile('newFile.txt', 'Hello NodeJS File I/O', function (err) {
  if (err) throw err;
  console.log('Updated File!!!!!!');
});

