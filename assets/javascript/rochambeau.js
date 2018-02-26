	//global variables
	var inverseRock = "<img src='assets/images/inverseRock.png' height='125'>";
	var inversePaper = "<img src='assets/images/inversePaper.png' height='125'>";
	var inverseScissor = "<img src='assets/images/inverseScissor.png' height='125'>";
	var rock = "<img src='assets/images/rock.png' height='125'>";
	var paper = "<img src='assets/images/paper.png' height='125'>";
	var scissor = "<img src='assets/images/scissors.png' height='125'>";
	var compArray = [inverseRock, inversePaper, inverseScissor];
	var humanScore = 0;
	var compScore = 0;

	
	//wait 600ms after the page loads to display Game instruction
	setTimeout(function () {
	    alert("Try to beat the Machine, best out of 3 determines the fate of the world. Ties will not be recorded.");
	}, 700);

		//"Listen" for Rock button pressed?
	$('#rock').click(function() {
		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		$("#player").html(rock);
		$("#computer").html(compArray[randomNumber]);

			//else if logic to determine who won and lost each hand
			if (randomNumber === 0) {
				console.log("Tie")
			}

			else if (randomNumber === 1) {
				compScore++
				$("#compScore").html(compScore);
			}

			else {
				humanScore++
				$("#humanScore").html(humanScore);
			}

		//delay checkScore so images can load, and score can update before alerting outcome	
		setTimeout(function () {
			checkScores();			
		}, 500);

	});	

	//"Listen" for paper button pressed?
	$('#paper').click(function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		$("#player").html(paper);
		$("#computer").html(compArray[randomNumber]);

			//else if logic to determine who won and lost each hand
			if (randomNumber === 1) {
				console.log("Tie")
			}

			else if (randomNumber === 2) {
				compScore++
				$("#compScore").html(compScore);
			}

			else {
				humanScore++
				$("#humanScore").html(humanScore);
			}
		
		//delay checkScore so images can load, and score can update before alerting outcome	
		setTimeout(function () {
			checkScores();			
		}, 500);

	});

	//"Listen" for scissor button pressed?
	$('#scissor').click(function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		$("#player").html(scissor);
		$("#computer").html(compArray[randomNumber]);

			//else if logic to determine who won and lost each hand
			if (randomNumber === 2) {
				console.log("Tie")
			}

			else if (randomNumber === 0) {
				compScore++
				$("#compScore").html(compScore);
			}

			else {
				humanScore++
				$("#humanScore").html(humanScore);
			}

		//delay checkScore so images can load, and score can update before alerting outcome	
		setTimeout(function () {
			checkScores();			
		}, 500);

	});

	
	function checkScores() {

			if (compScore === 3) {
				alert("You Lost! May God have mercy on our souls... Refresh Page for New Game")

			} else if (humanScore === 3) {
				alert("You WON! Thank you Chuck Norris! Refresh Page for New Game")
			}
		};

	













