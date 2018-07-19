class Person {
  name: string;
  private type: string = ''; // only accessible within this object
  protected age: number = 27; // also private, but accessible by children

  // passing arguments that are not declared above, will declare them automatically
  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Cool');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

let person2 = new Person('Alex', 'alex');
console.log(person2);  // you cannot access type, age, setType from here


// Inheritance
// Child classes can access protected properties, but not private (not inherited)
class Alex extends Person {
  constructor(username: string) {
    super('Alex', username);  // calls constructor of parent class
    this.age = 31;
  }
}

const alex = new Alex('alex');
console.log(alex);


// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default'
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);