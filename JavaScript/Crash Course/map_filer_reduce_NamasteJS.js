// Map, filter, reduce are higher order fncs in JS.   ==> Functional Programming

const arr = [6,1,2,4,3,5]

function binary(x){
    return x.toString(2);
}

const output_ = arr.map(binary)
console.log(output_)

// We use map when we want to transform each element of a given array.
// We can see using map with three diff syntaxes below:

// Define fnc outside.
function double(x){
    return x*2
}
const output = arr.map(double)
console.log(output)

// Put fnc inside.
const output1 = arr.map(function double(x){
    return x*2 
})
console.log(output1)

// Arrow fncs.
const output2 = arr.map( (x) => x*2 )
console.log(output2)


// Filter
// Lets filter odd elements
function is_odd(x){
    return x%2;
}

const odd_out = arr.filter(is_odd)
console.log(odd_out)
// We can use above 3 types of code syntaxes for filter also.

// Reduce
// We use this when we want to get a single value out of an array.

// Ex_1: Sum of the array.
// Direct JS FUNCTION:

function findSum(arr){
    sum = 0
    for(let ele of arr){
        sum += ele
    }
    return sum
}

console.log(findSum(arr))

// curr ~ arr[i], acc ~ sum
// The function inside reduce is being executed over each element of array.
// The reduce function has 2 arguments: 1st one is a fnc. 2nd one is the initial value for accumulator.

const out = arr.reduce( function (acc, curr){
    acc = acc + curr
    return acc
}, 0 )
console.log(out)


function addHelp(acc, curr){  // acc ~ sum
    acc = acc + curr          // Note that at every call, we are just considering curr value & accum till this point.
    return acc
}
const out1 = arr.reduce( addHelp, 0 )
console.log(out1)


function maxHelp (acc, curr){   // acc ~ max
    if (curr > acc){
        acc = curr
    }
    return acc
}
const out2 = arr.reduce( maxHelp , 0 )
console.log(out2)

// Examples:
const users = [
    {firstname: "sanjay", lastname: "marreddi", age : 10 },
    {firstname: "swetha", lastname: "marreddi", age : 20 },
    {firstname: "mangadevi", lastname: "marreddi", age : 20 },
    {firstname: "satyanarayana", lastname: "marreddi", age : 32 },
]

const out_ = users.map(x => x.firstname + ' ' + x.lastname)
console.log(out_)

// Tricky reduce
// We need count of number of people with each age.

const out1_ = users.reduce(function(acc, curr){

    if (acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }

    return acc    // DONT FORGET THIS

}, {})

console.log(out1_)


// Tricky Filter.  ==> We are chaining these functions.

// First name of all people whose age < 30
const out2_= users.filter( x => (x.age < 30) ).map( x => x.firstname )   // We can do this with just "reduce".
console.log(out2_)
