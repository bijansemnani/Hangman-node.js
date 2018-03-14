var Letter = require("./Letter.js");

var Word = function (string) {
  this.array = [];
  this.string = string;

  for (var i = 0; i < string.length; i++) {
    this.array.push(new Letter(string[i]));
  }

  this.retWord = function () {
    var array = [];
    var word;
    for (var i = 0; i < this.array.length; i++) {
      array.push(this.array[i].toString());
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
