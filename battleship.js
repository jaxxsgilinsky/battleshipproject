var hitCount = 0;
var rows = 10;
var cols = 10;
var squareSize = 50;


// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

// makes the grid columns and rows
var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE


		square.textContent = letterArray[j] + (i+1);




		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
  }
 }

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

var numberhit = 17;
  $("#numberhit").text(numberhit + "ships you have not hit");

	function fireTorpedo() {
						var userInput = $("#userInput").val();
						console.log("userInput is " + userInput);
						var rowBeforeConversion = userInput.substring(0,1);
						var  column = userInput.substring(1,3) - 1;
						var row = letterConversion[rowBeforeConversion];
					  var Userguess = gameBoard[row][column]
					  var myDivString = 's' + row + column;
					  if(Userguess == 1) {
					      $("#" + myDivString).css("background-color", "red");
								hitCount += 1;
								numberhit -= 1;
								$("#numberhit").text(numberhit  + "ships you have not hit");
								console.log(numberhit);
						}
						else {
							$("#" + myDivString).css("background-color", "grey");
						}
						if(hitCount == 17)
						{
							$("body").text("YOU SUNK ALL MY SHIPS");
						}
						console.log(hitCount);
						}
