"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var NewPerson = /** @class */ (function () {
    function NewPerson() {
        this._firstname = '';
    }
    Object.defineProperty(NewPerson.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstname = value;
            }
            else {
                this._firstname = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return NewPerson;
}());
var person = new NewPerson();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
