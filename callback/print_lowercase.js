var getHTML = require('../http-functions');

// print_lowercase.js : The exact opposite of the former - transforms the html string into poetic lowercase and prints it to the console. 

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {
	console.log(html.toLowerCase());

}

getHTML(requestOptions, printUpperCase);