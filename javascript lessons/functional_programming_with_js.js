// LESSON INTRO.5 - CREATING A SAMPLE FUNCTION
const foo = (name) => {
console.log(`Hello ${name}`);
}

foo("Renz");

// LESSON 1.1 - GOAL OF FUNCTIONAL PROGRAMMING 
// oop - java, c++, mql5 | apie (abstraction,polymorphism,inheritance,encapsulation)
// procedural prog lang - c 
// functional programmign - brings the precision of mathematics into progrmaming | e.g. f(x) = x + 5

// LESSON 1.2 - DECLARATIVE VS IMPERATIVE 
// declarative - what?
    // x is the sum of all the numbers in the array, divided by the length of the array
// imperative - how? 
    // set x = 0
    // x + array[0]
    // do step 2 until the end of array
    // divide x by the length of the array 

// CORE CONCEPTS OF FUNCTIONAL PROGRAMMING
// immutability 
    // cannot change value, variable is const | advantage is what if it's a large scale app, you don't know if you made some changes in the variable because you might forgot, this could lead to bugs and alot of headache
    // e.g. const x = 5; // cannot change the value of x
// separation of data and functions | no encapsulation like oop
    // data - objects in js (dictionary in python)
    // function - operation 
// object oriented to functional approach 
    // in oop, we could easily modify the data members if they are not private, in fnuctional programming we cannot modify it directly because the class is immutable
// first class functions 
    // we could create a function inside a variable, we could create array of function created inside the array, we could create a function inside a function , etc. this is what first class function is, apparently c++ does not have this feature, c++ has pure function

// LESSON 1.7 - ENSURING IMMUTABILITY - DOWNLOAD ESLINT 
// with const array, you cannot modify the array as a whole but you can modify each individual pieces, same with objects 
// e.g. modifying array as a whole const arr = [1,2,3]; arr = [3,2,1] | e.g. of modifying an element in an array arr[0] = 5; (this is allowed)

// LESSON 1.8 - INSTALLING ESLINT
// npm install --save-dev eslint
// npx eslint --init

// LESSON 2.1 - ARROW FUNCTIONS IN ES6
// ways to declare function
function foo (x,y) {

}

// function expression 
const foo = function (x,y) {

}

// arrow function expression 
const foo = (x,y) => { } // if bracket return must be explicit, if parenthesis the content would be the return, if brackets with no return then think of that as a void function | if one parameter then it could have no parenthesis, if none or >1 parameter then should have parenthesis  

// object arrow function
const foo = () => ({
    name: "Renz",
    age: 20
}); // here we're returning an object with arrow function, wrapped in parentheses are return (just like what i said above), and wrapped in nothing is still return

// LESSON 2.2 - FUNCTIONS AS DATA (THIS IS WHAT IT MEANS BY BEING A FIRST CLASS FUNCTIONS) - you treat functions just like they're string,objects,int
// making a function as a reference 
const func = () => console.log("Renz");

const abc = func; // now we could call abc as if it was func() by adding parenthesis, e.g. abc() 

// this function being a first class is very useful in let's say ternary operator
const sampleTern = true ? () => console.log("true") : () => console.log("false");
sampleTern(); // yes, ternary operator is a function 

const double = (x) => x*2;
const minusOne = x => x - 1;
const triple = x => x*3;

// array of functions // i don't think this is possible with different langauges like c++, i've never encountered this with diff language before
const arrayOfFunctions = [
    double, // we don't put parenthesis like double(), because if there was parenthesis that means we're referring to the result or return of the function
    minusOne,
    triple
];

var number = 42; // notice this is a var and not a const, that's because we wanted to modify its value
arrayOfFunctions.forEach( (func) => {
    return (number = func(number)) 
}); // think of forEach as a loop, at every loop it modifies variable number, since this is a var and not a let, every changes would be saved if this was a let changes would only be possible inside the scope of the forEach
console.log(number);

// LESSON 2.4 - PASSING FUNCTIONS AS ARGUMENTS 
// creatign a callback function

const add = (x,y) => x+y;

const foo = (func) => (
    func(2,3)
);

// passing the function add as a parameter and to be called later, callback functoin 
foo(add); 

// passing an anonymous function, this is what we always do
foo( (x,y) => x+y ); // useful when we only need the function at this specific use case 

// LESSON 2.5 - RETURNING FUNCTIONS , since functions are first class in js and we treat them like a variable, we could also return a function just like a variable 
const returnFunc = () => () => console.log("return this another function"); 

// above can be written like this
const returnFunc = function(){
    return (function () {
        console.log("return this another function");
    })
};

const foo = returnFunc(); // returnFunc is returning a function, and this would be like assigning that return function into this variable, making it a function expression thus making this variable foo a function
// it's like saying 
const foo = function () {
    console.log("return this another function");
}

// LESSON 2.7 - IMPLEMENT PRIVATE VARIABLES
// _varname - this means you should never directly use this variable outside the class
const me = {
    name: "Renz",
    age: 20,
    job: "swe" 
};

const Person = ({name, age , job}) => { // this function returns an object
    var _name = name;
    var _age = age;
    var _job = job;

    return ({
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: (newJob) => _job = newJob
    }); 
}

const renz = Person(me);
console.log(renz.getJob());
renz.setJob("developer");
console.log("after setting a new job");
console.log(renz.getJob()); // we could only access the object of person function returns, and the only property is getName which returns the name

// LESSON 2.8 - HIGHER ORDER FUNCTIONS 
// the single responsibility principle,  a very importance principle when writing a clean code
// states that each piece of code should have only one responsibility | e.g. if a piece of code requires you to name a function into 2 or more names then that's a sign to refactor 

// this function is performing two task, checking and returning x divided by y, this is a sign to refactor
const divide = (x,y) => {
    if (y === 0){
        console.log("Error: dividing by zero");
        return null; // this prevent returning undefined when dividing by zero  
    }
    return x / y;
}

// with higher order function you dont have to think how they work, you just have to know what they do 
// higher order function - think of this as the functions that calls the callback function or the wrapper of callback function | it is a function that accepts functions as parameters and/or returns a function | you use this to make an extra check into a function you passed, setup something before calling the function, provide arguments to the callback func
// fix code above by using a higher order function 
const divide = (x,y) => x/y; 
const secondArgumentIsntZero = (callback) => // return a function 
    (...args) => { // we're using spread operator, this means we're passing all of the arguments 
            if (y === 0){ // this is a piece of code i copied from the instructor, there's something wrong inhere ,y isn't declared yet 
                console.log("Error: dividing by zero");
                return null;
            }
            return callback(...args);
    }

const divideSafe = secondArgumentIsntZero(divide);
console.log(divideSafe(7,0));

// LESSON 3.1 - FUNCTIONAL JAVASCRIPTS - where higher order function is applied - e.g. array methods, array.map() array.forEach() | with higher order functions you focus on what things are, not how they are implemented

// LESSON 3.3 - ARRAY METHODS - MAP | THIS IS A HIGHER ORDER FUNCTION - now with higher order function we just really need to understand the what not on how they are implemented (this is already covered in js essential but let's recap in here) 
// map is useful when we want to convert an array of inches to array of centimeters | map loops through all of the pieces of the array and creates a copy, forEach also iterates thru each pieces but it does not create a copy 
// map returns something, forEach if we just want to iterate not returning something | you could think of this as for (var of collection) or for var in collection: in python 
// map doesn't modify the content of the original array it creates its own copy, again just like in for (var of collection)
const double = (x) => x * x;
const arr = [1,2,3];
console.log(arr.map(double)); // this owuld produce 2,4,6

// or we could use anonymous function
console.log(arr.map( (x) => ( // we could think of it as x of arr
    x * x // content of anon function would be on what we want for the arrays to happen
))); // this would produce 2,4,6 just like above 

// LESSON 3.4 - ARRAY FILTER METHOD - grab literals in the array that met the certain condition, syntax is same with map 
const numbers = [1,2,3,4,5,6];
const evenNumbers = numbers.filter( (x) => ( // 
    x % 2 === 0 // content would be the conditions to met for filtering 
));
console.log(evenNumbers);

//anoter example
const tempWords = [
    "hello",
    "America",
    "platform"
];

 const createLengthTest = minLength => // this returns a function
    word => word.length > minLenght; // and that function it returns, returns a boolean 

const longWords = words.filter(createLengthTest(5));
console.log(longWords);

// LESSON 3.4 - EVERY/SOME - returns true or false, every means everything must be true to return true | some is if one is true then it returns true
const arr = [1,2,3,4,5,6];
console.log(arr.every( (x) => x % 2 === 0 )); // since every number in arr is not even, this owuld return false 
console.log(arr.some( (x) => x % 2 === 0  )); // since some number in arr is even this would return true 

// useful example of every
const formValues = [
    "Renz",
    "Carillo",
    ""
]; 

const isNotEmpty = string => !!string; // emptry string is falsy, this means return only that is not empty or not falsy 
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);

// LESSON 3.5 - SLICING 
const numbers = [0,1,2,3,4,5];
console.log(numbers.slice(3,5)); // this owuld return 3,4,5, remember that slice only returns a copy not mutate them

// example good use of slicing - we can use slice() no argument to create copy 
const a = numbers.slice().reverse(); // slice() no argument would return a copy of the array then reverse them, this is useful since reverse mutate the original array, if we want to mutate a copy of the array then we use slice 

// LESSON 3.6 - SORTING - it's a bit different with string, use GOOGLE!!!!!!
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(-1)); // b-a for descending, i dont understand the callback function in here gugutom nako

// UNFINISHED - LESSON 3.7 - REDUCING - take an array of data then reduce it to a single value

// LESSON 3.8 - CHALLENGE: RECREATE MAP FUNCTION (look ma, i did it without googling)
const map = (arr,double) => {
    let doubledArr = [];
    for (const x of arr){
      total = double(x)
      doubledArr.push(total);
    }
    return doubledArr;
  }
  
  const arr = [1,2,3];
  
  const double = (x) => {
    return x * 2;
}
  
  console.log(map(arr,double));

// LESSON 4.2 - CURRYING AND PARTIAL APPLICATION - when one or more of the arugments that we call it with is almost always the same we use partial application

// partial application example
const add = (x,y,z) => x + y + z; // let's say we have this function, but we always use one argument as a fixed number, how to fix?

const addPartial = (x) => {
    return ( (y,z) => {
        return add(x,y,z);
        
    });
}

const add5 = addPartial(5)
console.log(add5(10,2)); // what we're doing with partial application is to have an argument automatically applied especially if this argument is always used 
console.log(add(5,10,2)); 

// you could take a deeper dive into adding partial, like this | this is now called as currying 
const add = (x,y,z) => x + y + z; // let's say we have this function, but we always use one argument as a fixed number, how to fix?

const addPartial = (x) => {
    return ( (y) => {
      return ( (z) => {
        return add(x,y,z);
      });
    });
}

const add5 = addPartial(5);
const add5and6 = add5(6); // partial application of two arguments
console.log(add5and6(7));
console.log(addPartial(5)(6)(7)); // you could also see it applied like this, now i know what this means 

// LESSON 4.3 - RECURSION - this may cause infinite loop if you don't set a break point | call its own function everytime, behaves like a for loop | used in fibonacci sequence
const countDown = (x, max) => {
    // break point, if it reaches this point stop the recursion
    if (x < max){
        return
    }
    console.log(x);
    countDown(x-1,max); // recursion, calling itself everytime
};

countDown(5,0);

// UNFINISHED - LESSON 4.4 - FUNCTIONS AS OBJECTS - call, apply and bind are only used when a function has 'this' keyword, not mostly used in functional programming so imma leave it unfinished here 
const add = (x,y,z) => x + y + z;
console.log(add.call());

// LESSON 5.1 - CHALLENGE: CONVERT ARRAY - write a function that takes an array of strings and produce an object that has a candidate number - i failed
const electionVotes = [
    "Renz", "Carlo", "Zabdiel",
    "Genesis", "Enchong", "Ken",
    "Renz","Renz","Renz", "Ken"
];

const tallyCandidates = () => {
    return electionVotes.reduce( (acc,name) => ({
        ...acc, [name]: acc[name] ? acc[name] +1 : 1,
    }), {});
};

console.log(tallyCandidates());

// uUNFINISHED - LESSON 5.2 - CHALLENGE: | i'll get back onto these challenges after i master leetcode 



// CONCLUSION ON ARRAY METHODS - content of these anonymous functions is on what you want to happen or the condition - e.g. x * x (used for map) or x % 2 === 0  (used for filter,every,some)
// remember that in higher order function there's no need to understand the how, only the what it does
// map - apply function to each element, do something on each of peice of the array then return a copy of original array with modified values ( if there are any )  | e.g. double them all rray 
// filter - only show pieces of the array that met the condition | e.g. show only the even numbers 
// every - return true if every pieces of the array met your condition | e.g. your condition is even, every literal has met the condition so return true
// some - return true if one of the pieces of the array met your condition | e.g. your condition is even, one of the array literals has met the condition so return true
// slicing (exception - not a higher order function)- slice thru the array, e.g. array is 1,2,3,4,5 and array.slice(2,4) this would return 3,4,5 because it started with index element 2
// reduce - reduce an array to a single data | e.g. get the average of array, add every value of array into a single value

// this mutates the array, they do not create a copy, they modify the array itself
// push - add value at the end
// pop - remove the value at the end
// reverse - reverse the array
// sort - organize the order of array 





// LESSON X.1 - NULL AND UNDEFINED
// null doesn't come on its own, it is always stated, e.g. return null | this means it has no value
// undefined is an error because it wasn't defined yet, everything is undefined until you define it | e.g. let a   console.log(a)

// LESSON X.2 - JS SPREAD OPERATOR - used when you want to pass a collection piece by piece
// you can use this in three places, function calls, array literals, object literals 
// example use case (array literals), we could also do this with string since string is just an array of characters:
const temperatures = [1,3,4.2,52.3];
Math.min(temperatures); // this would produce an error since we're passing the array as a whole not piece by piece
// to fix error above, add spread operator
Math.min(...temperatures); // instead of passing it as a whole, you now pass it one by one 

// example use case (object literals);
const obj = {
    abc: 1,
    def: 2
}
console.log(...obj); // again, it's like we're passing the content of object one by one 

// useful when concatenating the content of two arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,...arr2]; // this would produce [1,2,3,4,5,6]


// LESSON X.3 - LITERALS - thse are the values you provide in a variable,object,array,etc. | e.g. const a = 5; // 5 is a numeric literal

// LESSON X.4 - REST OPERATOR 
const foo = (...arr){ // think of this as arr = [5,2,3,4] | diff with spread is that spread makes the collection piece by peice while the rest makes the piece by piece into collection 
    let total;
    for (x of arr){
        total += x;
    }
    console.log(total);
}
foo(5,2,3,4);

// LESSON X.5 - !! DOUBLE EXCLAMATION MARK
// Converts anything to boolean. 

!!false === false
!!true === true

!!0 === false
!!1 === true

!!parseInt("foo") === false // NaN is falsy
!!-1 === true               // -1 is truthy
!!(1/0) === true            // Infinity is truthy

!!"" === false              // empty string is falsy
!!"foo" === true            // non-empty string is truthy
!!"false" === true          // ...even if it contains a falsy value

!!window.foo === false      // undefined is falsy
!!null === false            // null is falsy

!!{} === true               // an (empty) object is truthy
!![] === true               // an (empty) array is truthy;

// DEBUGGING JAVASCRIPT
// LOOK AT CALL STACK, ADD console.log("this works n");
// FLOW IN CREATING CODE - CREATE UGLY ASS CODE OR NOT IF YOU CAN, THEN JUST REFACTOR IT AFTERWARDS, APPLY THESE CONCEPTS WHEN REFACTORING: HIGHER ORDER FUNCTION, CALLBACK, CURRYING AND PARTIAL PAPLICATION, RECURSION, FUNCTIONS AS OBJECTS