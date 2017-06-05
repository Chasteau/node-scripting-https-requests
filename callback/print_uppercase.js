var getHTML = require('../http-functions');

// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
	console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);