// let & const declaration are hoisted ? yes...but in a different manner than variables declared with var
// TDZ => 'temporal dead zone' for a variable declared with let and const is the amount of time from when the variables are hoisted till they are initialized with some value
// variables declared using let and const are not stored in window object, they are stored in a different memory space
// scope and memory space are different, space comes under scope => like global space and special reserved space for let and const variable
// Reference error ?
// Syntax error ?
// Type error ?
// strictness level => const > let > var
// How to avoid TDZ ? by shifting our variable declaration and initialization to top of our code, thus shrinking the TDZ for variables declared using let and const
// var has a global scope or function scope
// var can re-declared and updated (this is a problem with var that it can be re-declared)
// let can only be updated
// const can never be updated nor re-declared
// If we declare a object using const, we cannot directly re-initialize it but we can change its properties

// ============== OBJECT DECLARED USING CONST 😁 =======================
const greeting = {
  message: "say Hi",
  times: 4,
};
console.log(greeting);
greeting.message = "manas";
greeting.age = 22;
console.log(greeting);

// =============== PROBLEM WITH VAR 😑 ========================
var greeter = "hey hi";
var times = 4;
if (times > 3) {
  var greeter = "say Hello instead";
}
console.log(greeter); // "say Hello instead"

let a;
const c = 1000; // we cannot reasign variables declared using const
console.log(a);
a = 10;
var b = 100;
