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
	// clear out input field
	inputEl.value = '';
	renderLeads();
});

function renderLeads() {
	// Assign listItems to empty string
	// Add this loop in a forEach
	let listItems = '';
	myLeads.forEach((lead) => {
		listItems += `
		<li>
			<a target='_blank' href='${lead}'>
				${lead}
			</a>
		</li>
	`;
	});

	// for (let i = 0; i < myLeads.length; i++) {
	// 	// Add item to the listItems variable
	// 	// Original idea but it was too complicated
	// 	//listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
	// 	//  Added template literal
	// 	listItems += `
	// 	<li>
	// 		<a target='_blank' href='${myLeads[i]}'>
	// 			${myLeads[i]}
	// 		</a>
	// 	</li>
	// `;
	// }
	// Render the listItems inside the unordered list
	ulEl.innerHTML = listItems;
}
