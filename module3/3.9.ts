{
  // Abstraction

  // Using Interface
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I'm starting the car.");
    }
    stopEngine(): void {
      console.log("I'm stopping the car.");
    }
    move(): void {
      console.log("I'm moving");
    }
  }

  const car = new Car();
  car.startEngine();

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Vehicle2 {
    startEngine(): void {
      console.log("I'm starting the car.");
    }
    stopEngine(): void {
      console.log("I'm stopping the car.");
    }
    move(): void {
      console.log("I'm moving");
    }
  }
  const car2 = new ToyotaCar();
  car2.startEngine();
  //
}
