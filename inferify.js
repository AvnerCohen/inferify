//Send in an array (or single object) and return  back the common data type for the provided Object array.
module.exports = inferify;

//Redundant but used to clearly present data types supported.
var DATA_TYPES = {
    string: "string",
    date: "date",
    float: "float",
    integer: "integer"
}

function inferify(objArr) {

    var returnDataType = DATA_TYPES.string;
    //Conver to String, the simplest form of data in this respect
    var strArray = convertToString(objArr);



return returnDataType;
}


function convertToString(objArr) {

    var arr = [];
    for (var i = 0; i < objArr; i++) {
        arr.push(objArr[i].toString());
    }
    return arr;

}