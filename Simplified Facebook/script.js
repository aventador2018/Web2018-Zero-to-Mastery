var database = [
	{
		username: "Zack",
		password: "supersecret"
	}
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

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user === this.database[0].username && 
		pass === this.database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
}

signIn(userNamePrompt, passwordPrompt);