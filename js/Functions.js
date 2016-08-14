(function(){

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
function factorial(n) {
		if(n == 1){ return 1;}
		else {return  n * factorial(n-1);}
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
function sum(array) {
	if(array.length>1){
		var x = array.splice(0,1);
		return x[0] + sum(array);
	} else {
		return arr[0];
	}
	
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
function arraySum(arr) {
	if(arr.length>1){
		var x = arr.splice(0,1)[0];
		if(Array.isArray(x)){
			return arraySum(x) + arraySum(arr);
		} else {
			return x + arraySum(arr);
		}
	} else {
		var x = arr[0];
		if(Array.isArray(x)){
			return arraySum(x);
		} else {
			return x; 
		}
	}
};

// 4. Check if a number is even.
function isEven(n) {
	if(n == 0){return true;}
	if(n == 1){return false;}
	else{
		return isEven(n-2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
function sumBelow(_n) {

	return below(_n-1);

	function below(n){
		if(n==0){return 0;}
		if(n==1){return 1;}
		return n + below(n-1);
	}
	
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
function range(x, y) {

	return getRange(x+1,y);

	function getRange(x,y){
		if(x == y-1){
			return x; 
		}
		else {
			return [x].concat(getRange(x+1,y));
		}
	}
		
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
function exponent(base, exp) {
	if(exp == 1){
		return base; 
	}
	return base * exponent(base,exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
function powerOfTwo(n) {
	if(n == 2){
		return true;
	} 
	if(n%2 != 0){
		return false;
	} 
	
	return powerOfTwo(n/2);
	
};

// 9. Write a function that accepts a string a reverses it.
function reverse(string) {
	if(string.length == 0){ return '';}
	return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
function palindrome(string) {
	
	return check(0, string.length-1);
	
	function check(x,y){
		if (x == y){
			return true;
		}
		if( string[x] != string[y]){
			return false;
		}
		return check(x+1, y-1);

	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
function modulo(x, y) {
	var n = x - y; 
	if(n==0){
		return 0; 
	}
	if(n<y){
		return n;
	} 
	if(n>y){
		return modulo(n,y);
	}
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
function multiply(x, y) {
	if(y==1){
		return x; 
	}
	return x + multiply(x,y-1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
function divide(x, y) {
	if(x<y){
		return 0; 
	}
	if (x==y){
		return 1; 
	}
	if (x>y){
		return 1 + divide(x-y, y);
	}
	
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
function gcd(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
function compareStr(str1, str2) {
	if(str1.length!=str2.length){
		return false; 
	}
	if(str1.length == 1){
		return str1[0] === str2 [0];
	}
	if(str1[0]===str2[0]){
		return compareStr(str1.slice(1), str2.slice(1));
	}
	return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
function createArray(str){
	if(str.length==1){return [str[0]];}
	return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
function reverseArr(array) {
	if(array.length==1){return [array[0]];}
	return [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
function buildList(value, length) {
	if(length == 1){return [value];}
	return [value].concat(buildList(value,length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
function countOccurrence(array, value) {
	if(array.length === 1){
		return array[0] == value? 1 : 0;
	}
	if(array[0]==value){
		return 1 + countOccurrence(array.slice(1),value);
	} else {
		return countOccurrence(array.slice(1),value); 
	}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
function rMap(array, callback) {
	if(array.length == 1){
		return [callback(array[0])];
	}
	return [callback(array[0])].concat(rMap(array.slice(1),callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
function countKeysInObj(obj, key) {

	var t = 0; 
	count(obj,key);
	return t; 

	function count(obj,key){
		if(obj[key]){
			t+=1; 
		}
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],key);
			}
		}
	}
	
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
function countValuesInObj(obj, value) {

	var t = 0; 
	count(obj,value);
	return t; 

	function count(obj,value){
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],value);
			} else {
				if(obj[prop]==value){
					t+=1;
				}
			}
		}
	}

};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
function replaceKeysInObj(obj, key, newKey) {
	var t = 0; 
	count(obj,key);
	return t; 

	function count(obj,key){
		if(obj[key]){
			obj[newKey] == obj[key];
			delete obj[key]; 
		}
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],key);
			}
		}
	}
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
function fibonacci(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
function nthFibo(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
function capitalizeWords(input) {
	if(input.length == 1){
		return input[0].toUpperCase();
	} else {
		return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1,input.length)));
	}
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
function capitalizeFirst(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
function nestedEvenSum(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
function flatten(arrays) {
	if(!Array.isArray(arrays)){
		return [arrays]; 
	} 
	if (arrays.length === 1){
		return flatten(arrays[0]);
	}
	else {
		var q1 = flatten(arrays[0]);
		var q2 = flatten(arrays.slice(1,arrays.length));
		return q1.concat(q2);
	}
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
function letterTally(str, obj) {
	typeof obj == 'undefined'? obj = {} : ""; 
	var prop = str[0];
	obj[prop] == 'undefined' ? obj[prop] = obj[prop] + 1 : obj[prop] = 1; 

	if(str.length==1){
		return obj; 
	} else {
		return letterTally(str.slice(1),obj);
	}
	
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
function compress(list) {
	
	return [list[0]].concat(comp(list.slice(1),list[0]));
	
	function comp(list,last){
		if(list[0]==last){
			if(list.length==1){
				return [];
			} else {
				var r = [].concat(comp(list.slice(1),last));
				return r;
			}
			
		} else {
			if(list.length == 1){
				return [list[0]];
			} else {
				var r = [list[0]].concat(comp(list.slice(1),list[0]));
				return r;
			}
		}
	}
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
function augmentElements(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
function minimizeZeroes(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
function alternateSign(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
function tagCount(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

function binarySearch(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
function mergeSort(array) {
};

app.functions = {
	factorial: [factorial, 12],
	sum: [sum, [1,2,3,4]],
	arraySum: [arraySum,[1,[2,3],[[4]],5]],
	isEven: [isEven,4],
	sumBelow: [sumBelow, 10],
	range: [range, [1,10]],
	exponent: [exponent, [4,3]],
	powerOfTwo: [powerOfTwo, 16],
	reverse: [reverse, 'abcde'],
	palindrome: [palindrome, 'abba'],
	modulo: [modulo,[17,5]],
	multiply: [multiply, [3,6]],
	divide: [divide, [10,5]],
	gcd: [gcd],
	compareStr: [compareStr, ['house','houses']],
	createArray: [createArray, 'abcde'],
	reverseArr: [reverseArr, [4,5,6,3]],
	buildList: [buildList,[0,5]],
};

})()// Solve all of the following prompts using recursion.

/*
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
function countOccurrence(array, value) {
	if(array.length === 1){
		return array[0] == value? 1 : 0;
	}
	if(array[0]==value){
		return 1 + countOccurrence(array.slice(1),value);
	} else {
		return countOccurrence(array.slice(1),value); 
	}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
function rMap(array, callback) {
	if(array.length == 1){
		return [callback(array[0])];
	}
	return [callback(array[0])].concat(rMap(array.slice(1),callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
function countKeysInObj(obj, key) {

	var t = 0; 
	count(obj,key);
	return t; 

	function count(obj,key){
		if(obj[key]){
			t+=1; 
		}
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],key);
			}
		}
	}
	
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
function countValuesInObj(obj, value) {

	var t = 0; 
	count(obj,value);
	return t; 

	function count(obj,value){
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],value);
			} else {
				if(obj[prop]==value){
					t+=1;
				}
			}
		}
	}

};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
function replaceKeysInObj(obj, key, newKey) {
	var t = 0; 
	count(obj,key);
	return t; 

	function count(obj,key){
		if(obj[key]){
			obj[newKey] == obj[key];
			delete obj[key]; 
		}
		for(var prop in obj){
			if(typeof obj[prop]=='object'){
				count(obj[prop],key);
			}
		}
	}
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
function fibonacci(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
function nthFibo(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
function capitalizeWords(input) {
	if(input.length == 1){
		return input[0].toUpperCase();
	} else {
		return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1,input.length)));
	}
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
function capitalizeFirst(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
function nestedEvenSum(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
function flatten(arrays) {
	if(!Array.isArray(arrays)){
		return [arrays]; 
	} 
	if (arrays.length === 1){
		return flatten(arrays[0]);
	}
	else {
		var q1 = flatten(arrays[0]);
		var q2 = flatten(arrays.slice(1,arrays.length));
		return q1.concat(q2);
	}
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
function letterTally(str, obj) {
	typeof obj == 'undefined'? obj = {} : ""; 
	var prop = str[0];
	obj[prop] == 'undefined' ? obj[prop] = obj[prop] + 1 : obj[prop] = 1; 

	if(str.length==1){
		return obj; 
	} else {
		return letterTally(str.slice(1),obj);
	}
	
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
function compress(list) {
	
	return [list[0]].concat(comp(list.slice(1),list[0]));
	
	function comp(list,last){
		if(list[0]==last){
			if(list.length==1){
				return [];
			} else {
				var r = [].concat(comp(list.slice(1),last));
				return r;
			}
			
		} else {
			if(list.length == 1){
				return [list[0]];
			} else {
				var r = [list[0]].concat(comp(list.slice(1),list[0]));
				return r;
			}
		}
	}
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
function augmentElements(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
function minimizeZeroes(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
function alternateSign(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
function tagCount(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

function binarySearch(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
function mergeSort(array) {
};
}

*/
