/**
 * @module app
 * @description Module for making API calls to fetch todos
 */
const axios = require("axios");

const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";

/**
 * Fetches todos from the JSONPlaceholder API
 * @returns {Promise<Array>} Promise resolving to an array of todo items
 * @throws {Error} If the API call fails
 */
const apiCall = async () => {
  try {
    const response = await axios.get(TODOS_API_URL);
    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

module.exports = {
  apiCall,
};
