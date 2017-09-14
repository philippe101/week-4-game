

// pseudocode
// need to generate random number.

// then four random numbers for buttons.
// value of buttons adds to match random number.
	$(document).ready(function(){
		var	random=Math.floor(Math.random()*101)+19;
		$("#randomnumber").text(random);
		console.log(randomnumber)

		var	button1=Math.floor(Math.random()*11)+1;
		var	button2=Math.floor(Math.random()*11)+1;
		var	button3=Math.floor(Math.random()*11)+1;
		var	button4=Math.floor(Math.random()*11)+1;
		console.log(button4)

		var totalscore=0;
		var matchingnumber=0;
		var randomnumber= [ ];
		var wins=0;
		var losses=0;

		$("#Wins").text(wins);
		$("#Losses").text(losses);

		function wins(){
			alert("You won!"); 
			wins++;
			$("Wins").text(wins);
			reset();
		}

		function losses(){
			alert("You lost!"); 
			losses++;
			$("Losses").text(losses);
			reset();
		}

		if (matchingnumber === randomnumber) {
			wins();
				}
		if (matchingnumber > randomnumber) {
			losses();
				}


		$("#redbutton").on ("click",function(){
			totalscore = totalscore + button1;
			console.log("Score" + totalscore);
			$("#matchingnumber").text(totalscore);
			

		})

		$("#bluebutton").on ("click",function(){
			totalscore = totalscore + button2;
			$("#matchingnumber").text(totalscore);
				

		})

		$("#yellowbutton").on ("click",function(){
			totalscore = totalscore + button3;
			$("#matchingnumber").text(totalscore);
				

		})

		$("#greenbutton").on ("click",function(){
			totalscore = totalscore + button4;
			$("#matchingnumber").text(totalscore);

				

		});
			// function reset(){
		// 	random=Math.floor(Math.random()*101)+19;
		// 	$("#randomnumber").text(random);
		// 	button1=Math.floor(Math.random()*11)+1;
		// 	button2=Math.floor(Math.random()*11)+1;
		// 	button3=Math.floor(Math.random()*11)+1;
		// 	button4=Math.floor(Math.random()*11)+1;
		// 	totalscore=0;
		// 	$("#matchingnumber").text(totalscore);
		// }

		//
			


	});

	




