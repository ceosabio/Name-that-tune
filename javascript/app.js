var rap_questions = [{
    question: "name that tune",
    choices: ["all about the benjamins", "O.P.P", "C.R.E.A.M"],
    correctAnswer: "O.P.P." 
}, {
    question: "name that tune",
    choices: ["It Was a Good Day", "God's Plan", "Fight the Power"],
    correctAnswer: "It was a Good Day"
}, {
    question: "name that tune",
    choices: ["In Da Club", "Bodak Yellow", "California Love"],
    correctAnswer: "California Love"
}];

var country_questions = [{
    question: "name that tune",
    choices: ["I Like It I love It", "Forever and Ever Amen", "Leaving on a Jet Plane"],
    correctAnswer: "I Like It I Love It"
}, {
    question: "name that tune",
    choices: ["Before He Cheats", "Stand By Your Man", "Redneck Woman"],
    correctAnswer: "Stand By Your Man"
}, {
    question: "name that tune",
    choices: ["Small Town Boy", "Five More Minutes", "Friends in Low Places"],
    correctAnswer: "Friends in Low Places"
}];

var pop_questions = [{
    question: "name that tune",
    choices: ["Perfect", "Sorry", "Like I Love You"],
    correctAnswer: "Perfect"
}, {
    question: "name that tune",
    choices: ["Happy", "Finesse", "Love Yourself"],
    correctAnswer: "Happy"
}, {
    question: "name that tune",
    choices: ["Thinking Out Loud", "Hello", "When I Was Your Man"],
    correctAnswer: "Thinking Out Loud"
}];

var questionCounter = 0;
var selections= [];

console.log(rap_questions[2].choices[1]);

var myButton = document.getElementById("rap_button").addEventListener ("click", function(){
    console.log("Say Word Son!");
});

var myButton = document.getElementById("pop_button").addEventListener ("click", function(){
    console.log("Like, really?");
});

var myButton = document.getElementById("country_button").addEventListener ("click", function(){
    console.log("Country Folk");
});