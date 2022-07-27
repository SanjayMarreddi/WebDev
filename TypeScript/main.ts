export {}
let msg = 'hello world!!'
console.log(msg)

// Variable declarations
// let & const are used here. They don't allow repeated usage of same variable name, have block scoping too. SAME AS JS.

// Variable Types
let isBeginner: boolean = true
let total: number = 0
let name: string = 'Sanjay'

// name = true;  This creates an error. It does Static Type checking here.
// 2nd advantage of having types defined is that, VSCODE Intellisense, can give appropriate methods depending upon types. Try name. and total. to see!

// In TS, We can use template strings. They can span multiple lines & have embedded expressions.
let sentence: string = `My name is ${name}
I am a beginner in TS`

console.log(sentence)

let n: null = null
let u: undefined = undefined

let isNew: boolean = null
let myname: string = undefined

// arrays : Two syntax
// Same type values
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

// Order & size of the array is fixed. This is called a Tuple. In below example, size = 2. But different type elements can be used.
let person1: [string, number] = ['Chris', 22]

// enum type. This enum for having friendly code.
enum  Color { Red, Green, Blue }   // enum values map from 0 by default.
let c: Color = Color.Green
console.log(c)

enum  Color1 { Red = 5, Green, Blue } 
let c1: Color1 = Color1.Green
console.log(c1)

// Any type : We use if we dont know which type it is.
let randomval : any = 10
randomval = true
randomval = "Sanjay"

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

let myvar1 : unknown = 10

function hasName(obj: any) : obj is {name: string}{
    return !!obj && typeof obj == "object" && "name" in obj 
}

if (hasName(myvar1)){
    console.log(myvar1.name)
}

// ( myvar1 as string ).toUpperCase()


// Type Inference.
// Note : Even in TS, specifying types is optional.
let a
a = 10
a = true


let b = 20
// b = true  // But this line shows error due to type inference done by ts as it assigned b as number type.
// Note that its always advised to assign types since ts might not be able to do in all cases too accurately?


// other feature of ts. We can specify union of types to variables. It even gives Intellisense support.
let multi_type : number | boolean
multi_type = 20
multi_type = true


// Functions in TS


function add(n1, n2){  // JS
    return n1 + n2
}

// Return type can be specified after : It is optional.
function add1(n1: number, n2: number) : number {  // TS
    return n1 + n2
}

add1(3, 4)
// add1(3)       // Fails
// add1(5, '10') // Fails


// Optional parameters : n2 is made optional.
// We can have any number of optional parameters. But all the optional parameters should be present after all the required parameters.
function add2(n1: number, n2?: number) : number {  // TS
    if (n2) 
        return n1 + n2
    else
        return n1
}

add2(5, 10)
add2(5)

// Default parameters
function add3(n1: number, n2: number = 10) : number {  // TS
   return n1 + n2
}

console.log( add3(5, 10) )
console.log( add3(5) )

// Interfaces

// Function taking objects as parameters.
function fullName(person: {firstName: string, lastName: string}){
    console.log( `${person.firstName} ${person.lastName}`);
}

let p =  {
    firstName: 'Sanjay', lastName: 'Marreddi'
}

// fullName(p)

// In the above code since object has just 2 properties, code is fine. but if we have multiple properties, code becomes unreadable due to large parameters.
// So we have interfaces to deal with this issue. We define interface for our object and use it as a type for further usage in functions.
// The same interface can be used as type in multiple functions. See below example:

interface Person{
    firstName : string,
    lastName : string,
    middleName? : string   // We an even have an optional property. This kind of feature is helpful in forms where some fields are comp. & some are not.
}

// Short code using interface as type
function fullName1(person1 : Person){
    console.log( `${person1.firstName} ${person1.lastName}`);
}

let p1 =  {
    firstName: 'Sanjay', lastName: 'Marreddi'
}

fullName(p1)

// Classes
// Plane JS dont have this approach. But TS has this OOPS concept & allows inheritance.

class Employee{
    employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Sanjay')
console.log(emp1.employeeName)
emp1.greet()


// Inheritance
class Manager extends Employee{
    constructor(manager_name: string){
        super(manager_name)  // calling the super class construtor to initialize employeeName property
    }
    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`)
    }
}

let m1 = new Manager('Marreddi')
m1.delegateWork()
m1.greet()
console.log(m1.employeeName)


// Access Modifiers
// By default all are public. Accessible everywhere.
// private: Only inside the class, they are accessible. 
// protected: Inside class & derived classes, they are accessible.
