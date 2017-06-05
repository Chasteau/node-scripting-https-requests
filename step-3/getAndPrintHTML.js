var https = require('https');

function getAndPrintHTML (options) {

	var requestParams = options;
	var bufferedData = '';
	https.get(requestParams, function(response) {
		response.setEncoding('utf8');
		
	response.on('data', function(data) {
			bufferedData += data;
		});
	
	response.on('end', function(str) {
		console.log(bufferedData);
	});
});
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
