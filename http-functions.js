module.exports = function getHTML (options, callback) {
	var https = require('https');
    var requestParams = options;
	var bufferedData = '';
	
	https.get(requestParams, function(response) {
		response.setEncoding('utf8');
		
	response.on('data', function(data) {
			bufferedData += data;
		});
	
	response.on('end', function(str) {
		callback(bufferedData);
	});
	});
};