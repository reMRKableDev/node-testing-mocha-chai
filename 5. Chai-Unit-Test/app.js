/**
 * @module app
 * @description Creates a test object with nested properties for testing
 */

/**
 * Creates a test object with nested properties and array values
 * @returns {Object} A test object with specific structure
 */
const objectCreator = () => {
  return {
    name: "test object",
    sub: {
      name: "test nested object",
    },
    numbers: [5, 4, 3, 2, 1],
    hasNumbers: true,
  };
};

module.exports = {
  objectCreator,
};
