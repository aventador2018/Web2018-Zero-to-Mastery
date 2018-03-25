var database = [
	{
		username: "zack",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo cooool!"
	}
];

function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
}

signIn(userNamePrompt, passwordPrompt);