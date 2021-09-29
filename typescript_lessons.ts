// LESSON INTRO.2 - STATIC VS DYNAMIC
/*
dynamic
    -duck typing: if my code expects an object that has a method called quack, and i get an object called quack, then that's already good enough for me
    -error are only captured when the application is running

static
    -aim to catch development errors before the code is even executed
    -much more rigid

// LESSON INTRO.4 - SETTING UP TYPESCRIPT
// step 1: check if you have node installed: npm -v
// step 2: npm install -g typescript // installing typescript globally
// step 3: confirm installation: in terminal, type tsc

// LESSON 1.1 - ADDING TYPESCRIPT TO AN EXISTING APPLICATION
// create tsconfig.json file then type this
{ 
    "compilerOptions": {
    "target": "es5",
    "outDir": "dist"
    }
}
// now everytime we create a ts file it creates a js file and put it into dist directort

// LESSON 1.2 - JAVASCRIPT DATATYPES THAT WE COULD USE IN TYPESCRIPT
/*
string
boolean
number
bigInt
null
undefined
symbol
object
HTMLElement
any
*/

// using typescript in action (variable) | (expression)
const tempVar: string = "Hello World"; // in an expression we always use ': datatype' after the variable, use the datatype above, you already know what datatype to use you've done c++ and java already

// using typescript in action (function) | (declaration)
function foo(x:string):void { // void means return nothing just like in c++ 
    console.log(x);
}

// explicitly stating what should be returned
function tempFoo(y:number): { // we want it to return an object that has these properties | this is also called as inline type
    displayName: string;
    age: number
} {
    return null; // we need to specify a return, we'll just return null for a moment
}

// LESSON 1 - BASIC SYNTAX OF TYPESCRIPT
// LESSON 1.3 - UNDERSTANDING TYPE INFERENCE AND GRADUAL TYPING - inference is when typescript tries to guess what datatype you're trying to use
let n:number = 10;
n = "string"; // see type inference in action, ts prevents us from assigning a string into an int

// gradual typing
let tempX:string = "Renz"; // instead of doing this
let tempY = "Renz" as string; // we'll do this, this is gradual typing, i prefer the method above tho

// to reassign a specific datatype to another datatype, we assign the variable as any | think of this as doing things in javascript way, use this rarely as it defeats the purpose of type checking of typescript
let tempA:any = 10;
tempA = "Renz"; // now it's a string datatype

// LESSON 2 - DEFINING CUSTOM DATATYPES - used to limit the values to the one you just expect or restricting possible values
// LESSON 2.1 - DEFINING CUSTOM TYPES IWHT INTERFACES
// instead of doing this or using an inline
function tempAB(y:number):{ 
    displayName: string,
    age: number
}{
    return null;
}

// we do interfaces to make our code much cleaner
interface theseItems { // think of interface as a datatype whether it be for return of a function or parameter's datatype
    displayName: string,
    age: number
}

function tempBA(y:number):theseItems {
    return null;
}

// UNFINISHED - LESSON 2.2 - ENHANCING INTERFACE DEFINITIONS - di ko gets

// LESSON 2.3 - RESTRICTING POSSIBLE VALUES WITH ENUMS AND LITERAL TYPES














// LESSON N.3 - TYPE BASICS 
let a:string = "Renz"; // assigning a datatype to a variable
function b(z:number):void{ // assignign a datatype to parameter, void is the return type of the function
    console.log(`value of z is ${z}`);
}
const c = function(z:number):number { // same syntax for assigning data type to function expression
    return z;
}

// LESSON N.4 - OBJECTS AND ARRAYS - ts is strongly types just like c++, js is weakly typed

// ARRAY
// you cannot add a datatype to an array that was not in there when it was initialized, except when the array is empty
let arr = [1,2,3]; // you cannot add a string into this
arr.push("Renz"); // nu uh you can't do this, arr could only contain numbers

let arr1 = [1,"two",3]; // since this was initialized with a string and numbers, you can add or modify any part of the array with string or numbers
arr1[1] = 2; // yes you could convert string into numbers, remember: you could only use string and numbers for this specific array

let arr2 = [];
arr.push(1); // you could pretty much add any datatype in an empty array

// OBJECT - we can't add additional properties into it 
let obj = {
    name:"Renz",
    age:20
}

// you cannot change the datatype of each property of an object, treat this property as how you would treat a variable
obj.name = 20; // you can't do this, name is a string 

// you cannot add additional properties into a defined object
obj.belt = "yellow"; // we can't do this, there is no belt property in obj 

// you also can't change the datatype of obj just like how you treat a normal variable
obj = [1,2,3]; // we can't convert it into an array! because this is an object!!!!

obj = { // you could change values of object but it has to match the keys of an object exactly
    name:"Renz" // this doesn't have age, so we can't do this
}

// creating an array of specific datatype - square bracket method
const arrS: String[] = ["abc","def"];

// creating an array of specific datatype - generic type method
const arrS1: Array<string> = ["abc","def"];

// LESSON N.5 - EXPLICIT TYPES - explicit declaration or initialization
// variables
let var1: string; // declaring a string variable
let age: number;

var1 = "Renz";
age = 20;

// array
let arr3: string[] = []; // declaring an empty string
arr3 = ["Renz","is","qwerty"];

// initializing an array
let arr4: number[] = [1,2,3];

// creating a mixed array, where you could store multiple datatypes | union types
let arr5: (number|string|boolean)[] = [];
arr5.push(1);

// union type to a normal variable
let var2: number|string; // no parenthesis like in array
var2 = "string"; // you could assign a string into it
var2 = 2; // you could assign a number or int into it

// two ways to declare an object explicitly
let obj2:object; // 1st method
let obj3:{ // 2nd method, use 2nd method if you know what properties you want
    name: string,
    age: number
};

// LESSON N.6 - DYNAMIC (ANY) TYPES - to be able to use any kind of data type
let var3:any; // variable declaration
let var4:any;
var3 = "Renz";
var3 = 20; // it could be a string or an int/number

let obj4: {name: any, age: any}; // take note that this is an object declaration, except we want it to use only a predefined properties
obj4 = {
    name: "Renz", // we could assign any value into it tho, that's why it's not suggested to use any
    age: 20
}

// LESSON N.7 - BETTER WORKFLOW & TSCONFIG - you don't want things to mix up like what they did with css css.map and scss, this lesson seperates ts and js
// step 1: tsc src/nameofFile.ts - type this at terminal // this would create a js file into the same directory
// step 2: tsc --init | at tsconfig.json then use "outDir": "./public" and "rootDir":"./src", you could see that js file would be at public files and ts files at src
// step 3: only include files that are created inside the src directory, go to tsconfig.json at the end above the last bracket add this: "include":["src"]
// that's it, now everytime we create a ts file at src directory, the js equivalent goes into a different directory named public

// LESSON N.8 - FUNCTION BASICS
// function declaration 
let func: Function;
func = () => {
    console.log(`hello`);
}

// optional parameter, it's okay if it you dont pass an argument into it 
let func1 = (x:number,y:string|number,z?:number) => { // just add a question mark for optional parameter | if we pass a default value into z like z:number = 10, we don't have to put a question mark anymore | 2nd parameter here is a union type, you could pass string or number
    console.log(x,y,z); // if you dont pass an argument into z it would be null
}

// declaring datatype of a function explicitly
let func2 = (x:number,y:string):void => { // return type of this function is a void, void returns nothing, it's perfectly fine to create a function without explicitly stating the return tho, ts would infer it automatically
    console.log(`print this`);
}
// declaring datatype of a function implicitly
let func3 = (x:number,y:number) => {
    return x+y; // ts would know that this returns number, thus automatically assigning this function as a number
}

// LESSON N.9 - DATATYPE ALIASES
type stringOrNum = string | number; 
type objAlias = { name : string, age:number };

// now here a practical use case
const func4 = (x:stringOrNum) => { // instead of typing x:string | num, we use the variable instead but i don't think this is a good idea
    console.log(`asdgfas`);
}
const func5 = (x:objAlias) => {
    console.log(x);
}

// LESSON N.10 - FUNCTION SIGNATURES - when yo uwant a function to follow a certain set of rules
let func6: (a:string, b:number) => void; // when we add a value for this in the future, we want it to accept only two parameters that accepts string and number respectively and we want this function to only return void or return nothing

// this function now follows the signature we created above, we don't have to follow the same parameter name as the signature declaration
func6 = (name:string, age:number) => { // we could also add after the parameter a ':void' but it's unnecessary 
    console.log(`${name}`); // look it returns nothing
}

// LESSON N.11 - DOM & TYPECASTING - it seems like this video is outdated so i skipped half of it
const anchor = document.querySelector("a");
console.log(anchor.href); // accessing the href attribute, ts would produce an error because it's not sure if anchor with href attribute exists
// to make the error go away just add an exclamation
const anchor1 = document.querySelector("a")!; // tbh i dont see any error tho, maybe the video is a bit old already? but it's a 2020 vid

// LESSON N.12 - CLASSES 
class Invoice {
    // why do we need to declare this, because just like in c++ ts is strongly typed language, you can only assign a string into a string
    client:string;
    details:string;
    amount:number;

    constructor(c:string, d:string, a:number){
        this.client = c; // we can only assign a string into a string thus we need to declare the variable client above, unlike in js where you could input any datatypes in any variable thus no need to declare
        this.details = d;
        this.amount = a;
    }
    
    // just casually creating a method
    format () { // we could also do format = function () {, but yeah we'd go with this
        return (`${this.client} owes ${this.amount} for ${this.details}`);
    }
}

// craeting an object out of classes
const invOne = new Invoice("Renz","N/A",20);
const invTwo = new Invoice("Ken","N/A",11);

// creating a collection of invoice
let invCollection: Invoice[] = [];
invCollection.push(invOne); // adding two invoice objects to the array

// LESSON N.13 - PUBLIC,PRIVATE,READONLY - these are access modifiers
// all classes are public by default unlike in c++ where classes are default private

/*
public - can access and modify a data member or member function outside the class
private - cannot access and modify a data member or member function outside the class
readonly(like const) - can access but not modify a data member of member function outsdie the class
*/

const sampleClass = class {
    readonly name:string; 
    private age:number;
    public location:string;

    constructor (n:string, a:number, l:string){
        this.name = n;
        this.age = a;
        this.location = l;
    }
}

const obj5 = new sampleClass('Renz',123,"string");

// shortcut, to prevent declaring member function, but this only works if you used access modifiers explicitly
const sampleClass2 = class {
    constructor (readonly name:string, private age:number, public location:string){ // this is messy tho, i don't recommend this personally
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

// LESSON N.14 - MODULES
// step 1: go to tsconfig.json -> change the value of of module to "es2015" and the value of target to "es6"
// step 2: in html go to <script> where js is linked then add the attribute type="module"
// these are just the export and import you already know this dude

// LESSON N.15 - INTERFACES - these are used as a way to format on what future values(or what datatype should they use) woudl it use in the future | only used when you want to pass an object
interface isPerson {
    name: string,
    age: number,
    location: string,
    speak: function(x: string):void; 
}

// now here's a practical use of interface, we wanted to create an object 
const me: isPerson = { // we're creating an object based on isPerson interface
    name: "Rnez",
    age:20,
    location: "abc",
    speak (text:string){
        console.log("text");
    }
};

console.log(me);

// practical use of interface as a parameter ina function
const func7 = (person: isPerson) => {
    console.log(`person's age is ${person.age}`);
}

// LESSON N.16 - INTERFACES WITH CLASSES - implementing interface in a class
interface sampleInterf {
    name:string,
    speak():void
}

const SampleClass3 = class implements sampleInterf { // now this class should have the format made in the interface, but you could stilladd your own membere function or data member its just that you must have the data created in interface
    name:string;
    age:number;
    constructor(n:string, a:number){
        this.name = n;
        this.age = a;
    }
    speak(){
        console.log(`your name is ${this.name}`);
    }
};

const obj6 = new SampleClass3("Renz",1);
obj6.speak();

// creating an array of interface sampleInterf
const arr6: sampleInterf[] = [];
arr6.push(obj6); // obj6 used a class that has sampleInterf implemented that's why it's valid

// you can also create an object that matches the interface then push it
const obj7:sampleInterf = {
    name:"Renz",
    speak: function(){
        console.log(`my name is ${this.name}`);
    }
}
arr6.push(obj7);

// UNFINISHED - LESSON N.17 - RENDERING AN HTML TEMPLATE

// BABALIKAN KO TEKA ANG HIRAP - LESSON N.18 - GENERICS - just like templates in c++ | used if we're not sure what datatype should it return
// generics in a function expression
const func8 = <t>(arg:t):t => { // if the input is a string then the return shall also be string, but of course you could still modify this
    return arg;
}

// generics in a function declaration
function func9<t> (arg:t[]):void { // generics capture 
    console.log(`arg is ${arg[0]}`);
}

// implicit assigning of datatype to generic function
func8("abc"); // we are implicitly assigning a string to func8

// explicitly assigning a datatype to a generic function
func9<number>([0,1,2,3]);

// using multiple generic types 
const func10 = <T , Y>(a: T, b: Y):void => {
    console.log(`value of a is ${a}, and value of b is ${b}`);
}

// again it can be assigned implicitly or explicitly, for this example we' just use explicitly
func10<number,string>(10,"Renz");

// we could also pass datatype or datatype and another datatype
func10<number | string, number>("Renz",10);

// setting a default value of generic datatype if none is specified
const func11 = <T, Y=string>(a: T, b: Y) => {
    console.log(`value of a is ${a}, and value of b is ${b}`);
}

func11<number>(10,"Renz"); // since we specified the default datatype for Y, and we did not specify a value for Y here, the default value would be the datatype of the arg



// LESSON N.19 - ENUMS - used as a way to associate with numbering, each value in an enum corresponds to a number | think of this as an alias for a number
enum resourceType { BOOK, PERSON, CAR, HOUSE}; // to access this: resourceType.BOOK, this would return 0 since enum starts with zero

const obj8 = {
    resources: resourceType.PERSON, // instead of typing resources: 1, we do this instead so it's much easier to remember
    name: "awfeasdfas"
}

// LESSON N.20 - TUPLES - tuples in ts means you can't change the datatype but you can chagne the value, tuples in python means you can't change the value, jeezus
let sampleTuple: [number,string] = [1,"adsfasdfas"]; // explicit tuple | you cannot change the datatype of a tuple

let sampleTuple1 = [1,"asdfas"]; // this is an array implicit
let sampleArray: string[] = []; // this is an array that only uses 1 datatype consistently 




// LESSON X.1 - TYPE DECLARATIONS - used as an alias to an existing datatype or new type (new object)
type bool = boolean; // creating an alias for boolean

// look we used bool instead of boolean
let varvar:bool;
varvar = true;
console.log(varvar)

// creating new type or new object, but it's not a good practice to use it here, interface is preferred in objects
type newObj = {
    name: string,
    age: number
};

// type and interface are almost alike to each other, it's a good practice to only use interface