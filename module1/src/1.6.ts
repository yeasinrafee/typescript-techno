function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(2, 4);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Method
const Holyuser = {
  name: "rafee",
  balance: 0,
  addBalance(balance: number): string {
    return `My current balance is ${this.balance + balance}`;
  },
};

// type in callback function
const arr: number[] = [2, 3, 4];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
