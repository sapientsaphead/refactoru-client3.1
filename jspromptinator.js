
//Disaster Victims - ask # of victims, get info for each

var victims;
var victimnameslist = []
var victimphonelist = new Array()
var victimstreetlist = []

var needhelp = function() {
	victims = prompt("How many disaster victims do you wish to enter?","");
	if(victims === 1){
		promptinfo()
	}
	else {
		promptvictims()
	}
}

var promptinfo = function() {
	var victimname = prompt("Please enter your name:","")
	var victimphoneno = prompt("Please enter your phone number:","")
	var victimstreet = prompt("Please enter your street:","")
	victimnameslist.push(victimname)
	victimphonelist.push(victimphoneno)
	victimstreetlist.push(victimstreet)
}

var promptvictims = function() {
	for (var i=0; i<parseInt(victims); i++) {
		promptinfo()
	}
}
//Volunteers- ask # of volunteers, get info for each

var volunteers;
var volunteernameslist = []
var volunteerphonelist = new Array()
var volunteerstreetlist = []

var volunteer = function() {

	volunteers = prompt("How many volunteers would you like to register?","");
	if(volunteers === 1){
		promptvolunteerinfo()
	}
	else {
		promptvolunteers()
	}
}

var promptvolunteerinfo = function() {
	var volunteername = prompt("Please enter your name:","")
	var volunteerphoneno = prompt("Please enter your phone number:","")
	var volunteerstreet = prompt("Please enter your street:","")
	volunteernameslist.push(volunteername)
	volunteerphonelist.push(volunteerphoneno)
	volunteerstreetlist.push(volunteerstreet)
}

var promptvolunteers = function() {
	for (var i=0; i<parseInt(volunteers); i++) {
		promptvolunteerinfo()
	}
}

needhelp()
volunteer()

alert("There are " + victimnameslist.length + " victims.\n" + victimnameslist + "\nThere are "
			+ volunteernameslist.length + " volunteers.\n" + volunteernameslist)