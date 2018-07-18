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