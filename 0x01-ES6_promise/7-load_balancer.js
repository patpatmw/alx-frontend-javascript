/* eslint-disable */

// This line disables ESLint checking for the entire file, allowing certain coding conventions to be bypassed.

export default function loadBalancer(chinaDownload, USDownload) {
  // This is the main function, 'loadBalancer', which is exported as the default export of this module.

  return Promise.race([chinaDownload, USDownload]);
  // It uses 'Promise.race()' to race between the two Promises, 'chinaDownload' and 'USDownload'. This means it will resolve or reject with the result of the first Promise (either from China or the US) that settles (either resolves or rejects).
}
