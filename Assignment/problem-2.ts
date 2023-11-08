// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

// Problem: 2
type Address = {
  city?: string;
  street?: string;
};
interface Person {
  address?: Address;
  phone?: number;
}
const getAddressCity = (para: Person): string | undefined => {
  return para?.address?.city;
};

const person: Person = {
  address: {
    city: "Uttara, Dhaka",
    street: "Azampur, Kachabazar",
  },
  phone: 123456789,
};
console.log(getAddressCity(person));
