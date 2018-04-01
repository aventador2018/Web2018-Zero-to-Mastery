var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var dlt = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function deleteItem() {
	this.parentElement.remove();
}

function toggleDone() {
	this.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
    var dltbtn = document.createElement("button");
    dltbtn.appendChild(document.createTextNode("Delete"))
	//li.appendChild(document.createTextNode(input.value));
	li.innerText = input.value;
    li.appendChild(dltbtn);
	ul.appendChild(li);
	input.value = "";

    dltbtn.addEventListener("click", deleteItem);

    li.addEventListener("click", function () {
        this.classList.toggle("done")
    });
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

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggleDone);
}

for (var i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener("click", deleteItem);
}
//dlt.addEventListener("click", alert("blablabla"));

//dlt.addEventListener("click", deleteItem);