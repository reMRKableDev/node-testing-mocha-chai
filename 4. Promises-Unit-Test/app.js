/**
 * @module app
 * @description Demonstration of Promise-based functions for testing
 */
const Promise = require("promise");

// This could be a configuration or state variable in a real application
const groceriesBought = true;

/**
 * Creates a promise that resolves when groceries are bought
 * @returns {Promise<string>} A promise that resolves with a thank you message
 */
const shoppingPromiseResolve = () => {
  return new Promise((resolve, reject) => {
    if (groceriesBought) {
      resolve("Thanks a lot for the help!"); // Fixed typo: "alot" -> "a lot"
    } else {
      reject(new Error("No groceries were bought"));
    }
  });
};

/**
 * Creates a promise that resolves when groceries are NOT bought
 * @returns {Promise<string>} A promise that resolves with a thank you message
 */
const shoppingPromiseReject = () => {
  return new Promise((resolve, reject) => {
    if (!groceriesBought) {
      resolve("Thanks a lot for the help!");
    } else {
      reject(new Error("Groceries were bought unexpectedly"));
    }
  });
};

module.exports = {
  shoppingPromiseResolve,
  shoppingPromiseReject,
};
