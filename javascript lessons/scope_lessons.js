// LESSON 1.2 - SCOPE 
// think of scope as the brackets, anything within the brackets is equal to saying anything within the scope 
// if it is not declared inside of any brackets then that has a global scope 

// LESSON 1.3 - CLOSURES - closure is an inner function inside a function that has an access to the parent function's variables/data members
// closures are a great way to use variables without making them global

const foo = () => {
    let sampleVar = 5;
    return {
        func: () => {
            console.log(sampleVar); // we have access to sampleVar
        }
    } 
}

const a = foo();
a.func(); // we're lowkey accessing a private variable from foo

// LESSON 1.4 - SCOPES - local,global,block

// LESSON 1.5 - HOISTING - default behavior of moving all the declarations at the top of the scope before execution
// only declaration gets hoisting not initialization
// declaration - creating a variable without assigning a value
    sample = 5; // look we have assigned a value first before declaring it, this is fine since declaration is hoisted
    var sample;
// initialization - creatign a variable and assigning a value at the same time

// LESSON 1.6 - GLOBAL AND LOCAL VARIABLES - variables declared outside a function, can be used by any functions or classes
const obj = { // this object is global scope, can be used anywhere
    a: 1,
    b: 2,
}

let z = 3; // globally scoped variable

const foo = () => { // globally scoped function
    let x = 1; // locally scoped variable, can only be used inside the bracket or scope
    z = 5; // this is not considered as a locally scoped variable, this variable has been declared as a global thus we're changing the value of it globally
    // now if we use z anywhere else even outside of this function, the value of it would be 5
}

// LESSON 4.1 - BLOCK-SCOPED VARIABLES - the variables only belong to the brackets or scope they belong in 
// let and const are block scoped variable | var is a function scoped
const foo = () => {
    let sampleVar = 1;
    if (true){
        let sampleVarVar = 2; // this variable is only available to its scoped or inside this if statement | block scoped variable
    }
}
