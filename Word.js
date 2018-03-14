var Letter = require("./Letter.js");

var Word = function (string) {
  this.array = [];
  this.string = string;
  this.count = 0;

  for (var i = 0; i < string.length; i++) {
    this.array.push(new Letter(string[i]));
  }

  this.retWord = function () {
    var array = [];
    var word;
    this.count = 0;
    for (var i = 0; i < this.array.length; i++) {
      var letter = this.array[i].toString();
      if (letter !== "_") {
        this.count++;
      }
      array.push(letter);
    }
    word = array.join(" ");
    return word;
  }

  this.guessWord = function (char) {
    for (var i = 0; i < this.array.length; i++) {
      this.array[i].check(char);
    }
  }
}

module.exports = Word;
