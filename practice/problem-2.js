// Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.
// Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.
var keyValuePairsArray = [
    ["id", 101],
    ["name", "Rafee"],
    ["isStudent", true],
];
var arrayToObj = function (array) {
    return array.reduce(function (finalObj, _a) {
        var key = _a[0], value = _a[1];
        finalObj[key] = value;
        return finalObj;
    }, {});
};
console.log(arrayToObj(keyValuePairsArray));
