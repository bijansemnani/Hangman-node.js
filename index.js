var inquire = require("inquirer");
var Word = require("./Word.js");


var words = ["tiesto", "avicii", "alesso", "ram", "swedish house mafia"];
var rand;
var word;
var count;
function setWord() {
  rand = words[Math.floor(Math.random()*words.length)];
  word = new Word(rand);
  count = 12;
}

function recurPrompt() {


  inquire.prompt([
    {
      name:"letter",
      message:"guess a letter"
    }
  ]).then(function (answer) {

  });
}
