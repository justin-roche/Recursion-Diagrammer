
(function(){


function ListConverter(){
	
	this.convert = function(linkedList){
		if(typeof linkedList == 'undefined'){
			throw new ReferenceError('no list defined');
		}
		return getUL(linkedList);
	};

	function getUL(listItem){

		var symbols = ['[', ']', '{', '}'];

		let ul = $('<ul>');					//everthing is appended in a UL
		//ul.text(listItem.result);
		let children = listItem.children; 

		if(children.length === 0){return ul;}

		for(var i=0;i<children.length; i++){ 
			let li = $('<li>');
			var args = children[i].args;
			var ret = children[i].result; 
			let argText = $('<p>'+ 'args: ' + boundarySymbol(args)[0] + args + boundarySymbol(args)[1] + '<p>');
			let retText = $('<p>'+ 'ret: ' + boundarySymbol(ret)[0] + ret + boundarySymbol(ret)[1] + '<p>' );
			li.append(argText);
			li.append(retText);
			li.append(getUL(children[i]));
			ul.append(li);
		}

		return ul; 
	}

	function boundarySymbol(arg){
		if (Array.isArray(arg)){
			return ['[',']'];
		}
		if (typeof arg === 'object'){
			return ['{','}'];
		}
		return ['','']

	}


	
}

app.ListConverter = ListConverter; 
	
})()



