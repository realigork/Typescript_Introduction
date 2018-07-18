"use strict";
// string
var myName = 'John';
// number
var myAge = 18;
// boolean
var hasHobbies = true;
// array
var hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // produces an error because the array is now an array of string
var hobbies2 = ['Cooking', 'Sports'];
// hobbies2 = [100]; //
// hobbies2 = 100; // produces an error because it has to be an array
// tuples
var address = ['Superstreet', 99]; // two items: string, number
// enum (make numbers more expressive)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
;
var myColor = Color.Green;
// any
var other;
other = 'hello';
other = 28;
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
