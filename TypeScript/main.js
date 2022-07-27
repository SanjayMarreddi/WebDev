"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'hello world!!';
console.log(msg);
// Variable declarations
// let & const are used here. They don't allow repeated usage of same variable name, have block scoping too. SAME AS JS.
// Variable Types
var isBeginner = true;
var total = 0;
var name = 'Sanjay';
// name = true;  This creates an error. It does Static Type checking here.
// 2nd advantage of having types defined is that, VSCODE Intellisense, can give appropriate methods depending upon types. Try name. and total. to see!
// In TS, We can use template strings. They can span multiple lines & have embedded expressions.
var sentence = "My name is ".concat(name, "\nI am a beginner in TS");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myname = undefined;
// arrays : Two syntax
// Same type values
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Order & size of the array is fixed. This is called a Tuple. In below example, size = 2. But different type elements can be used.
var person1 = ['Chris', 22];
// enum type. This enum for having friendly code.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // enum values map from 0 by default.
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log(c1);
// Any type : We use if we dont know which type it is.
var randomval = 10;
randomval = true;
randomval = "Sanjay";
// The below snippet doesnt raise error due to "any"
// let myvar : any = 10
// console.log(myvar.name)
// myvar()
// myvar.toUpperCase()
// Now lets study unknown type
// Below one will show error
// let myvar1 : unknown = 10
// console.log(myvar1.name)
// myvar1()
// myvar1.toUpperCase()
var myvar1 = 10;
function hasName(obj) {
    return !!obj && typeof obj == "object" && "name" in obj;
}
if (hasName(myvar1)) {
    console.log(myvar1.name);
}
// ( myvar1 as string ).toUpperCase()
// Type Inference.
// Note : Even in TS, specifying types is optional.
var a;
a = 10;
a = true;
var b = 20;
// b = true  // But this line shows error due to type inference done by ts as it assigned b as number type.
// Note that its always advised to assign types since ts might not be able to do in all cases too accurately?
// other feature of ts. We can specify union of types to variables. It even gives Intellisense support.
var multi_type;
multi_type = 20;
multi_type = true;
// Functions in TS
function add(n1, n2) {
    return n1 + n2;
}
// Return type can be specified after : It is optional.
function add1(n1, n2) {
    return n1 + n2;
}
add1(3, 4);
// add1(3)       // Fails
// add1(5, '10') // Fails
// Optional parameters : n2 is made optional.
// We can have any number of optional parameters. But all the optional parameters should be present after all the required parameters.
function add2(n1, n2) {
    if (n2)
        return n1 + n2;
    else
        return n1;
}
add2(5, 10);
add2(5);
// Default parameters
function add3(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
console.log(add3(5, 10));
console.log(add3(5));
// Interfaces
// Function taking objects as parameters.
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Sanjay', lastName: 'Marreddi'
};
// Short code using interface as type
function fullName1(person1) {
    console.log("".concat(person1.firstName, " ").concat(person1.lastName));
}
var p1 = {
    firstName: 'Sanjay', lastName: 'Marreddi'
};
fullName(p1);
// Classes
// Plane JS dont have this approach. But TS has this OOPS concept & allows inheritance.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Sanjay');
console.log(emp1.employeeName);
emp1.greet();
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manager_name) {
        return _super.call(this, manager_name) || this; // calling the super class construtor to initialize employeeName property
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Marreddi');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Access Modifiers
// By default all are public. Accessible everywhere.
// private: Only inside the class, they are accessible. 
// protected: Inside class & derived classes, they are accessible.
