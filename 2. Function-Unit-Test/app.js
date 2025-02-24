/**
 * @module app
 * @description A collection of utility functions
 */

/**
 * @returns {boolean} Always returns true
 */
const booleanExpression = () => true;

/**
 * @returns {number} Result of multiplying 3 by 3
 */
const simpleCalculation = () => 3 * 3;

/**
 * @returns {Array<number>} An array containing numbers 1 through 5
 */
const arrayBuilder = () => {
  const numbers = [];
  numbers.push(1, 2, 3, 4, 5);
  return numbers;
};

/**
 * @returns {Object} An object with name and age properties
 */
const objectCreator = () => {
  return {
    name: "es",
    age: 21,
  };
};

/**
 * Checks if a user exists in a list of users
 * @param {Array<string>} listOfUsers - Array of usernames
 * @param {string} user - Username to check
 * @returns {boolean} True if user exists in the list, false otherwise
 */
const validUser = (listOfUsers, user) => listOfUsers.includes(user);

module.exports = {
  booleanExpression,
  simpleCalculation,
  arrayBuilder,
  objectCreator,
  validUser,
};
