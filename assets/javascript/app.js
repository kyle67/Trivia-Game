//console.log('testapp');
//console.log($);verified juery linked to index.html
//Create variables with initial variables
var counter = 30;
var currentQuestion =0;
var score = 0;
var lost = 0;
var timer;

//Create function aksQuestion to
//display the question and the answer choices.

function askQuestion() 
{
    const question = movieQuestions[currentQuestion].question;
    const choices = movieQuestions [currentQuestion].choices;
    
    $('#time').html('Timer:' + counter);
    $('#game').html('<h4>'+ question + '</h4>');

}

askQuestion();