//console.log('testapp');
//console.log($);verified juery talks to index.html
//Create variables with initial variables
var counter = 30;
var currentmovieQuestion =0;
var score = 0;
var reset = 0;
var timer;

//Create function aksQuestion to
//display the question and the answer choices.

function askQuestion() {
    const question = movieQuestions[currentmovieQuestion].movieQuestions;//
    const choices = movieQuestions [currentmovieQuestion].choices;//
//Access id#game
    $('#game').html('<h4>'+ question + '</h4>');

}

askQuestion();