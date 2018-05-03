//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

//Word depends on the Letter constructor. So, we need to require Letter so that we can use it in the Word.js file (this file).
var Letter = require("./Letter");

var Word = function(myWord) {
	this.myWord = myWord;
	this.letters = [];
	this.underscores = [];
	this.splitWord = function() {
		this.letters = this.myWord.split("");
		numberUnderscoresNeeded = this.letters.length;
		console.log("Underscores: " + numberUnderscoresNeeded);
		for (var i=0; i < numberUnderscoresNeeded; i++ ) {
		this.underscores.push("_ ");
		}
		console.log(this.underscores);
		console.log(this.underscores.join(" "));
	}
	this.generateLetters = function() {
		for (i=0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);
			this.letters[i].letterGuessedCorrectly = true;
			console.log(this.letters[i]);
			this.letters[i].showCharacter();
		}
	}
}

var someWord = new Word ("Burnsville");
someWord.splitWord();
someWord.generateLetters();

module.exports = Word;
