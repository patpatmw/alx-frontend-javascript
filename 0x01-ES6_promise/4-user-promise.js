import signUpUser from './your-module.js';

// You can call the 'signUpUser' function with the user's first name and last name.
signUpUser('John', 'Doe')
  .then((user) => {
    console.log(`User signed up: ${user.firstName} ${user.lastName}`);
  })
  .catch((error) => {
    console.error('Error during signup:', error);
  });
