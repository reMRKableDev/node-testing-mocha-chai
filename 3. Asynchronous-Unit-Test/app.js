const fs = require('fs');

let readFile = function (callback) {
    fs.readFile('greetings.txt', 'utf8', callback);
};

module.exports = {
    readFile
};
