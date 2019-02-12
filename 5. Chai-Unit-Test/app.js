let objectCreator = function () {
    let result = {
        name: "test object",
        sub: {
            name: 'test nested object'
        },
        numbers: [5, 4, 3, 2, 1],
        hasNumbers: true
    };
    return result;
};

module.exports = {
    objectCreator
};
