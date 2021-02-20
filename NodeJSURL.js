var url = require('url');
var path = 'http://localhost:8000/myPage.html?query=123456';
var urlObj = url.parse(path, true);

console.log(urlObj.host); 
console.log(urlObj.pathname);
console.log(urlObj.search);

var params = urlObj.query;
console.log(params);
