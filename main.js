#! /usr/bin/env node
import inquirer from 'inquirer';
// Define email and password variables
const email = 'karachi@gmail.com';
const password = 'pakistan';
// Function to check if the email and password match
async function login() {
    // Prompt user to enter email
    const { userEmail } = await inquirer.prompt({
        type: 'input',
        name: 'userEmail',
        message: 'Enter your email:'
    });
    // Prompt user to enter password
    const { userPassword } = await inquirer.prompt({
        type: 'password',
        name: 'userPassword',
        message: 'Enter your password:'
    });
    // Check if email and password match
    if (userEmail === email && userPassword === password) {
        console.log('User is logged in successfully.');
    }
    else {
        console.log('Invalid email and password.');
    }
}
// Call the login function
login();
