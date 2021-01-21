var readLineSync = require("readline-sync");
var name = readLineSync.question("Enter Your name: ");
console.log("Hello "+name);
console.log("Lets see how well do you know Mohit!!");
var score =0;
var Questions = [{
  question: "Where do Mohit live? ",
  answer: "Raipur"
}, {
  question: "What is mohit's favourite sport? ",
  answer: "Cricket"
}, {
  question: "What is mohit's favourite mobile game? ",
  answer: "Clash Royal"
}, {
  question: "What is mohit's favourite animal? ",
  answer: "Dog"
}, {
  question: "What is mohit's favourite dish? ",
  answer: "Medu-Vada"
}, {
  question: "Where would mohit go for a holiday trip? ",
  answer: "North India"
}, {
  question: "How many siblings does mohit have? ",
  answer:"2"
}, {
  question: "What is mohit's favourite tv series? ",
  answer: "Sherlock Holmes"
}, {
  question: "What is mohit's favourite movie? ",
  answer: "Interstellar"
}, {
  question: "When was mohit born? ",
  answer: "14 Feb"
}]
function play(question,answer){
  var Youranswer = readLineSync.question(question);
  if(Youranswer.toUpperCase() == answer.toUpperCase()){
    console.log("correct!");
    score +=1;
  }
  else{
    console.log("wrong! its "+answer);
  }
}
for(var i=0;i<Questions.length;i++){
  play(Questions[i].question,Questions[i].answer);
}
console.log("Your final score is:" +score);
