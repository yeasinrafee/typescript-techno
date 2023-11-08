// Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.
// Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.
var addNumbers = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (sum, curNum) { return (sum += curNum); }, 0);
};
console.log(addNumbers(23, 34, 65, 43, 45, 8));
