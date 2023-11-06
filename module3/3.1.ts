{
  // oop -class
  class Animal {
    // Using parameter properties:
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} makes ${this.sound}`);
    }
  }

  const dog = new Animal("Germal Shepard", "dog", "Ghew Ghew");
  const cat = new Animal("Persian", "cat", "Mew Mew");

  dog.makeSound();
  cat.makeSound();
  //
}
