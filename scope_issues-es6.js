var result = [];
for ( var length= 10; length--;) {
	let len = length;
	result[len] = function() { return len ; }
}
console.log(result[5]());
console.log(result[2]());
