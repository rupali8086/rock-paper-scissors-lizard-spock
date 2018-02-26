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


gamePlay("#paper", paper, 1, 2);
gamePlay("#rock", rock, 0, 1);
gamePlay("#scissor", scissor, 2, 0);


function gamePlay(divId, image, num1, num2) { 
	$(divId).click(function() {

	    var randomNumber = Math.floor((Math.random() * compArray.length));
		$("#player").html(image);
		$("#computer").html(compArray[randomNumber]);

			if (randomNumber === num1) {
				console.log("Tie")
			} else if (randomNumber === num2) {
				compScore++
				$("#compScore").html(compScore);
			} else {
				humanScore++
				$("#humanScore").html(humanScore);
			}
		
		setTimeout(function () {
			checkScores();			
		}, 500);

	});

};
	

function checkScores() {

	if (compScore === 3) {
		$("#battleground").css("display", "none");
		$("#hidden div").append("<h1>You LOST, Loser</h1>");
		$("#hidden").css("display", "inherit");
		setTimeout (function() {
			location.reload();	
		}, 3000);		
	

	} else if (humanScore === 3) {
		$("#battleground").css("display", "none");
		$("#hidden div").append("<h1>You WON, Wahoo!</h1>");
		$("#hidden").css("display", "inherit");
		setTimeout (function() {
			location.reload();	
		}, 3000);			
	}
};

	













