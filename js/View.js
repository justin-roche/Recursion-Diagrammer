
(function(){


	function View(){
		var self = this; 
		init(); 

		function run(){
		 	clearDisplay();
			var fString = $('#function').val();
			var preProcessor = new app.PreProcessor();
			fString = preProcessor.body(fString); 
			var fArgs = $('#args').val();
			fArgs = preProcessor.args(fArgs);
			display(fString,fArgs);
		}

		function init(){
			$('#run').on('click', function(e){
					run();
			});

			for(var prop in app.functions){
				$('.function-select').append('<option>' + prop + '</option>');
			}

			$(self).on('functionSelect', function(){
				var selected = $('.function-select')[0].selectedOptions[0].label;
				var selectedFn = app.functions[selected][0];
				var selectedArgs = app.functions[selected][1];
				$('#function').val(selectedFn.toString());	
				if (typeof selectedArgs === 'string'){
					selectedArgs = "'" + selectedArgs + "'";
				}
				$('#args').val(selectedArgs.toString());
				//display();	
				run();			
			});

			$(self).trigger('functionSelect');
		}


		function display(f,args){
			var rspy = new app.Spy(f);
			//splat the args with partial application because default is separate args
			
			var bound = rspy.run.bind(rspy);

			args.forEach(function(v,i){
				bound = bound.bind(rspy,v);
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

app.view = new View(); 

})()

