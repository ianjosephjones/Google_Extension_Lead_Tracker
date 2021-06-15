let myLeads = [];
// get input-el id and store it in a variable
const inputEl = document.getElementById('input-el');
// get input-btn id and store it in a variable
const inputButton = document.getElementById('input-btn');
// Get unordered list store it in a variable
const ulEl = document.getElementById('ul-el');

// Add Event Listener when clicked invoke function
inputButton.addEventListener('click', function () {
	// push input value to myLead variable
	myLeads.push(inputEl.value);
	renderLeads();
});

function renderLeads() {
	// Assign listItems to empty string
	let listItems = '';
	for (let i = 0; i < myLeads.length; i++) {
		// Add item to the listItems variable
		listItems += '<li>' + myLeads[i] + '</li>';
	}
	// Render the listItems inside the unordered list
	ulEl.innerHTML = listItems;
}
