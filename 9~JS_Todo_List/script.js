var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".btn--delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.textContent = 'Remove';
	deleteButton.classList.add('btn--delete');
	deleteButton.addEventListener('click', function(){
		removeParentLi(deleteButton);
	});
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
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

function addListItemDoneOnClick(li){
	li.addEventListener("click", function(){
		li.classList.toggle('done');
	});
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(addListItemDoneOnClick);

function removeParentLi(deleteButton) {
	var li = deleteButton.parentNode;
		deleteButton.parentNode.parentNode.removeChild(li);
}

deleteButtons.forEach(function(deleteButton){
	deleteButton.addEventListener("click", function() {
		removeParentLi(deleteButton);
	});
});
