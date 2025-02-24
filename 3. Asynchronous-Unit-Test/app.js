/**
 * @module app
 * @description File reading utility with async operation
 */
const fs = require("fs");

/**
 * Reads the contents of the greetings.txt file
 * @param {Function} callback - Function to handle the file data (error, data)
 */
const readFile = (callback) => {
  fs.readFile("greetings.txt", "utf8", callback);
};

module.exports = {
  readFile,
};
