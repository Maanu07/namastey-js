// let & const declaration are hoisted ? yes...but in a different manner than variables declared with var 
// TDZ => 'temporal dead zone' for a variable declared with let and const is the amount of time from when the variables are hoisted till they are initialized with some value 
// variables declared using let and const are not stored in window object, they are stored in a different memory space 
// scope and memory space are different, space comes under scope => like global space and special reserved space for let and const variable
// Reference error ?
// Syntax error ?
// Type error ?
// strictness level => const > let > var
// How to avoid TDZ ? by shifting our variable declaration and initialization to top of our code, thus shrinking the TDZ for variables declared using let and const


let a;
const c = 1000; // we cannot reasign variables declared using const
console.log(a)
a=10;
var b=100;


