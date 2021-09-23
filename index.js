var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;

var ironMan = {
  question : "What was the last IronMan armour called?\n",
  options : "a. mark42 \nb. mark 73 \nc. mark85 \n",
  answer : "c",
}

var spiderMan = {
  question : "When is the release of SpiderMan: No Way Home?\n",
  options : "a. October \nb. November \nc. December \n",
  answer : "c",
}

var blackPanther = {
  question : "Where is BlackPanther from?\n",
  options : "a. Wakanda \nb. Kenya \nc. Africa \n",
  answer : "a",
}

var questions = [ironMan, spiderMan, blackPanther];

var highScore = [
  {
    name: "Taufiq",
    score: 4
  }
]

function welcome(){
  var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName+" to MARVEL Quiz!!! \n");
}

function play(questionObject){
  var userAnswer = readlineSync.question(questionObject.question + questionObject.options);

  if(userAnswer === questionObject.answer){
    console.log(chalk.green("You're right!!"));
    score++;
  }else{
    console.log(chalk.red("You're wrong!!"));
    score--;
  }

  console.log("current score: "+score);
  console.log("--------------------------");
}

welcome();

for(var i=0; i < questions.length; i++){
  play(questions[i]);
}

function scores(){
  console.log("You scored: "+score);
  if(score > highScore[0].score){
    console.log("Congratulations!! You have beaten the high score, Please ping me and I'll update it");
  }else{
    console.log("Check out the high scores");
  highScore.map(score => console.log(score.name+" : "+score.score));
  }
  
}

scores();