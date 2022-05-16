/* console.log(x)
console.log(getName)
getName()

var x = 7; //declaration + initialization
function getName(){
    console.log('Hi, my name is Manas...')
}

console.log(getName)
getName() */

// =============== Hoisting with arrow function ========================
console.log(firstName)
firstName()   // gives error 

var firstName = () =>{
    console.log("Manas")
}

// 1. Hoisting in JS allow us to use variables/functions before they have been declared
