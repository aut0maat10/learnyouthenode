var fs = require('fs')
var number = 0;
var file = process.argv[2];
fs.readFile(file, function callback(err, data) {
	number = data.toString().split('\n').length - 1;
	console.log(number);
});

 /* STAFF SOLUTION
 var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/
