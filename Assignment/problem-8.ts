// Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const totalCost = (carts: Product[]): number => {
  let cost: number = 0;
  carts.forEach((cart) => (cost += cart.price * cart.quantity));
  return cost;
};

const shoppingCart: Product[] = [
  { name: "Item 1", price: 20, quantity: 2 },
  { name: "Item 2", price: 20, quantity: 3 },
  { name: "Item 3", price: 0, quantity: 1 },
];

const talCost = totalCost(shoppingCart);
console.log("Total Cost:", talCost);
