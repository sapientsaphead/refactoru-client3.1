
//Disaster Victims - ask # of victims, get info for each

var morevictims;
var victimname;
var victimphoneno;
var victimstreet;
var victimOutput = '';
var victimlist = [];


var needhelp = function() {
	promptinfo();

	if(morevictims) {   // same as morevictims === true
		needhelp();
	}
	else {   // same as else if (morevictims === false) 
		alert("Register as a volunteer.");
		willvolunteer();
	}
};

var promptinfo = function() {
	var victiminfo = {}; //Var is redefining the object each time prompt info is called.
	victiminfo.victimname = prompt("Please enter your name:","");
	victiminfo.victimphoneno = prompt("Please enter your phone number:","");
	victiminfo.victimstreet = prompt("Please enter your street:","");
	victimOutput += victiminfo.victimname + ", "+ victiminfo.victimphoneno + ", " + victiminfo.victimstreet + "\n";
	victimlist.push(victiminfo);
	morevictims = window.confirm("Do you need to enter an additional victim?");
};

//Volunteers- ask # of volunteers, get info for each

var morevolunteers;
var volunteername;
var volunteerphoneno;
var volunteerstreet;
var volunteerOutput = '';
var volunteerlist = [];
var helperOutput = []; // same as new Array()


var willvolunteer = function() {
	promptvolunteerinfo();
	
	if(morevolunteers) { // same as morevolunteers === true
		willvolunteer();
	}
};

var promptvolunteerinfo = function() {
	var volunteerinfo = {};
	volunteerinfo.volunteername = prompt("Please enter your name:","");
	volunteerinfo.volunteerphoneno = prompt("Please enter your phone number:","");
	volunteerinfo.volunteerstreet = prompt("Please enter your street:","");
	volunteerOutput += volunteerinfo.volunteername + ", " + volunteerinfo.volunteerphoneno + ", " + volunteerinfo.volunteerstreet +"\n";
	volunteerlist.push(volunteerinfo);
	morevolunteers = window.confirm("Do you need to enter an additional volunteer?");
};

//Choose appropriate singular or plural version of word victim(s) and volunteer(s)

var pluralize = function (word, number) {
	if(number === 1) {
		return word;
	}
	else {
		return word + "s";
	}
};

var victim = pluralize("victim", victimlist.length);
var volunteer = pluralize("volunteer", volunteerlist.length); 

//Call functions

alert("Register as a victim.");

needhelp();

alert("There are " + victimlist.length + " " + victim + "\n" + victimOutput + "\nThere are "
			+ volunteerlist.length + " " + volunteer + "\n" + volunteerOutput);


//Bonus ||
var helpme = prompt("Enter the name of a person in need:");

var findvictimstreet = function() {
	for (var i=0; i<victimlist.length; i++)
		if (victimlist[i].victimname === helpme) {
			return victimlist[i].victimstreet;
		}
};

var stupidstreet = findvictimstreet();

var findhelp = function() {
	for (var i=0; i<volunteerlist.length; i++)
		if (volunteerlist[i].volunteerstreet === stupidstreet)
			helperOutput.push(volunteerlist[i].volunteername);
};

findhelp();

alert("These volunteers are nearby: \n" + helperOutput);




