{
  // Array
  let fruits: string[] = ["Mango", "Apple", "Orange", "Banana"];
  let nums: Array<number> = [56, 34, 24, 87]; // using generic type

  // Multi type array
  let fruits2: (string | number)[] = ["Mango", 45, "apple"];
  let others: Array<string | number> = [56, 23, "Rafee", "007", "Yeasin", 2120];

  console.log(others);
}
