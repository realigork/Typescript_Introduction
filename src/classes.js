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
var Person = /** @class */ (function () {
    // passing arguments that are not declared above, will declare them automatically
    function Person(name, username) {
        this.username = username;
        this.type = ''; // only accessible within this object
        this.age = 27; // also private, but accessible by children
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Cool');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person2 = new Person('Alex', 'alex');
console.log(person2); // you cannot access type, age, setType from here
// Inheritance
// Child classes can access protected properties, but not private (not inherited)
var Alex = /** @class */ (function (_super) {
    __extends(Alex, _super);
    function Alex(username) {
        var _this = _super.call(this, 'Alex', username) || this;
        _this.age = 31;
        return _this;
    }
    return Alex;
}(Person));
var alex = new Alex('alex');
console.log(alex);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);
