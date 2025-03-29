// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usage
  const cat = new Cat("Sasha", "female");
  console.log(cat.speak()); // Sasha says meow!
  
  const dog = new Dog("Rufio", "male");
  console.log(dog.speak()); // Rufio says woof!
  
  const bird = new Bird("Pablo", "male");
  console.log(bird.speak()); // It's me! Pablo, the parrot!
  
  const bird2 = new Bird("Mable", "female");
  console.log(bird2.speak()); // Mable says squawk!
  