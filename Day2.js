console.log(x)           // undefined
console.log(getName)    // function body
getName()               // prints 'Hi, my name is Manas...'

var x = 7;              // declaration + initialization
function getName(){
    console.log('Hi, my name is Manas...')
}                       //function declaration

console.log(x)          // 7
console.log(getName)    // function body
getName()               // prints 'Hi, my name is Manas...'

// =============== Hoisting with arrow function ========================
console.log(firstName)      // undefined
firstName()                 // gives error 

var firstName = () =>{
    console.log("Manas")
}

// 1. Hoisting in JS takes all variables/functions declaration to the top of the scope and initialize variables with undefined and functions with the function body..
