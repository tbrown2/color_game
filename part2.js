colorarray = ["blue", "cyan", "gray", "green", "magenta", "orange", "red", "teal", "yellow"];
color = colorarray[random_index()];
count = 0;

function do_game() {
	alert(color);
	var guessed = false;
	while (!guessed) {
		var guess;
		guess = prompt("I am thinking of one of these colors:\n\n" + colorarray.join(", ") + "\n\nWhat color am I thinking of?");
		guess = guess.toLowerCase();
		guessed = check_guess(guess);
		count++;
	}
}

function random_index() {
	return Math.floor(Math.random()*colorarray.length);
}

function check_guess(guess){
	if (colorarray.indexOf(guess)<0) {
		alert("Sorry, I don't recognize your color.\n\nPlease try again.");
	}
	else if (guess < color) {
		alert("Sorry, your guess is not correct!\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.");
	}
	else if (guess > color) {
		alert("Sorry, your guess is not correct!\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.");
	}
	else {
		myBody=document.getElementsByTagName("body")[0];
		myBody.style.background=color;
		setTimeout(function() {
			alert ("Congratulations! You have guessed the color!\n\nIt took you " + count + " guessed to finish the game!\n\nYou can see the colour in the background.");
		}, 1);
		return true;
	}
	return false;
}