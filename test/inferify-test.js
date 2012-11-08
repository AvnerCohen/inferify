var p_assert = require("./plain-assert");
var inferify = require('../inferify');


var strArray = "moshe david yalla haim".split(" ");

p_assert("An array of string", inferify(strArray), "string");
p_assert("An array of string", inferify(strArray), "date");




//Utility plain assert methods.
//####
//####
//####
