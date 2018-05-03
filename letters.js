//A string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet
//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

var Letter = function(character) {
    // string value that stores the underlying character for the letter
    this.character = character.toUpperCase();

	// boolean value that stores if letter has been guessed yet
    this.letterGuessedCorrectly = false;
    
	// A function that returns underlying character if the letter has been guessed, 
	this.showCharacter = function() {
		if (this.letterGuessedCorrectly) {
			console.log(this.character);
		}
		else {
			console.log ("_");
		}

	}
}

//Test to make sure Letter.js is working
    var letter1 = new Letter ("a");
    letter1.showCharacter();

//export Letter constructor so it is functional with Word.js
module.exports = Letter