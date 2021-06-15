let myLeads = [];
// get input-el id and store it in a variable
const inputEl = document.getElementById('input-el');
// get input-btn id and store it in a variable
const inputButton = document.getElementById('input-btn');

// Add Event Listener when clicked invoke function
inputButton.addEventListener('click', function () {
	// push input value to myLead variable
	myLeads.push(inputEl.value);
	console.log(myLeads);
});
