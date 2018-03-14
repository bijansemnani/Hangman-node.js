var inquire = require("inquirer");
var Word = require("./Word.js");


var words = ["tiesto", "avicii", "alesso", "ram", "swedish house mafia"];
var rand;
var word;
var count;
var length;
function setWord() {
  rand = words[Math.floor(Math.random()*words.length)];
  word = new Word(rand);
  count = 12;
  length = rand.length;
}

function recurPrompt(isFirst) {
  if (isFirst) {
    setWord();
  }

  inquire.prompt([
    {
      name:"letter",
      message:"guess a letter"
    }
  ]).then(function (answer) {
    word.guessWord(answer.letter);
    console.log(word.retWord());
    if (word.count === length) {
      console.log("You are correct!!!");
    }
    else {
      recurPrompt(false);
    }
  });
}

recurPrompt(true);
