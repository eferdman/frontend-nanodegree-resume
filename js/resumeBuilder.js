var bio = {
	"name" : "Elizabeth Ferdman",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "310-867-5309",
		"email" : "eferdman2@gmail.com",
		"github" : "eferdman",
		"location" : "Berkeley, CA"
	},
	"skills" : [
		"HTML ", "JavaScript ", "Java ", "teaching ", "writing"
	],
	"bioPic" : "images/me.jpg"
}

var work = {
	"jobs" : [
		{
			"employer": "InstaEdu",
			"title" :  "Tutor",
			"location" : "Berkeley, CA",
			"dates" : "September 2014-present",
			"description" : "Tutor students online in math, writing, and foreign language"
		}
	]
}

var education = {
	"schools" :
		{
			"name" : "UC Berkeley",
			"location" : "Berkeley, CA",
			"degree" : "B.A.",
			"major" : "English",
			"dates" : "2009-2014"
		}
}

bio.display = function() {
	displayNameAndRole();
	displayContacts();
	displaySkills();
}

bio.display();

function displayNameAndRole() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}

function displayContacts() {
	var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
	formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
	formattedContact = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
	formattedContact = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
}	

function displaySkills() {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


education.display = function() {
	$("#education").append(HTMLschoolStart);
	
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
	$(".education-entry").append(formattedNameDegree);

	var formattedEdu = HTMLschoolDates.replace("%data%", education.schools.dates);
	$(".education-entry").append(formattedEdu);

	formattedEdu = HTMLschoolLocation.replace("%data%", education.schools.location);
	$(".education-entry").append(formattedEdu);

	formattedEdu = HTMLschoolMajor.replace("%data%", education.schools.major);
	$(".education-entry").append(formattedEdu);
}

education.display();

$("#mapDiv").append(googleMap);