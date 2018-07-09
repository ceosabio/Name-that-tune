var rap_questions = [{
    song: src = "im_still_in_love_with_you.mp3",
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

// console.log(rap_questions[2].choices[1]);

// var myRapButton = document.getElementById("rap_button");

var r_song_01 = document.getElementById("sean_paul");
var r_title = document.getElementById("rap_title");
var r_answers = document.getElementById("r_answers");




// myRapButton.addEventListener ("click", function(){
//     document.getElementsByName("rap_questions").setAttribute[(question[0], choices[0]),
//     (question[0], choices[1]),
//     (question[0], choices[2]),
//     document.getElementById("rap_title").innerHTML
// document.getElementsByName("rap_questions");
// });

var myPopButton = document.getElementById("pop_button")

myPopButton.addEventListener ("click", function(){
    console.log("Like, really?");
    console.log(pop_questions[2].choices[1]);
});

var myCountryButton = document.getElementById("country_button")

myCountryButton.addEventListener ("click", function(){
    console.log("Country Folk");
    console.log(country_questions[2].choices[1]);
});