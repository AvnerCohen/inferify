//Send in an array (or single object) and return  back the common data type for the provided Object array.
module.exports = inferify;

//Redundant but used to clearly present data types supported.
var DATA_TYPES = {
    string: "string",
    date: "date",
    float: "float",
    integer: "integer",
    number: "number"
};

function inferify(objArr) {

    var returnDataType = DATA_TYPES.string;
    //Conver to String, the simplest form of data in this respect
    var strArray = convertToString(objArr);

    //Run test - INTEGERS
    var all_ints = executeRegExp(strArray, /[\d]/);
    if (all_ints) {
        return DATA_TYPES.integer;
    }


    return returnDataType;
}


function convertToString(objArr) {
    var arr = [];
    for (var i = 0; i < objArr.length; i++) {
        arr.push(objArr[i].toString());
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