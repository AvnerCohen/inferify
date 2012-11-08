//Send in an array (or single object) and return  back the common data type for the provided Object array.
module.exports = inferify;

//Redundant but used to clearly present data types supported.
var DATA_TYPES = {
    string: "string",
    date: "date",
    float: "float",
    integer: "integer",
    number: "number",
    boolean : "boolean"
};

function inferify(objArr) {

    var returnDataType = DATA_TYPES.string;
    //normalize to make inference more straight forward
    var strArray = normalizeArray(objArr);

    //Run tests for booleans
    var all_booleans = executeRegExp(strArray, /true|false|^$/);
    if (all_booleans) {
        return DATA_TYPES.boolean;
    }

    //Run test - INTEGERS
    var all_ints = executeRegExp(strArray, /^(\d)*$/);
    if (all_ints) {
        return DATA_TYPES.integer;
    }

    var all_floats = executeRegExp(strArray, /^([+-]?((([0-9]+(\.)+)|([0-9]*\.[0-9]+))?))$/);
    if (all_floats) {
        return DATA_TYPES.float;
    }

    return returnDataType;
}


function normalizeArray(objArr) {
    var arr = [];
    for (var i = 0; i < objArr.length; i++) {
       var value = objArr[i] || "";
        arr.push(value.toString().toLowerCase());
    }
    return arr;
}

function executeRegExp(objArr, regexp) {
    var fullmatch = false;
    for (var i = 0; i < objArr.length; i++) {
        fullmatch = regexp.test(objArr[i]);
        if (!fullmatch) break;
    }

    return fullmatch;
}