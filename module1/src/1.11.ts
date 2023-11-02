const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest"; // works only null and undefine values.
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1 }, { result2 });
