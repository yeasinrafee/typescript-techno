{
  // Polymorphism

  class Person {
    getSleep() {
      console.log(`I'm sleeping for 8 hours per day.`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I'm sleeping for 7 hours per day.");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I'm sleeping for 6 hours per day.");
    }
  }

  const getSleepHours = (para: Person) => {
    para.getSleep();
  };

  const person = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepHours(person);
  getSleepHours(person2);
  getSleepHours(person3);

  //
}
