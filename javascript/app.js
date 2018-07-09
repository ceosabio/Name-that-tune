var rap_questions = [{
    song: src = "OPP.mp3",
    options: ["All About the Benjamins", "O.P.P.", "C.R.E.A.M."],
    correctAnswer: "O.P.P." 
}, {
    song: "It_Was_A_Good_Day.mp3",
    options: ["It Was a Good Day", "God's Plan", "Fight the Power"],
    correctAnswer: "It was a Good Day"
}, {
    song: "California_Love.mp3",
    options: ["In Da Club", "Bodak Yellow", "California Love"],
    correctAnswer: "California Love"
}];

var country_questions = [{
    song: "I_Like_It_I_Love_It.mp3",
    options: ["I Like It I love It", "Forever and Ever Amen", "Leaving on a Jet Plane"],
    correctAnswer: "I Like It I Love It"
}, {
    song: "Stand_By_Your_Man.mp3",
    options: ["Before He Cheats", "Stand By Your Man", "Redneck Woman"],
    correctAnswer: "Stand By Your Man"
}, {
    song: "Friends_In_Low_Places.mp3",
    options: ["Small Town Boy", "Five More Minutes", "Friends in Low Places"],
    correctAnswer: "Friends in Low Places"
}];

var pop_questions = [{
    song: "Sorry.mp3",
    options: ["Perfect", "Sorry", "Like I Love You"],
    correctAnswer: "Sorry"
}, {
    song: "Happy.mp3",
    options: ["Happy", "Finesse", "Love Yourself"],
    correctAnswer: "Happy"
}, {
    song: "Thinking_Out_Loud.mp3",
    options: ["Thinking Out Loud", "Hello", "When I Was Your Man"],
    correctAnswer: "Thinking Out Loud"
}];

// console.log(rap_questions[2].options[1]);

var myRapButton = document.getElementById("rap_button");

// var r_song_01 = document.getElementById("sean_paul");
var r_title = document.getElementById("rap_title");
var r_answers = document.getElementById("r_answers");

function appInit() {
    var song = document.getElementById("rap_audio");
    song.setAttribute("src", "OPP.mp3");
    var r_ans_01 = document.getElementById("answer_01_txt");
    var r_ans_01_val = document.getElementById("answer_01");
        r_ans_01.innerHTML= rap_questions[0].options[0];
        r_ans_01_val.setAttribute("value", rap_questions[0].options[0]);

    var r_ans_02 = document.getElementById("answer_02_txt");
    var r_ans_02_val = document.getElementById("answer_02");
        r_ans_02.innerHTML = rap_questions[0].options[1];
        r_ans_01_val.setAttribute("value", rap_questions[0].options[1]);

    var r_ans_03 = document.getElementById("answer_03_txt"); 
    var r_ans_03_val = document.getElementById("answer_03");
        r_ans_03.innerHTML = rap_questions[0].options[2];
        r_ans_03_val.setAttribute("value", rap_questions[0].options[2]);

    r_ans_01.innerHTML= rap_questions[0].options[0];
    r_ans_01_val.setAttribute("value", rap_questions[0].options[0]);
    r_ans_02_val.setAttribute("value", rap_questions[0].options[1]);
    r_ans_03_val.setAttribute("value", rap_questions[0].options[2]);
}

appInit();

function setRapForm_01(){
    var song= document.getElementById("rap_audio");
    song.setAttribute("src", "OPP.mp3");
    var radioInputs= document.querySelectorAll("#r_answers input");
    radioInputs[0].value= "Franco";
    var label = document.querySelectorAll("#r_answers label");
    var span = label[0].querySelector("span");
    span.innerText= "Franco";
    // label[0].span[0].innerText= "Franco";
    
}

// setRapForm_01();

function setRapForm_02(){
    var song= document.getElementById("sean_paul");
    song.setAttribute("src", "OPP.mp3");
    var radioInputs= document.querySelectorAll("#r_answers input");
}


myRapButton.addEventListener ("click", function(event){
    event.preventDefault();
//     document.getElementsByName("rap_questions").setAttribute[(question[0], choices[0]),
//     (question[0], options[1]),
//     (question[0], options[2]),
//     document.getElementById("rap_title").innerHTML
// document.getElementsByName("rap_questions");
var rap_options = document.getElementsByClassName("hiphop");
    // console.log(rap_options);
    // console.log(rap_options[0].checked);
for(i = 0; i < rap_options.length; i += 1){
    console.log(rap_options[i].value);
if (rap_options[i].value === "O.P.P" && rap_options[i].checked){
    console.log("correct");
}
}
});



var myPopButton = document.getElementById("pop_button");

myPopButton.addEventListener ("click", function(event){
    console.log(event.target);
    console.log("Like, really?");
    console.log(pop_questions[2].options[1]);
});

// var myCountryButton = document.getElementById("country_button");

// myCountryButton.addEventListener ("click", function(){
//     console.log("Country Folk");
//     console.log(country_questions[2].choices[1]);
// });