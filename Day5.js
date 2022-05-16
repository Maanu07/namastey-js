// Scope, Scope Chain & Lexical Environment 

// 1. Scope is the area inside our code where we can access a variable/function
// 2. Scope chain is the chaining of lexical environment 
// 3. Lexical Environment of a execution context is its local memory + the lexical environment of its parent 


function a(){
    var b = 100;
    c();
    function c(){
        console.log(b)
    }
}

a();
c()   // this will give errror since function c is not in the scope 