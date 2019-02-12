const Promise = require('promise');

let groceriesBought = true;

let shoppingPromiseResolve = function () {
    return new Promise(function (resolve, reject) {
        if (groceriesBought) {
            let friendAppreciation = 'Thanks alot for the help!';
            resolve(friendAppreciation);
        } else {
            let friendDissapointment = new Error();
            reject(friendDissapointment);
        }
    });
};

let shoppingPromiseReject = function () {
    return new Promise(function (resolve, reject) {
        if (!groceriesBought) {
            let friendAppreciation = 'Thanks alot for the help!';
            resolve(friendAppreciation);
        } else {
            let friendDissapointment = new Error();
            reject(friendDissapointment);
        }
    });
};

module.exports = {
    shoppingPromiseResolve,
    shoppingPromiseReject
};
