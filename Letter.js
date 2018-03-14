
var Letter = function (letter) {
  this.letter = letter;
  this.isGuess = false;

  this.check = function (letter) {
    if(letter === this.letter){
      this.isGuess = true;
    }
  };

  this.toString = function () {
    if (this.isGuess) {
      return this.letter;
    }
    else {
      if(this.letter === " "){
        return " ";
      }
      return "_";
    }
  };
}

module.exports = Letter;
