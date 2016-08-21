(function(){


function factorial(n) {
		if(n == 1){ return 1;}
		else {return  n * factorial(n-1);}
};


function sum(array) {
	if(array.length>1){
		var x = array.splice(0,1);
		return x[0] + sum(array);
	} else {
		return array[0];
	}
	
};


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

function isEven(n) {
	if(n == 0){return true;}
	if(n == 1){return false;}
	else{
		return isEven(n-2);
	}
};


function sumBelow(_n) {

	return below(_n-1);

	function below(n){
		if(n==0){return 0;}
		if(n==1){return 1;}
		return n + below(n-1);
	}
	
};


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

function exponent(base, exp) {
	if(exp == 1){
		return base; 
	}
	return base * exponent(base,exp-1);
};


function powerOfTwo(n) {
	if(n == 2){
		return true;
	} 
	if(n%2 != 0){
		return false;
	} 
	
	return powerOfTwo(n/2);
	
};

function reverse(string) {
	if(string.length == 0){ return '';}
	return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

function palindrome(string) {
	
	return check(0, string.length-1);
	
	function check(x,y){
		if (x == y){
			return true;
		}
		if( string[x] != string[y]){
			return false;
		} else {
			if(y<x){
				return true;
			}
		}
		return check(x+1, y-1);

	}
};


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


function multiply(x, y) {
	if(y==1){
		return x; 
	}
	return x + multiply(x,y-1);
};


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

function gcd(x, y) {
};

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

function createArray(str){
	if(str.length==1){return [str[0]];}
	return [str[0]].concat(createArray(str.slice(1)));
};

function reverseArr(array) {
	if(array.length==1){return [array[0]];}
	return [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)));
};

function buildList(value, length) {
	if(length == 1){return [value];}
	return [value].concat(buildList(value,length-1));
};

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

function rMap(array, callback) {
	if(array.length == 1){
		return [callback(array[0])];
	}
	return [callback(array[0])].concat(rMap(array.slice(1),callback));
};

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

function fibonacci(n) {
};

function nthFibo(n) {
};

function capitalizeWords(input) {
	if(input.length == 1){
		return input[0].toUpperCase();
	} else {
		return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1,input.length)));
	}
};

function capitalizeFirst(array) {
};


function nestedEvenSum(obj) {
};


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

function augmentElements(array, aug) {
};

function minimizeZeroes(array) {
};

function alternateSign(array) {
};

function numToText(str) {
};

function tagCount(tag, node) {
};


function binarySearch(array, target, min, max) {
};

function mergeSort(array) {
};

app.functions = {
	factorial: [factorial, '12'],
	sum: [sum, '[1,2,3,4]'],
	arraySum: [arraySum,'[1,[2,3],[[4]],5]'],
	isEven: [isEven,'4'],
	sumBelow: [sumBelow, '10'],
	range: [range, '[1,10]'],
	exponent: [exponent, '[4,3]'],
	powerOfTwo: [powerOfTwo, '16'],
	reverse: [reverse, "'abcde'"],
	palindrome: [palindrome, "'abba'"],
	modulo: [modulo,'[17,5]'],
	multiply: [multiply, '[3,6]'],
	divide: [divide, '[10,5]'],
	gcd: [gcd],
	compareStr: [compareStr, "['house','houses']"],
	createArray: [createArray, "abcde'"],
	reverseArr: [reverseArr, '[4,5,6,3]'],
	buildList: [buildList,'[0,5]'],
};

})()

