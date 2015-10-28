document.getElementById("submitForm").addEventListener("submit", submitClick);

function submitClick (event)
{
	event.preventDefault();
		console.log("The firstName is: " + document.getElementsByName("first")[0].value);
		console.log("The lastName is: " + document.getElementsByName("last")[0].value);
		console.log("The email is: " + document.getElementsByName("email")[0].value);
		console.log("The message is: " + document.getElementsByName("message")[0].value);
}
