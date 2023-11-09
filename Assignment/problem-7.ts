// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

// Problem: 7
const findFirstOccurrence = <T>(arr: T[], element: T): number => {
  const index = arr.indexOf(element);
  if (index >= 0) {
    return index;
  } else {
    return -1;
  }
};

console.log(findFirstOccurrence([1, 2, 3, 4, 3, 2, 5], 1));
console.log(
  findFirstOccurrence(["apple", "banana", "orange", "banana", "mango"], "apple")
);
console.log(findFirstOccurrence([1, 2, 3, 4, 5], 6));
