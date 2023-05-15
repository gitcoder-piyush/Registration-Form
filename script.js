var registeredUsers = [];

function displayData() {
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var output = document.getElementById('output');

  // Create an object to store the user's data
  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };

  // Add the user to the registeredUsers array
  registeredUsers.push(user);

  // Clear the form inputs
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('email').value = '';

  // Generate the HTML for displaying all registered users
  var usersHTML = '<h2>Registered Users:</h2>';
  for (var i = 0; i < registeredUsers.length; i++) {
    usersHTML += '<div class="user-data">' +
                 '<p><strong>First Name:</strong> ' + registeredUsers[i].firstName + '</p>' +
                 '<p><strong>Last Name:</strong> ' + registeredUsers[i].lastName + '</p>' +
                 '<p><strong>Email:</strong> ' + registeredUsers[i].email + '</p>' +
                 '</div>';
  }

  // Update the output div with the registered users' data
  output.innerHTML = usersHTML;
}
