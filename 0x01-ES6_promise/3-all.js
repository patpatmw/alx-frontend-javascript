/* eslint-disable */

// This line disables ESLint checking for the entire file, allowing certain coding conventions to be bypassed.

import { uploadPhoto, createUser } from './utils.js';

// This line imports two functions, `uploadPhoto` and `createUser`, from a module named 'utils.js'.

export default function handleProfileSignup() {
  // This is the main function, 'handleProfileSignup', which is exported as the default export of this module.

  return Promise.all([uploadPhoto(), createUser()])
    // Here, it uses `Promise.all` to execute both 'uploadPhoto' and 'createUser' functions concurrently.
    .then((result) => { 
      // If both promises resolve successfully, it enters this 'then' block.

      console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`
      );
      // It logs a message using data from the resolved promises. It assumes that 'uploadPhoto' returns an object with a 'body' property, and 'createUser' returns an object with 'firstName' and 'lastName' properties.

    })
    .catch((error) => {
      // If any of the promises reject (encounter an error), it enters this 'catch' block.

      console.log('Signup system offline');
      // It logs a message indicating that the signup system is offline.
    });
}
