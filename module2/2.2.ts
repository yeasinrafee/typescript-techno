{
  //
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Rafee",
    age: 100,
    role: "CEO",
  };

  type Roll1 = number[];
  const roll: Roll1 = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [1, 2, 3, 4, 5];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
