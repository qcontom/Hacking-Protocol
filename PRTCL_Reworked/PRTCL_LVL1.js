


//This is just the thing that is shown before the entered code
first = "CPLX >>> "
level = 1;
inputPhase = 0;
var username = ""
var password = ""

var audio = new Audio('knob.mp3');
var audio2 = new Audio('definite.mp3');
var audio3 = new Audio('beep-07.mp3');

generateUser();

//Takes the text input and displays in terminal window
function update() {
	if (inputPhase == 0) {
		current = document.getElementById("terminal").innerHTML
		textInBox = document.getElementById("myTextarea").value
		document.getElementById("terminal").innerHTML = current + first + textInBox + "<br/><br/>";
		document.getElementById("myTextarea").value = "";
		audio.play();
		checkCommand();
	}
//Checks your username
	else if (inputPhase == 1) {
		current = document.getElementById("terminal").innerHTML
		textInBox = document.getElementById("myTextarea").value
		document.getElementById("terminal").innerHTML = current + first + textInBox + "<br/><br/>";
		document.getElementById("myTextarea").value = "";
		audio.play();
		scrollToBottom();
		checkUsername();
	}
//Checks your password
	else if (inputPhase == 2) {
		current = document.getElementById("terminal").innerHTML
		textInBox = document.getElementById("myTextarea").value
		document.getElementById("terminal").innerHTML = current + first + textInBox + "<br/><br/>";
		document.getElementById("myTextarea").value = "";
		scrollToBottom();
		checkPassword();
	}
}

//Generic function to check what is entered into the window
function checkCommand() {
	if (level == 1) {
		switch (textInBox) {
			case "help":
				help1();
				break;
			case "ls":
				ls1();
				break;
			case "motd":
				motd1()
				break;
			case "cat":
				cat()
				break;
			case "cat password.fyle":
				catPassword()
				break;
			case "login":
				login()
				break;
			default:
				unknownInput();
		}
		scrollToBottom();
	}
}

function help1() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "help: Displays this help." + "<br/>" + "ls: Lists files." + "<br/>" + "cat: Input before filename to display the contents of a file." + "<br/>" + "motd: Displays main objective." + "<br/>" + "login: Login to your computer." + "<br/><br/>";
}

function ls1() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "----Files----" + "<br/><br/>" + "password.fyle" + "<br/><br/>" + "-------------"+ "<br/><br/>";
}

function unknownInput() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "<font color='#ff333'>Error: Command not found!</font>" + "<br/><br/>";
	audio3.play();
	scrollToBottom();
}

function motd1() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "<font color='#4dff4d'>Welcome to the complex. Please login with your username and password.</font>" + "<br/><br/>";
}

function cat() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "Input before filename to display the contents of a file." + "<br/>" + "USAGE: cat 'filename' " + "<br/><br/>";
}

function catPassword() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "---START OF FILE---" + "<br/>" + "username: " + username + "<br/>" + "password: " + password + "<br/>" + "---END OF FILE---" + "<br/><br/>"
}

function login() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "   Username:" + "<br/><br/>";
	inputPhase = 1;
}

function password() {
	current = document.getElementById("terminal").innerHTML;
	document.getElementById("terminal").innerHTML = current + "   Password:" + "<br/><br/>"
}


//Checks the entered username
function checkUsername() {
	scrollToBottom();
	if (level == 1)
		switch (textInBox) {
			case username:
				inputPhase = 2;
				scrollToBottom();
				password();
				break;
			case "root":
				inputPhase = 2;
				password();
				break;
			default:
				inputPhase = 0;
				unknownInput();
		}
		scrollToBottom();
}

//Checks the entered password
function checkPassword() {
	scrollToBottom();
	if (level == 1)
		switch (textInBox) {
			case password:
				endLevel();
				break;
			case "root":
				endLevel();
				break;
			default:
				inputPhase = 0;
				unknownInput();
		}
		scrollToBottom();
}

//Ends the level with a neato sound
function endLevel() {
	document.getElementById("terminal").innerHTML = "----YOU HAVE COMPLETED LEVEL 1---- "
	audio2.play();

}

function scrollToBottom() {
	el = document.getElementById('terminal')
	el.scrollTop = el.scrollHeight

	el.scrollIntoView( {
		behavior: 'smooth'
	})

	setTimeout( function() {
		window.scrollTo( {
			top: 30000,
			behavior: 'smooth'
		});
	}, 1000 );
}

//Shown once as a header at the beginning of the level
function level1() {
	document.getElementById("terminal").innerHTML = "Connected to Complex Remote. Please login to proceed: " + "<br/><br/>";
}

//This is only to sense the enter key being pressed
function main1() {
$(document).keypress(function (e) {
    if (e.which == 13) {
        update();
    }



});
}
function generateUser() {

var x = Math.floor(((Math.random() * 10) + 1) % 5);

switch(x) {
	case 0:
	username = "aiden"
	password = "scarecrow4"
	break;
	case 1:
	username = "lucas"
	password = "139army"
	break;
	case 2:
	username = "caden"
	password = "marbles"
	break;
	case 3:
	username = "grayson"
	password = "thecakeisalie"
	break;
	case 4:
	username = "mason"
	password = "pollutionsucks"
	break;
}
}
