
(function(){


function ListConverter(){
	
	this.convert = function(linkedList){
		if(typeof linkedList == 'undefined'){
			throw new ReferenceError('no list defined');
		}
		return getUL(linkedList);
	};

	function getUL(listItem){

		let ul = $('<ul>');					//everthing is appended in a UL
		//ul.text(listItem.result);
		let children = listItem.children; 

		if(children.length === 0){return ul;}

		for(var i=0;i<children.length; i++){ 

			let li = $('<li>');
			let argText = $('<p>'+ 'args: ' + children[i].args + '<p>');
			let retText = $('<p>'+ 'ret: ' + children[i].result + '<p>');
			li.append(argText);
			li.append(retText);
			li.append(getUL(children[i]));
			ul.append(li);
		}

		return ul; 
	}


	
}

app.ListConverter = ListConverter; 
	
})()



