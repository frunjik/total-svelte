const fs = require('fs');
const path = require('path');
const rootpath = '../client/public/';

exports.install = function() {
	F.file('*.*', serve);
};

function log(s) {
	console.log(s);
}

function serve(req, res) {

	let filename = rootpath + req.path.join('/');
	
	fs.exists(filename, function (exist) {
		if(!exist) {
			let msg = `File ${filename} not found`;
			log(msg);
			res.content(404, msg, 'text/plain');
			return;
		}
	
		log('SERVE: ' + filename);
		fs.readFile(filename, function(err, data) {
			if(err){
				log(err.message);
				res.content(500, `Error reading: ${filename}`, 'text/plain');
			} else {
				res.content(200, data, U.getContentType(path.parse(filename).ext));
			}
		});
	});
}
