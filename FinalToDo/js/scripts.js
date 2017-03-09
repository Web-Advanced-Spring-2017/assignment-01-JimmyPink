// from w3schools.com

console.log("hello world")

// create a "close" button and append it to each list item
var myList = document.getElementsByTagName('LI').contentEditable = true;
var i;
for (i = 0; i < myList.length; i++) {
	var span = document.createElement("SPAN");
	// u2716 unicode for X in C++ and java
	var txt = document.createTextNode("\u2327");
	span.className = "closeX";
	span.appendChild(txt);
	myList[i].appendChild(span);
}

// click on a close button to hide the curret list item
var closeX = document.getElementsByClassName("closeX");
var i;
for (i = 0; i < closeX.length; i++){	
	closeX[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === "Li") {
		ev.target.classList.toggle('   checked   ');
	}
}, false);

// create new list item when clicking on the 'add' button
function newElement(){
	var li = document.createElement('li');
	var inputValue = document.getElementById("myInput").value;
	var listDiv = document.createElement('p');
	listDiv.style="display:inline";
	listDiv.contentEditable = true;
	var t = document.createTextNode(inputValue);
	listDiv.appendChild(t);

	
	if(inputValue === '') {
		alert("I find it hard to believe you have nothing to do!");	
	} else {
		// edits the list item .contentEditable = true
	li.appendChild(listDiv);
		console.log(t);

document.getElementById("myUL").appendChild(li).contentEditable = false;	
	}
document.getElementById("myInput").value = "";

var span = document.createElement("button");
// var span = document.createElement("SPAN");
var txt = document.createTextNode("\u2327");
span.className = "closeX";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i <closeX.length; i++) {
console.log(closeX);
console.log(closeX.length);

	closeX [i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	 }
  }

}



