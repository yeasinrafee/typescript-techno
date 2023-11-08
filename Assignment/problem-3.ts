// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

// Problem: 3
class Cat {
  constructor(public name: string, public species: string) {}
}
const isCat = (cat: Cat): void => {
  if (cat instanceof Cat) {
    console.log("yes, it's a cat");
  } else {
    console.log("no, it's not a cat");
  }
};

const cat1 = new Cat("Tom", "cat");
const cat2 = { name: "Doggy", species: "dog" };

isCat(cat1);
isCat(cat2);
