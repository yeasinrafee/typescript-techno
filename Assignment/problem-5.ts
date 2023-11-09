// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

// Problem: 5
interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: number;
}

type CarAndDriver = Car & Driver;
const carAndDriver = (car: Car, driver: Driver): CarAndDriver => {
  return { ...car, ...driver };
};

const car: Car = {
  make: "Honda",
  model: "civic",
  year: 2022,
};
const driver: Driver = {
  name: "Rafee",
  licenseNumber: 12234456779,
};
console.log(carAndDriver(car, driver));
