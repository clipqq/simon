
var levelNum = 0;
var availableColors = ["green","red","blue","yellow"];
var generatedColor = "";
var userColor = "";
var userPattern = [];
var gamePattern = []; 
var started = 0;


$(document).on("keypress", function() {
	if (started === 0) {
		nextSequence();
		started = 1;
		$("body").removeClass("game-over");

	}
});


function nextSequence() {
	levelNum++;
	$("h1").html("Level " + levelNum);
	userPattern = [];

	var number = Math.floor(Math.random() * 4);
	generatedColor = availableColors[number]
	gamePattern.push(generatedColor);
	console.log("Game:" + gamePattern)
	playSound(generatedColor);	
	$("#" + generatedColor).fadeOut(150).fadeIn(150);	
}

//
$(".btn").on("click", function(e) {
	userColor = e.target.id
	playSound(userColor);
	animatePress(userColor)	
	userPattern.push(userColor);
	console.log("Player:" + userPattern);

	console.log("Level:"+levelNum)
	console.log("user pattern len:"+userPattern.length)

	checkAnswer(userPattern.length-1);
});


//User color selection animation and sound
function playSound(name) {
	var sound = new Audio("sounds/" + name + ".mp3")
	sound.play();
}
function animatePress(currentColor) {		
	$("#" + currentColor).addClass("pressed")

	setTimeout(function() {
		$("#" + currentColor).removeClass("pressed");
	}, 100)
}


//
function checkAnswer(currentLevel) {
	if (userPattern[currentLevel] === gamePattern[currentLevel] ) {
		if (userPattern.length === gamePattern.length) {
		console.log("correct")
		setTimeout(function() {
				nextSequence()
			}, 1000);				
		}
	} else {
		console.log("wrong");
		gameOver();
	}
}

//


function gameOver() {
	$("h1").html("Game Over! Press any key to restart.");
	$("body").addClass("game-over");
	started = 0;
	levelNum = 0;
	availableColors = ["green","red","blue","yellow"];
	generatedColor = "";
	userColor = "";
	userPattern = [];
	gamePattern = [];
}


// $("#green").on("click", function(e) {
// 	console.log(e)
// });

