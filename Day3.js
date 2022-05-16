// We will learn how a JS code is executed 
// 1. A Global Execution Context is created 
// 2. Execution context is pushed into the call stack as soon as it is created 
// 3. Phase1 is executed i.e memory allocation 
// 4. Phase2 is executed i.e code execution 
// 5. For every function invocation a new local execution context is created 
// 6. As the function code executes completely the EC is removed from the call stack
// 7. At the end of program the global execution context is removed from the call stack


function a() {
    var age = 22;
    b();
    console.log('inside function a')
    function b() {
        var age = 23;
        c()
        console.log('inside function b')
        function c() {
            console.log(age)
            console.log('inside function c')
        }
    }
}

a()