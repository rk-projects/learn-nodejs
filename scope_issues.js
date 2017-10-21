var result = [];
for ( var length = 10; length--;) {
	var len = length;
	result[len] = function() { return len;}
//	console.log(result);
}

console.log(result[5]());
console.log(result[3]());
