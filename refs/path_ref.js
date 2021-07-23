const path = require('path');

console.log("__filename", __filename); // full path
console.log("path.basename(__filename)", path.basename(__filename)); //the file
console.log("path.dirname(__filename)", path.dirname(__filename)); // the path before the file
console.log("path.extname(__filename)", path.extname(__filename)); // extension of the file

console.log(path.parse(__filename)); // parse the path to components

console.log(path.join(__dirname, 'test', 'second.html'));

console.log(path.resolve(__dirname, 'test', 'second.html'))