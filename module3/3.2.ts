{
  //
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hours: number) {
      console.log(`${this.name} sleeps for ${hours} in a day`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Mr. Rafee", 22, "Dhaka");

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getSleep(hours: number) {
      console.log(`${this.name} sleeps for ${hours} in a day`);
    }
    takeClass(classHours: number) {
      console.log(`Mr. ${this.name} takes ${classHours} hours of class`);
    }
  }
  const teacher = new Teacher("Yeasin", 46, "Uttara", "Professor");
  //
}
