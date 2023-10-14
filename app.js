// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add the CORS middleware
const app = express();
const sequelize = require('./database');
// const User=require('./sequelize');
const control=require('./Controller');

sequelize.sync().then(() => {
  console.log('Database and tables created!');
});


app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow cross-origin requests

const users = []; // An array to store user data

app.post('/add',control.postuser );
  

// Define a route to get all users
app.get('/users',control.getuser);

// Define a route to edit a user
app.put('/user/:id', control.edituser);

// Define a route to delete a user
app.delete('/user/:id', control.dltuser);



const port = 3000; // Change the port to 3000
sequelize.sync().then(res=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

})


