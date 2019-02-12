// Simple functions.
let booleanExpression = function () {
    return true;
};

let simpleCalculation = function () {
    let result = 3 * 3;
    return result;
};

let arrayBuilder = function () {
    let result = [];
    result.push(1, 2, 3, 4, 5);
    return result;
};

let objectCreator = function () {
    let result = {
        "name": "es",
        "age": "21"
    };

    return result;
};

// Functions with arguments.
let validUser = function (listOfUsers, user) {
    return listOfUsers.includes(user);
};

module.exports = {
    booleanExpression,
    simpleCalculation,
    arrayBuilder,
    objectCreator,
    validUser
};
