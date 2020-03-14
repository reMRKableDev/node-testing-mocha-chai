const axios = require("axios");

let todosUrl = "https://jsonplaceholder.typicode.com/todos";

let apiCall = async () => {
  try {
    const results = await axios.get(todosUrl);
    return results.data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

module.exports = {
  apiCall
};
