// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

// Problem: 1
type Data = string | number;
const lengthOrSquare = (data: Data): Data => {
  if (typeof data === "string") {
    return data.length;
  } else {
    return data * data;
  }
};
console.log(lengthOrSquare("12345"));
console.log(lengthOrSquare(5));
