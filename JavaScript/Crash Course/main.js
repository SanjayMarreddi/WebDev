console.log("Hello from main.js")

// This is a comment in JavaScript


// Variables

let age = 25 
console.log(age)

// const variables must be initialised while declaring. They cant be changed later also.
const salary = 80000
console.log(salary)


// Datatypes
// Primitive: String, Number, Boolean, Undefined, Null, [ BigInt, Symbol ] => Advanced

const name = "Sanjay";
const language = 'JavaScript'
const college = `IIT Goa`

const total = 0
const PI = 3.14

const isPrimaryNo = true
const isNewUser = false

// If value is not defined, type is undefined.
let result
console.log(result)

const res =  undefined  // This also works

const data = null   // NULL represents empty or Unknown values. To initialiase unknown values, we should use this in practise. 


// Non Primitive: Objects => complex datatype  => key value pairs.
// It is a collection of values

// property or key can be either strings / symbol datatype. Value can be any datatype. If key is a valid JS name, '' are not needed.
// property or key : value
// The below syntax is called as "object literal". It is one way of storing a collection of data.
const person = { 
    'firstName' : 'Bruce',
    'lastName' : 'Wayne',
    'age' : 30
}

console.log(person.firstName)
console.log(person.age)

// Array type.
const oddNumbers = [ 1, 3, 5, 7, 9 ]
console.log(oddNumbers[0])
console.log(oddNumbers[3])

// JS is a dynamically typed languaged.
let a = 10
a = "sanjay"
a = true
console.log(a)


// Operators :-

// Assignment
let x = 10

// Arithmetic
let  y = 5
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
console.log(++x) // pre increment


// Comparison
// console.log(x >= y)
// console.log(x == y)
// console.log(x === y)  // compares not just value, but also datatype
console.log(x !== y)  // read more about this.

// Logical

const isvalid = x > 8 && 8 > y   // AND 
console.log(isvalid)

// OR : ||
// NOT : !
const isv = true
console.log(!isv)

// String operators
console.log('Bruce ' + 'Wayne') // concatenation

// Ternary operator
const isEven = 10 % 2 == 0 ? true : false

// Type Conversions
// Implicit: Type coercion : JS automatically converts

console.log(2 + '3')     // 23
console.log(true + '3')  // true3
console.log('4' - '2')   // 2
console.log('sanjay' - 'marreddi') // Not a Number
console.log('5' - true)   // 4
console.log('5' - false)  // 5
console.log('5' - null)   // 5
console.log(5 + undefined) // NaN 

// Note that in the terminal, string types are being printed in white color where as other types are in yellow.

// Expliclt: Manual conversion
console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))
console.log(parseInt('5'))
console.log(parseFloat('3.45'))

console.log(String(500));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log((500).toString())  // Wont work for null & undefined.

console.log(Boolean(10))  // null, undefined, NaN, 0, '' : returns false. Rest all gives true.
console.log(Boolean('  '))
console.log(Boolean(''))

// Equality

// == allows coercion
// === doesnot allow coercion

const var1 = 'test'
const var2 = 'test'
console.log(var1 == var2)
console.log(var1 === var2)  // both returns true

const var3 = 10
const var4 = '10'
console.log(var3 == var4)   // true since coercion is done & then compared.
console.log(var3 === var4)  // false. Its more strict. no implicit conversion.

// strange coercion as discussed earlier. As beginners, it is recommended to use ===
const var5 = 0
const var6 = ''
console.log(var5 == var6)  // Gives true though they are not equal.
console.log(var5 === var6)
// The similar thing happens for all pairs of combinations that will be coerced to same value in case of  ==.

// conditional statements. if, else, else if, switch
const num = 0
if (num > 0){
    console.log("positive")
}
else{
    console.log("negative")
}

if (num > 0){
    console.log("positive")
}
else if (num == 0){
    console.log("zero");
}
else{
    console.log("negative")
}

// switch is an alernative when Little code in each condition & more conditions 
const color = 'red'
switch (color) {  // evaluates the expression inside ()
    case 'red':   // checks if this value matches the expression. 
        console.log('Color is red')
        break;
    
    case 'blue':
        console.log('Color is blue')
        break;
    
    case 'green':
        console.log('Color is green')
        break;

    default:
        console.log("Not a valid color")
        break;
}

// Looping code : for, while, do while, for of

for(let i = 1; i <= 5; i++){
  console.log('iteration: ' + i)
}

let i = 1
while(i <= 5){
    console.log('iteration using while ' + i)
    i++;
}

let j = 6
do{
    console.log('iteration using do while ' + j)
    j++;
} while(j <= 5)

const arr = [1, 2, 3, 4, 5]
for(const num of arr){      // `for of` suits collection of data. Note that inside `for of` we can use `let` for variable num also.
    console.log('iteration using for of ' + num)
}

// functions
// syntax:  
// function name(par1, par2, par3){
//     // code to be executed.
// }

function greet(name){
    console.log("Good morning! " + name)
}

// calling the function.
greet('sanjay')
greet('marreddi')

function add(num1, num2){
    return num1 + num2
}

const add_res = add(1,2)
console.log(add_res)

// arrow functions: diff syntax : shorter
const arrowAdd1 = (num1, num2) => {
    return num1 + num2
}

// if we have just 1 statement, we can omit {} & return.
const arrowAdd = (num1, num2) => num1 + num2
console.log(arrowAdd(3,5))

const add5 = num => num + 5

const mynum = 100  // global scope. can be accessed inside if type blocks & inside functions.

// scope : block, function, global
if (true){
    const myname = 'sanjay'   // block scope. cant be accessed outside the if block.
    console.log(mynum)
}


function test(par1){
    const myname = 'sanjay'  // function scope. cant be accessed outside the function.
    console.log(mynum)
}

// Other scope concepts are similar to c++
// Note that we dont have ; at the end of statements.
