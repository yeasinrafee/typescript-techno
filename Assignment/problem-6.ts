// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

// Problem: 6
const sumOfNumbers = (value: unknown): void => {
  const isArrayOfNumbers = (value as number[]).every(
    (number) => typeof number === "number"
  );
  if (Array.isArray(value) && isArrayOfNumbers) {
    const sum = (value as number[]).reduce((sum, number) => sum + number, 0);
    console.log(sum);
  } else {
    console.error("Error: Invalid input. Provide an array of numbers.");
  }
};
sumOfNumbers([1, 2, 3, 4, 5]);
