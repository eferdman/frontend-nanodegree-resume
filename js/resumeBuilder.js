var name = "Elizabeth Ferdman";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Elizabeth Ferdman",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "510-ga867-5309",
		"email" : "eferdman2@gmail.com",
		"github" : "eferdman",
		"location" : "Berkeley"
	},
	"skills" : [
		"Java ", "JavaScript ", "teaching ", "writing"
	],
	"bioPic" : "images/me.jpg"
}

var work = {
	"jobs" : [
		{
			"employer": "InstaEdu",
			"title" :  "Tutor",
			"location" : "Berkeley",
			"dates" : "2014-present",
			"description" : "Tutor students of all ages in math, English, and foreign language"
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "UC Berkeley",
			"city" : "Berkeley, CA",
			"degree" : "B.A.",
			"major" : "English",
			"dates" : "2009-2014"
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	
}