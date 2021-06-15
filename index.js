let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];
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
	console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
	ulEl.innerHTML += '<li>' + myLeads[i] + '</li>';
}
