var readlinesync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var que = chalk.cyan;
var correct = chalk.green;
var incorrect = chalk.red;
var highlight = chalk.yellow;

var userName = readlinesync.question(chalk.bgMagenta("Hi Buddy, What's Your Name: "));

console.log(chalk.bold.black.bgWhite("Glad to have you here ",userName," Let's have a look back at 2020 with an interesting quiz"));

console.log("*****************************************")
console.log(highlight("GENERAL INSTRUCTIONS: "));
console.log("1. You will be asked a total of", highlight("5 questions"));
console.log("2. For whatever answer you choose, please enter it's corresponding",highlight("alphabet(a/b/c)"));
console.log("3. Based on your answers a",highlight("score"), "will be generated & displayed");
console.log("Without any further talk, let's start")
console.log("******************************************")

var questions = [
  {
    question: `What generation of iPhone was launched by Apple?
     (a)13 
     (b)12 
     (c)11`,
    answer: "b"
  },
  {
    question: `Which country sent an unmanned space probe to the Moon?
    (a)U.S
    (b)Russia
    (c)China`,
    answer: "c"
  },
  {
     question:` Which social media app did Donald Trump try to block in the US?
     (a)Facebook
     (b)Shein
     (c)TikTok`,
     answer: "c"
  },
  {
     question: `What’s the name of Joe Biden ’s wife, who will become the First Lady in 2021?
     (a)Dr Jill Biden
     (b)Dr Holy Biden
     (c)Emily Biden`,
     answer: "a"
  },
  {
     question: `On Jan. 8, Prince Harry and his wife, Meghan, announced that they were .
     (a)moving to Paris
     (b)renouncing their royal titles
     (c)stepping back as "senior member" of the royal family`,
     answer: "c"
  }
]

function play(question,answer)
{
  console.log(que(question));
  var userAnswer = readlinesync.question("Enter your input:");
  if(userAnswer==answer)
  {
    console.log(correct("Correct"));
    score++;
  }
  else
  {
    console.log(incorrect("Oops!, That's incorrect"));
  }
  console.log("----------------------------------------------------");
}

for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}

if(score>=3)
{
console.log(chalk.magenta.bold("Yayyy, You scored: ",score,"/5","Congratulations!"));
}
else
{
  console.log(chalk.yellow.bold("Oops, You scored: ",score,"/5"," Not bad eh? "));
}


