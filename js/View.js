
(function(){


	function View(){
		addListeners(); 

		function addListeners(){
			$('#run').on('click', function(e){
					clearDisplay();
					var fString = $('#function').val();
					var preProcessor = new app.PreProcessor();
					fString = preProcessor.body(fString); 
					var fArgs = $('#args').val();
					fArgs = preProcessor.args(fArgs);
					
					display(fString,fArgs);
			});
		}


		function display(f,args){
			var rspy = new app.Spy(f);
			//splat the args with partial application because default is separate args
			
			var bound = rspy.run.bind(rspy);

			args.forEach(function(v,i){
				bound = bound.bind(rspy,eval(v));
			});
			bound(); 

			var listConverter = new app.ListConverter; 
			var ul = listConverter.convert(rspy.results);

			ul.attr('id','rspy'); 
			$('body').append(ul);
			ul.hide();
			$('#rspy').jOrgChart({chartElement : '#results'});
		}

		function clearDisplay(){
				$('#rspy').empty();
				$('#rspy').remove();
				$('#results').empty();
				//$('#results').remove();

		}

	}

View();

})()

