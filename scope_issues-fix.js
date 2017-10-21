var result = [];
for ( var length = 10; length--;) {
	var len = length;
	result[len] = (function(parameter) { 
		return function() {
			return parameter;}
	})(len)

//	console.log(result);
}

console.log(result[5]());
console.log(result[3]());
