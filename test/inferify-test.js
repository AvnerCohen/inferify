var p_assert = require("./plain-assert");
var inferify = require('../inferify');


var strArray = "moshe david yalla haim".split(" ");

p_assert("An array of strings", "string", inferify(strArray));


var intArray = [1,5,6,3,5,7,11111];

p_assert("An array of integers", "integer", inferify(intArray));
