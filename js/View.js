
(function(){


	function View(){
		addListeners(); 

		function addListeners(){
			$('#run').on('click', function(e){
					clearDisplay();
					var fString = $('#function').val();
					var preProcessor = new app.PreProcessor(fString);
					fString = preProcessor.stringFunc; 

					var fArgs = $('#args').val().split(',');
					display(fString,fArgs);
			});
		}


		function display(f,a){
			var rspy = new app.Spy(f);
			//splat the args with partial application because default is separate args
			var bound = rspy.run.bind(rspy);

			a.forEach(function(v,i){
				bound = rspy.run.bind(rspy,v);
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

