var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
