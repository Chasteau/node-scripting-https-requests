////This function should use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received
//Buffering in this context means the technique you've used before (usually in loops or conditionals) of creating an empty variable and adding data to it.function getAndPrintHTML () {

var https = require('http');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
	
var bufferedData = '';
	https.get(requestOptions, function(response) {
		response.setEncoding('utf8');
		
	response.on('data', function(data) {
			bufferedData += data;
		});
	
	response.on('end', function(str) {
		console.log(bufferedData);
	});
});
} 

getAndPrintHTML();