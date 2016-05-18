
(function(){

	function PreProcessor(inputF){

		var stringFunc = inputF;
		var stringName = getName(); 
		replaceDeclaration();
		replaceInner(); 

		Object.defineProperty(this,'stringFunc',{get: function(){return stringFunc;}})

		this.modifyString = function(){
			replaceDeclaration();
			replaceInner(); 
		};

		function getName(){
			try{
				var declarationReg = new RegExp(/^.+?\(/);			
				var declaration = stringFunc.match(declarationReg)[0];
				var titleReg = new RegExp(/function(.+)\(/,"i");
				var name = declaration.match(titleReg)[1].trim();
				if(name.length === 0){throw Error;}
				return name;}
			catch(e){
				throw new ReferenceError('invalid function declaration');
			}
		};
		
		function replaceDeclaration(){
			var declarationReg = new RegExp(/^.+?\(/);	
			stringFunc = stringFunc.replace(declarationReg,'function _evalFunc(');							
		};

		function replaceInner(){
			var innerReg = new RegExp("(\\W)" + "(" + stringName +")" + "(\\()");
			var reg = new RegExp(/(\W)(f)(\()/);
			var match = stringFunc.match(innerReg)[2];								
			var match2 = stringFunc.match(reg)[1];

			var result;
			while((result = innerReg.exec(stringFunc)) !== null) {
   				stringFunc = stringFunc.replace(innerReg, '$1_spyFrame$3');
			}
			
			//$1 and $3 are the first and third captured groups, $2 is not directly replaced
		};

	}

app.PreProcessor = PreProcessor;


})()
	


