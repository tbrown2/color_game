colorarray = ["blue", "cyan", "gray", "green", "magenta", "orange", "red", "white", "yellow"];

function do_game() {
	var color = colorarray[random_index()];
	alert(color);
	var guessed = false;
	while (!guessed) {
		var guess;
		guess = prompt("I am thinking of one of these colors:\n\n" + colorarray.join(", ") + "\n\nWhat color am I thinking of?");
		if (guess.toLowerCase() == color) {
			guessed = true;
		}
	}
}

function random_index() {
	return Math.floor(Math.random()*colorarray.length);
}

function check_guess(color){

}