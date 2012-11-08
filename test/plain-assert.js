var assert = require('assert');

module.exports = p_assert;

function p_assert(message, should, be) {
    var userMessage = message + ", should return: " + should;
    try {
        assert.equal(should, be);
        pass("\t*Passed*:\t " + userMessage);
    } catch (e) {
        fail("\t*Failed*:\t" + userMessage + ". Instead got: " + be + ".");
    }
}

function fail(str) {
    var red = "\x1B[31m";
    console.log(red + str + "\x1B[0m");
}

function pass(str) {
    var green = "\x1B[32m";
    console.log(green + str + "\x1B[0m");
}