// string
let myName: string = 'John';

// number
let myAge: number = 18;

// boolean
let hasHobbies: boolean = true;

// array
let hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // produces an error because the array is now an array of string

let hobbies2: any[] = ['Cooking', 'Sports'];
// hobbies2 = [100]; //
// hobbies2 = 100; // produces an error because it has to be an array

// tuples
let address: [string, number] = ['Superstreet', 99]; // two items: string, number

// enum (make numbers more expressive)
enum Color {
  Gray, // 0
  Green, // 1
  Blue // 2
};
let myColor: Color = Color.Green;

// any
let other;
other = 'hello';
other = 28

let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };