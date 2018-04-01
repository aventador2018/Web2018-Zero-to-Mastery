var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myLiClasses = document.getElementsByTagName("li").classList;
var li = document.getElementsByTagName("li");
var dlt = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function toggleDone() {
	if (myLiClasses.contains("done")) {
		myLiClasses.remove("done");
	} else {
		myLiClasses.add("done");
	}
}

function deleteItem() {
	ul.removeChild("li");
}

function createListElement() {
	var li = document.createElement("li");
    var dltbtn = document.createElement("button");
    dltbtn.appendChild(document.createTextNode("Delete"))
	li.appendChild(document.createTextNode(input.value));
    li.appendChild(dltbtn);
	ul.appendChild(li);
	input.value = "";

	dltbtn.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//dlt.addEventListener("click", alert("blablabla"));

//dlt.addEventListener("click", deleteItem);