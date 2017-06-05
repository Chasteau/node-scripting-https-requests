var getHTML = require('../http-functions');

// print_reverse.js : Reverses the html string and then prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
	var strNoSpace = html.split(" ").join("");
	var strReversed = strNoSpace.split("").reverse().join("");
	console.log(strReversed);
}

getHTML(requestOptions, printUpperCase);