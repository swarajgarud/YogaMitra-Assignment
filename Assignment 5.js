// Write a function in Node.js that reads a file from the filesystem and returns a Promise that resolves with the file's contents as a string. The function should handle errors that may occur when reading the file.
//Ans:- 
const fs = require('fs');
function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}