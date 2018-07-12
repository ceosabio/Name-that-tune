/* globals console */
var genre_select = document.getElementById("genre_select"),
	genre_options = genre_select.getElementsByClassName("genre"),
	song_audio = document.getElementById("song_audio"),
	song_option = document.getElementsByClassName("song_option");

var genre_songs = [], choices_array = [], songs_length = songs.length;
// Loop index variables
var a, b, c;

function song_title_choices(){
	var choices_index = [0,1,2,3];
	var choices_random_order = [];
	var choice_array_pos = choices_index[Math.floor(Math.random()*choices_index.length)];
	var choices_array = [genre_songs[0].title];
	var choices_random_order = [choice_array_pos];
	choices_index.splice(choices_index.indexOf(choice_array_pos), 1);
	var options_ammount = 0;

	// GENERATE 3 MORE RANDOM OPTION TITLES AND MAKE SURE THAT 
	// THEY ARE NOT REPEATED WHILE AT THE SAME TIME CREATE AN ARRAY WITH 
	//  A SEQUENCE OF NUMBERS NUMBERS 0-3 AT RANDOM THAT SERVE AS THE RANDOM POSITION OF THE ANSWERS
	while ( options_ammount < 3 ) {
		var random_title = songs[Math.floor(Math.random()*songs_length)].title;
		if ( choices_array.includes(random_title) === false ) {
			choice_array_pos = choices_index[Math.floor(Math.random()*choices_index.length)];
			choices_array.push(random_title);
			choices_random_order.push(choice_array_pos);
			choices_index.splice(choices_index.indexOf(choice_array_pos), 1);
			options_ammount += 1;
		}
	}

	// POPULATE ANSWERS
	for(c = 0; c < song_option.length; c++) {
		song_option[choices_random_order[c]].innerHTML = choices_array[c];
	}
}

function song_load(){
	song_audio.src = "songs/"+genre_songs[0].title+".mp3";
}

// CREATE AN ARRAY OF SONGS BASED ON THE GENRE SELECTION
function genre_selection(evt){
	genre_songs = [];
	if ( evt.target.innerHTML === "Random" ) {
		genre_songs = songs;
	} else {
		for (b = 0; b < songs_length; b++) {
			if (songs[b].genre === evt.target.innerHTML ) {
				genre_songs.push(songs[b]);
			}
		}
	}

	// LOAD TEH SONG AND GENERATE ANSWER OPTIONS
	song_load();
	song_title_choices();
}

// ADD EVEBNT LISNERS FOR GENRE BUTTONS
for (a = 0; a < genre_options.length; a++) {
	genre_options[a].addEventListener("click", genre_selection);
}

function init(){

}

window.onload = init;