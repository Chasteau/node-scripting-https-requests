var https = require('https');

function getHTML (options, callback) {

 var requestParams = options;
	var bufferedData = '';
	https.get(requestParams, function(response) {
		response.setEncoding('utf8');
		
	response.on('data', function(data) {
			bufferedData += data;
		});
	
	response.on('end', function(str) {
		console.log(printHTML(bufferedData));
	});
});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);