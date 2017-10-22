var stream = fs.createReadStream('./file.json');

stream.on('data', function(chunk) {
	console.log(chunk);
})

stream.on('end', function() {
	console.log('finished')
})
