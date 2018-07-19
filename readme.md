# Understanding Typescript

I have created this repo to learn and experiment with TypeScript following
along an online course.

There are exercise files with solutions stored in `/src/exercises` folder.


## What is TypeScript

Typescript is kind of a wrapper around JS that provides new features such as
generics, interfaces, types, etc and is compiled down to javascript.

In Typescript declaring a variable with a value will automatically assign type
to it, so that you can no longer reassign a value of a different type to that
variable.

```js
let num = 18; // equivalent to: let num: number = 18
num = 'hello'; // produces an error
```

If you don't declare a variable, then typescript will assign type `any`.

```js
let name; // equivalent to: let name: any
name = 'John';
name = 29;
```

If you declare your variable with a value of `null` initially, then it will
become of type `null` and you won't be able to change the value.
```js
let test = null; // equivalent to: let test: null
test = 'John';  // produces an error
```


## Types

At a basic level there are the following types:

- String: 'John', 'Car'
- Number: 27, 27.5 (in typescript no differentiation between integer and float)
- Boolean: true, false
- Arrays: array of number, array of string, array of any ...
- Enum
- Void
- Never

### Examples

```js
// string
let myName: string = 'John';

// number
let myAge: number = 18;

// boolean
let hasHobbies: boolean = true;

// array
let hobbies: string[] = ['Cooking', 'Sports'];
let numbers: number[] = [10, 23, 20];

// tuples
let address: [string, number] = ['King St', 10]; // two items: string, number

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

// functions
function myName(): string {
  return myName;
}

// void - nothing to be returned
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
myMultiply();

// objects
// once object is created, keys and types of values are saved
let userData = {
  name: 'John',
  age: 18
};

let otherData: { name: string, age: number } = {
  name: 'Alex',
  age: 32
};

// complex object
let complex: {data: number[], output: (all: boolean) => []} = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
```