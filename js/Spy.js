(function(){
function Spy(_inputF){

	this.results = null;

	this.run = function(){

		let _spyList = new _spyListItem(null); 
		let _spyHead = _spyList; 	
		let _evalResult = null; 

		let args = Array.prototype.slice.call(arguments);				
		_spyFrame.apply(this,args);	
		//handle the first call to the spy function by applying args to run to the frame							

		function _spyFrame(){													
		//saves the return value from each call to the function
					
					_spyHead = incrementList(_spyHead);
					_evalResult = runNewFrame(arguments, _inputF);
					storeResults(_spyHead,_evalResult[0],_evalResult[1]);
					decrementList(_spyHead);
					return _evalResult[0];

					function incrementList(current){
						const oldhead = current;
						//store old head (variables don't collapse during unwind)

						const newhead = new _spyListItem(oldhead);
						//set new head to new item

						oldhead.children.push(newhead);
						return newhead; 
					}
						
					function runNewFrame(args, _inputF){

						eval(_inputF); 										
						//produces function definition in spy scope, named '_evalF' 	

						const _frameArgs = Array.prototype.slice.call(args);
						//get the args to pass to the evaled function
							
						return [_evalFunc.apply(null,_frameArgs),_frameArgs];	
						//apply the evaled function	

					}

					function storeResults(spyHead, evalResult,frameArgs){
						spyHead.result = evalResult;	
						spyHead.args = frameArgs;
							//store the result and the arguments passed to the tested function	
					}

					function decrementList(){
						_spyHead = _spyHead.parent;									
						//var variables collapse during unwind (holding a different state for each frame)
					}
					
		}

		this.results = _spyList;

	};

	function _spyListItem(h){
			this.parent = h;
			this.children = [];
			this.result = null;
		}	

}

app.Spy = Spy; 

})()


