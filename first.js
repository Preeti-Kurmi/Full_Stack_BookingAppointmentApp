// ... (existing code)

// Make a GET request to fetch users
function getUsers() {
  axios.get('http://localhost:3000/users')
    .then(response => {
      console.log('Users fetched successfully:', response.data.users);
      displayUsers(response.data.users); // Call displayUsers with data
    })
    .catch(error => {
      console.log('An error occurred:', error);
      alert('Error while fetching users.');
    });
}

document.getElementById('btn').addEventListener('click', addUser);

function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const data = { name, email };

  axios.post('http://localhost:3000/add', data)
    .then(response => {
      console.log('Data posted successfully:', response.data.user);
      displayUser(response.data.user);
      console.log(data.email);
      getUsers(); // Fetch users again after adding a new one
    })
    .catch(error => {
      console.log('An error occurred:', error);
      alert('Error while adding the user.');
    });
}

function displayUsers(users) {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clear the container before displaying users

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <p>${user.name} - ${user.email}</p>
      <button onclick="editUser(${user.id})">Edit</button>
      <button onclick="deleteUser(${user.id})">Delete</button>
    `;
    container.appendChild(userDiv);
  });
}

function editUser(userId) {
  const newName = prompt('Enter new name:');
  const newEmail = prompt('Enter new email:');

  if (newName !== null && newEmail !== null) {
    axios.put(`http://localhost:3000/user/${userId}`, { name: newName, email: newEmail })
      .then(response => {
        console.log('User updated successfully:', response.data.user);
        getUsers(); // Fetch users again after editing
      })
      .catch(error => {
        console.log('An error occurred:', error);
        alert('Error while editing the user.');
      });
  }
}

function deleteUser(userId) {
  axios.delete(`http://localhost:3000/user/${userId}`)
    .then(response => {
      console.log('User deleted successfully:', response.data.message);
      getUsers(); // Fetch users again after deleting
    })
    .catch(error => {
      console.log('An error occurred:', error);
      alert('Error while deleting the user.');
    });
}

getUsers(); // Fetch users when the page loads
