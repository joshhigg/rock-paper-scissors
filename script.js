var introMessage = confirm("Let's play Rock, Paper, Scissors!");
if (introMessage = false) {
    cancel
}

var userSelect = prompt("Choose Rock, Paper, or Scissors");

var computerSelect = Math.random();
if (computerSelect < 0.34) {
    computerSelect = "Rock";
} else if (computerSelect <= 0.67) {
    computerSelect = "Paper";
} else {
    computerSelect = "Scissors";
}

alert("The Computer Chose " + computerSelect + "!");

var userWins = 0;
var computerWins = 0;
var ties = 0;


function comparison(x,y) {
    if (x == y) {
        alert("It's a tie!");
        ties++;
    } else if (x === "Rock" && y === "Scissors") {
        alert("You win!");
        userWins++;
    } else if (x === "Scissors" && y === "Paper") {
        alert("You win!");
        userWins++;
    } else if (x === "Paper" && y === "Rock") {
        alert("You win!");
        userWins++;
    } else if (x === "Scissors" && y === "Rock") {
        alert("You lose :(");
        computerWins++;
    } else if (x === "Paper" && y === "Scissors") {
        alert("You lose :(");
        computerWins++;
    } else if (x === "Rock" && y === "Paper") {
        alert("You lose :(");
        computerWins++;
    } else {
        alert("Error, Please be sure to capitalize your choice");
    }
}

comparison(userSelect,computerSelect);


confirm("Total wins:" + " \n \n You: " + userWins + " \n Computer: " + computerWins + "\n Ties: " + ties + "\n \n Play Again?");

for (let i = 1; i < 10; i++) {
    userSelect = prompt("Choose Rock, Paper, or Scissors");
    var computerSelect = Math.random();
if (computerSelect < 0.34) {
    computerSelect = "Rock";
} else if (computerSelect <= 0.67) {
    computerSelect = "Paper";
} else {
    computerSelect = "Scissors";
}
    alert("The Computer Chose " + computerSelect + "!");
    comparison(userSelect,computerSelect);
    confirm("Total wins:" + " \n \n You: " + userWins + " \n Computer: " + computerWins + "\n Ties: " + ties + "\n \n Play Again?");
}

