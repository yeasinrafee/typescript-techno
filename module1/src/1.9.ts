{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };
  const student1: Student = {
    name: "Rafee",
    age: 21,
    gender: "male",
    contactNo: "345354",
    address: "Dhaka",
  };
  const student2: Student = {
    name: "Yeasin",
    age: 22,
    gender: "male",
    address: "Tangail",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Yeasin";
  const isAdmin: IsAdmin = false;

  // Type Alias in Function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
