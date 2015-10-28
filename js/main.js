document.getElementById("button").addEventListener("click", buttonClick); // listening for a click of the element with the id "button", calls buttonClick when it hears it

function buttonClick() { // changes the text color of the "button" element to blue
	document.getElementById("button").style.color = 'blue';
}

document.getElementById("link").addEventListener("contextmenu", rightClick); // listening for a right click of the element with the id "link", calls rightClick when it hears it

function rightClick() { // changes the text of the "link" element to "Visit Gogle"
	document.getElementById("link").innerHTML = 'Visit Google';

}

document.getElementById("paragraph").addEventListener("dblclick", doubleClick); // listening for a double click of the element with the id "paragraph", calls doubleClick when it hears it

function doubleClick() { // changes the background color of the "paragraph" element to green
	document.getElementById("paragraph").style.background = 'green';
}
