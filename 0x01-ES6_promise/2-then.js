/* eslint-disable */

// This line disables ESLint checking for the entire file, allowing certain coding conventions to be bypassed.

export default function handleResponseFromAPI(promise) {
  // This is a function named handleResponseFromAPI that takes a single argument, 'promise.'

  return promise
    .then(() => ({ status: 200, body: 'success' }))
    // This line sets up a promise chain. If the 'promise' resolves successfully, it returns an object with a 'status' of 200 and a 'body' of 'success'.

    .catch(() => new Error())
    // If the 'promise' rejects (encounters an error), it catches the error and returns a new Error object.

    .finally(() => console.log('Got a response from the API'));
    // The 'finally' block is executed regardless of whether the promise is resolved or rejected. In this case, it logs a message indicating that a response was received from the API.
}
