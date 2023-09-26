import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // This is the main function, 'handleProfileSignup', which is exported as the default export of this module.

  const userData = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    value: data,
  }));
  // It uses 'await' to call the 'signUpUser' function, which returns a Promise that resolves with user data. The 'then' block is used to transform the resolved value into an object with 'status' set to 'fulfilled' and 'value' containing the user data.

  const fileData = await uploadPhoto(fileName).catch((err) => ({
    status: 'rejected',
    value: err.toString(),
  }));
  // Similarly, it uses 'await' to call the 'uploadPhoto' function, which returns a rejected Promise with an error message. The 'catch' block is used to transform the rejected value into an object with 'status' set to 'rejected' and 'value' containing the error message.

  return Promise.resolve([userData, fileData]);
  // It returns a Promise that resolves with an array containing the user data and file data objects. The Promise is resolved regardless of whether the 'signUpUser' or 'uploadPhoto' Promises resolved or rejected.
}
