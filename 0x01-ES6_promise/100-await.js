import { uploadPhoto, createUser } from './utils';

// This line imports two functions, 'uploadPhoto' and 'createUser', from a module named 'utils'.

export default async function asyncUploadUser() {
  // This is the main function, 'asyncUploadUser', which is exported as the default export of this module.

  try {
    // It starts a try block to execute the following asynchronous operations.

    const photo = await uploadPhoto();
    // It uses 'await' to asynchronously call the 'uploadPhoto' function and assigns the result to the 'photo' variable.

    const user = await createUser();
    // It uses 'await' to asynchronously call the 'createUser' function and assigns the result to the 'user' variable.

    return Promise.resolve({
      photo, user,
    });
    // If both asynchronous operations complete successfully, it resolves a Promise with an object containing 'photo' and 'user' properties.
  } catch (err) {
    // If an error occurs during the execution of the asynchronous operations, it enters this catch block.

    return Promise.resolve({
      photo: null,
      user: null,
    });
    // It resolves a Promise with an object containing 'photo' and 'user' properties set to null to indicate that there was an error.
  }
}
