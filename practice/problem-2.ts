// Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

// Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.

const keyValuePairsArray: [string, any][] = [
  ["id", 101],
  ["name", "Rafee"],
  ["isStudent", true],
];

const arrayToObj = <T extends string, U>(array: [T, U][]): Record<T, U> => {
  return array.reduce((finalObj, [key, value]) => {
    finalObj[key] = value;
    return finalObj;
  }, {} as Record<T, U>);
};

console.log(arrayToObj(keyValuePairsArray));
