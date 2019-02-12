const request = require("request");

let todosUrl = "https://jsonplaceholder.typicode.com/todos";

let apiCall = function (callback) {
    request.get({
        url: todosUrl
    }, callback);
};

module.exports = {
    apiCall
};
