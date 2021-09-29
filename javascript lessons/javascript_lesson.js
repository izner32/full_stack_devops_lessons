// LESSON 3.1 - OBJECTS - this meant differently from objects in c++, and python. objects in javascript is not made from pure class/struct and is more like a set/dictionary altho object could also be something that is from class 
const backpack; // initializing variable/container
const backpack = { // defining variable in a key value pair fashion
    name: "Everyday Backpack", // key:value(properties)
    volume: 30,
    color: "grey",
    strapLength: { // object in an object
        left: 26,
        right:26,},
    toggleLid: function(lidStatus){ // if a function is inside the object then it is called as method just like in c++ and python | this is a function expression
        this.lidOpen = lidStatus;} // 'this' keyword refers to the current object it belongs to, in this case backpack
}

// LESSON 3.4 - OBJECT PROPERTIES - these are the key:value pair
const backpackpack; 
backpackpack = {
    name: "Everyday Backpackpack" //property
}

// LESSON 3.6 - ACCESSING OBJECTS - accessing is different with python
console.log(backpack); // equivalent to print(backpack) in python
console.log("add a string: ", backpack); // pretty much works just like in print in python

// accessing object property
console.log("The volume is: ", backpack.volume); // accessing the value of the key volume, in python this would be print(backpack["volume"]) you could also do this format in js but using the dot '.' is the standard in js

// accessing property inside an object of an object
console.log(backpack.strapLength.left);

// usefulness of bracket notation when accessing object
var query = "volume";
console.log(backpack[query]); // you can't do it with backpack.query, idk why dot notation is the standard when clearly this could do more

// LESSON 3.7 - PRACTICE: CREATE AN OBJECT
const fingerboard;
const fingerboard = {
    wheels: 90,
    name: "TechDeck",
    griptape: "Blind"
}

// LESSON 3.8 - OBJECT METHODS (function inside an object, for c++,python and java - method is a function inside a class)
const fingerboard = {
    wheels: 90,
    name: "TechDeck",
    griptape: "Blind",
    lidOpen: false,
    toggleLid: function (lidStatus) { // functionName: function (parameter) {
        this.lidOpen = lidStatus; 
    }
}

// calling the method
backpack.toggleLid(true);

// accessing the values inside a method
console.log(backpack.lidOpen); // now that you have set the lidOpen into true using the toggleLid method above, the value of this should also be true

// LESSON 3.9 - PRACTICE: BUILD A NEW METHOD

// LESSON 3.10 - CLASS
// creating classes: 
// method 1: Class declaration: class Name { }
// method 2: Class expression: const Name = class { }
class Backpack {
    constructor ( // not the same as member function in c++
        // parameters inside a constructor
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen ) {
        // define properties:
        this.name = name; // you could also do x = name | defining a class is somehow the same in c++
        this.volume = volume; // you do not need to initialize variable unlike in c++
        this.color = color;
        this.pocketNum = pocketNum;
        this.straplengthL = {
            left: straplengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        }
        // adding methods like normal functions in a class
        toggleLid(lidStatus) { // we don't put the keyword function in here, why does javascript has to be so weird
            this.lidOpen = lidStatus;
        }
    }

// calling the class
const everydayPack = new Backpack("Everyday Backpack",30,"grey",15,26,26,false);
console.log("name is: ", everydayPack.name)

// LESSON 3.11 - OBJECT CONSTRUCTOR FUNCTION - functionality just like a class but class is superior | never seen this before in c++,java and python
function Person (name, age) { // constructor function | same as traditional function but all it becomes object
    this.name = name,
    this.age = age
}

// creating objects
const person1 = new Person();

// LESSON 3.12 - PRACTICE: BUILD AN OBJECT WITH A CONSTRUCTOR
const sampleClass = class {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

const obj = new sampleClass(1,2,3);
console.log(obj.a);

// LESSON 3.13 - GLOBAL OBJECTS - classes with predefined methods
//using date
const rightNow = new Date(); // datatype objectName = new Constructor()
console.log(rightNow.toDateString()); // accessing data

// LESSON 3.14 - PRACTICE: CREATE NEW OBJECT TYPE
// creating individual object
const newBook1;
const newBook1 = {
    author: "Renz", // property
    age: 20,
    isOpen: false,

    // adding a method 
    isOpen: function (input) {
        this.isOpen = input;
    }
}

// creating object using class
class Books {
    constructor (author,age,isOpen){ // parameter
        this.author = author; // assigning values to key:value pairs (property)
        this.age = age;
        this.isOpen = isOpen;
    }
        // adding a method 
        isOpen (input) {
            this.isOpen = input;
        }
    }


// creating an object
const newBook2 = new Books("Cong",29,false);
const newBook3 = new Books("Dong",29,true);

// creating object using constructor function
function Bookss (author,age,isOpen) {
    this.author = author,
    this.age = age,
    
    // adding a function, function within a function, possible in python too but not in c++
    this.isOpen = function (input) {
        this.isOpen = input;
    }
}
const newBook4 = new Bookss("Wong",30,true);
const newBook5 = new Bookss("Song",31,true);

// LESSON 4.1 - MIX TEXT AND VARIABLES WITH TEMPLATE LITERALS
// modifying the html content using javascript
// on console type document.body.innerHTML = "Some text" to replace everything inside <body>
// .innerHTML is to change the content of the element you picked
// this is a fairly new concept 


const everydayPack = { 
    name: "Green Frog",
    volume: 30,
    color: "grey",
    age: 19,
    numOfPackets: 3,
    strapLength: { 
        left: 26,
        right:26,},
    toggleLid: function(lidStatus){ 
        this.lidOpen = lidStatus;}
}

const content = ` <!-- these are backticks not quotation marks (template literals) | used for pasting code from html -->
<main>
    <article>
        <h1>${everydayPack.name}</h1> 
        <ul>
            <li>Volume: ${everydayPack.volume}</li>
            <li>Color: ${everydayPack.color}</li>
            <li>Age: ${everydayPack.age}</li>
            <li>Number of pockets: ${everydayPack.pocketNum}</li>
            <li>Left strap length: ${everydayPack.strapLength.left}</li>
            <li>Right strap length: ${everydayPack.strapLength.right}</li>
            <li>Lid status: ${everydayPack.toggleLid}</li>
        </ul>
    </article>
</main>
`; // insert javascript using ${}

document.body.innerHTML = content; // now we could inject javascript in html

// LESSON 4.2 - TRADITIONAL STRING OUTPUT
const content = "<h1>" + everydayPack.name + "</h1>"; // instead of using template literals we use traditional string output, which uses string concatenation ( dis is so ugly and much harder )

// LESSON 5.1 - DOM (DOCUMENT OBJECT MODEL)

// LESSON 5.2 - ACCESS ELEMENTS WITH document.querySelector("element") METHODS | ACCESS ANY PART OF THE HTML
// .querySelector() // [attribute] , element , .class , #id 
// go to console then type document.querySelector("main") | with this we're finding the element named main, we could also find class name using document.querySelector(".maincontent") , works just like in css
// you could also do: document.querySelector("main li:last-child") | with this we're finding the last li element inside the main element
// selecting all the list inside the main: document.querySelector("main li")
// selecting each of all the list inside the main and changing each of the color to red: document.querySelectorAll("main li)".forEach(item => item.style.backgroundColor = "red")

// LESSON 5.3 - ACCESS ANY PART OF THE HTML (OLDER VERSION)
// Element.getElementsByClassName() | just like what the method name suggests, we're finding it using the class name
// Document.getElementById()
// go to console then type these:
// document.getElementsByClassName("packprop backprop_color")
// document.getElementById("everyday") , everyday is an idname

// LESSON 5.5 - MODIFYING ELEMENT CLASSES
// changing class name of an element - document.querySelector("h1").className = "new-class"
// display the attribute of a class  - document.querySelector("main li:first-child").classList
// adding a new class name to the element - document.querySelector("main li:first-child").classList.add("new-class") // clas
// removing a class name - document.querySelector("main li:first-child").classList.remove("new-class")
// toggle a class - document.querySelector("main li:first-child").classList.toggle("new-class")
// replace a class - document.querySelector("main li:first-child").classList.replace("packprop", new-class") // replacing packprop with new-class

// LESSON 5.6 - MODIFYING HTML ELEMENT ATTRIBUTES USING JAVASCRIPT
// display the attributes of html element: document.querySelector("img").attributes
// finding if an element has this attribute: document.querySelector("img").hasAttribute("src")
// getting the value of an attribute: document.querySelector("img").getAttribute("src")
// creating/modifying an attribute: document.querySelector("img").setAttribute("alt", "A drawing of a backpack")
// removing an attribute: document.querySelector("img").removeAttribute("title")

// LESSON 5.7 - GETTING THE INLINE STYLE(CSS)
// getting the style of an element: document.querySelector(".site-title").style | you could also find here the declaration of different css properties
// getting the value of a property of a style(css): document.querySelector(".site-title").style.color
// modifying the value of a property of a style: document.querySelector(".site-title").style.color = "rebeccapurple"

// LESSON 5.9 - ADDING DOM/HTML ELEMENT
// adding an element: document.createElement()
const newArticle = document.createElement("article") // creating an article
newArticle.classList.add("backpack") // appending
newArticle.setAttribute("id", "everyday") // setting an attribute
newArticle.innerHTML = content; // inserting into html
main.append(newArticle); // inserting newArticle | parentNode.append(), there is also prepend() | there is also node.appendChild() | node.replaceChild() | node.insertBefore() | element.insertAdjacentElement()

// LESSON 6.2 - VAR | VARIABLES - for declaring global variables
var x = 1; // var is a datatype
console.log(x);

//modifying value of a var
x = "abc"; // wow so you could change a numerical value into a string

// declaring value without a var, pretty much just like in python
y = 3;

// declaring multiple variable just like in c++
var x = 4, y = 5, z = "asdfas";

// declaring empty variables
var empty;

// LESSON 6.3 - SCOPE
// local scope - if inside brackets then it is only valid on that scope 
// global scope - outside any brackets

// LESSON 6.4 - LET - not much of a difference with var if the variable is in global
var color = "pink"
function sampleFunction () {
    // its a good practice to use let when you want a variable to be changed and var for those you don't want to
    let color = "blue"; // we re-assigned the value of color into blue and since color is global variable the value globally must also be changed but it would not be since we used let | the value blue is only valid within this scope
}

// LESSON 6.5 - CONST - its like final in java, constant in c++ | value cannot be modified
const color = "purple"
// color = "red" | you cannot change the  whole constant value, but if it is an object or array, you could change the property or add some part

// LESSON 6.6 - DATA TYPES - datatypes are automatic
z = 9; // if you assigned like this, it would automatically be var
var a = "string"; //string
var b = 9; //int
var c = 9.1; //float
var d = true; //boolean
var e = null; //null
var f = undefined; //undefined
var g = { //object
    what: 9,
    why: 10,
};
var h = ["a","b"]; //array, initialization is the same with python

//identifying datatype
console.log(typeof a); //y no parenthesis?????

// LESSON 6.7 - OPERATORS - THIS IS PRETTY MUCH THE SAME WITH C++ AND JAVA, JUST COPY IT
// one change with '==' and '==='
// == is for equality and === is for absolute equality
a = 10;
b = "10";
if (a == b){
    console.log("they are equal"); //this would execute since they are the same, only the datatype is different | altho this would be false in c++ and java
}

c = 10;
d = 10;
if (c === d){
    console.log("they are equal"); // this would execute since 10 and 10 is literally the same | '===' is the equivalent of '==' for java and c++
}

// LESSON 7.1 - ARRAY - data structure (collection)
// initializing an array
var sampleArray = [1,2,3,4,5];

//accessing an array
sampleArray[0]; // we are accessing the 1st element of the array, the index number starts with 0 just like in c++,java and python

// modifying value inside an array
sampleArray[1] = 200;

// appending a value inside an array
sampleArray[sampleArray.length] = 6; //sampleArray.length is originally 5, the index of array is only at 4 since we start counting at 0, by doing this it is the same as typing sampleArray[5] = , but this is much more preferred if you don't know the size of the collection

// LESSON 7.2 - ARRAY METHODS - 
var backpackContents = ["piggy", "headlamp", "pen"];

// making the values inside like a separate individual values instead of a whole
console.log(backpackContents.join());
console.log(backpackContents.join(", "));

// adding content
console.log(backpackContents.push("pencil",6)); // adding value at index 6

// unshift works like a queue | adding at front
backpackContents.unshift("pencil_again");

// shift works like a queue | removing at the front
backpackContents.shift();

// removing at the back
backpackContents.pop();

// doing a for each loop at array | this is the weirdest loop i've seen in a collection so far
backpackContents.forEach(function (item) {
    item = `<li>${item}</li>`;
    console.log(item);
});

// filtering, only getting a value you want based on conditions
const items = [
    { name : "Bike" ,       price : "100" },
    { name : "Skateboard" , price : "50" },
    { name : "Car" ,        price : "25" },
    { name : "Wheelie" ,    price : "10" },
    { name : "Unicycle" ,   price : "30" },
    { name : "Plane" ,      price : "200" }
];

const filteredItems = items.filter((item) => { // using callback function
    return item.price >= 100 
});

console.log(filteredItems);

// map, getting only the value of a specific key you want
const nameItems = items.map((item) => { // using callback function
    return item.name
});

console.log(nameItems);

// find, return item that matches
const itemFound = items.find((item) => {
    return item.price === 100
});

console.log(itemFound);


// LESSON 8.2 - FUNCTION AND METHODS
// function creation has 2 ways of creating | function created anywhere be it inside the 

// function declaration(the normal function i know): - use if you want a function to be used in a global scope
function doSomeMath(a, b){
    let c = a + b;
    return c;
}

// function expression: 
const doMoreMath = function (a, b) {
    let c = a + b;
    return c;
};

// immediately invoked function expression (iife) - run as soon as it is defined
(function () {
    let a = 5;
    let b = 6;
    let c = doSomeMath(a,b);
    console.log(`The sum of a and b is: ${c}`);
})();

// LESSON 8.4 - ARROW FUNCTION - somehow like the lambda function in python

// traditional function | function declaration
function foo (a){
    return a + 100;
}

// arrow function equivalent
let abc = (a) => { a+100; } //parenthesis, brackets, and return are optional
let abc = a => a+100; //equivalent to the one above | parameter => expression
// calling the arrow function
abc(5);

// function expression
const sampleFunc = function (a) {
    return a + 100;
}

// arrow function equivalent
const sampleFunc = (a) => a+100; // datatype varName = (parameter) => expression

// arrow function with multi line return, use parenthesis
const arrowMulti = () => (
5
)
// if arrow function uses bracket, we need to explicitly type return, this one doesn't have return that means this is a void function it doesnt return anything
const fetchData = async () => {
    const result = await fetch(`/api/articles/${name}`) // removed the localhost since we already set them in proxy 
    const body = await result.json(); // this result.json is somehow the equivalnet of result.then()
    setArticleInfo(body);
}

// UNFINISHED - LESSON 8.5 - ARROW FUNCTION AND THE 'THIS' KEYWORD 
// GONNA GET BACK ON TO THIS
// arrow function does not have their own 'this'

// LESSON 8.7 - PASSING PARAMETER TO A FUNCTION
function foo (a) { // a is a parameter
    return a + 5; // a is used as a variable to be used inside the function
}
foo(5); // since the function returns a+5, since our argument is 5, this would return 10

// LESSON 8.10 - CALLBACKS
// callbacks are functions that are passed as an argument
// callbacks are passed without parenthesis, altho this functions can contain parameters, the function or object that's calling them is implicitly providing the argument for this callback functions
// the function which has a callback function as an argument is implicitly providing the argument for the callback function
function foo(func){
    let name = "Renz";
    func(name); // func is a callback function since it's called later, when the parent function requires a callback function they are the one already assigning value to the argument of the callback function
}

function sampleFunc (name) {
    console.log(name);
}

foo(sampleFunc); // you just pass a function as an argument with no parenthesis, sampleFunc is called callback since it would be called inside the parent function (foo())

// LESSON 8.11 - IF, ELSE STATEMENTS - srsly y is this only getting covered now?!?!?!
var a = 10;
var b = 100;
var c;
if (a === b){ // if statement is true then do below
    c = true;
}
else if (a > b) { // or if above is false, and a is greater than b then do below 
    c = false;
}
else // if nothing else is true then do this
    c = true;

// ternary operator
var c = a + b === 10 ? true : false; // var varName = condition ? (if true do this) : (if false do this)

// LESSON 8.12 - LOGICAL OPERATORS
// this is composed with || or, && and, !== not equal, you've already done this with c++ and java and this is pretty much drilled in your head already so i won't do this anymore

// LESSON 8.13 - CONDITIONAL SWITCH STATEMENT - 
var a = 1;
var b;
switch (true) { // this is an example of swithc statement - condition | 
    case a > 0: // you can think of this as if
        b = true;
        break; // good ol' break
    case a = 0: // more like if else
        b = false;
        break;
    default: // equivalent of else or if nothing else is true
        console.log("lmao");
}

let a = 1;
let b = 2;
let c;
switch(a) { // switch statement - expression
    case 0: // think of this as if a === 0
        c = 0;
        break;
    case 1: // think of this as if a ===1
        c = 1;
        break;
    default:
        console.log("default");
}

// LESSON 8.14 - LOOPING THROUGH CONTENT
var stuff = [1,2,3,4,5,6];
var stuffList = document.createElement("ul");
var nestedObjects = {
    item01: {
        name: "qwer",
        age: "3",
    },
    item02: {
        name: "asdf",
        age: 99,
    }
};

// classic for loop
for (let i = 0; i < stuff.length; i++){
    let listItem = document.createElement("li");
    listItem.innerHTML = stuff[i];
    stuffList.append(listItem);
}

// for loop for collection (python style except in python it is 'in' instead of 'of')
for (const item of stuff) { // think of this as item = stuff[0], item = stuff[1],...item = stuff[n]
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
}

// foreach array method (preffered way of dealing with collection in modern js)
stuff.forEach((item) => { // we use this instead of map if it does not have to return anything
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
});

// for loop for objects | oh okay, for of for collection and for in for object, in python whether it be object or or collection, you use for in
for (const singleObject in nestedObjects) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name:${nestedObjects[singleObject]}`;
    stuffList.append(listItem);
}

import { fstat } from "fs";

// LESSON 9.3 - EVENT LISTENERS
// html_target.addEventListener("action", callback_function)

// UNFINISHED - LESSON 9.5 - ADVANCE EVENT LISTENERS AND 'THIS'

// UNFINISHED - LESSON 9.6 - PASSING ARGUMENTS THROUGH EVENT LISTENERS

// LESSON 10.1 - TROUBLESHOOTING JAVASCRIPT IN THE BROWSER
// go to browser -> inspect element -> sources -> find file with js extension
// click the no. of line of code you wanted, and idk there's something that's happening

// LESSON 10.2 - MAKING SENSE OF A REACT COMPONENT



// LESSON X.1 - TOOLS FOR WORKING WITH JAVASCRIPT
// live server environment - install live server in vs code as an extension | modern web browser - chrome | browser console | code editor - vscode

// LESSON X.2 - LINTING AND FORMATTING
// download eslint (detect coding errors and does basic cleanup) and prettier (formatting) | both of these tool requires node.js - download at nodejs.org - npm install at terminal - (file -> preferences -> settings -> check format on save)

// LESSON X.3 - BROWSER CONSOLE
// this is where you test if your code works

// LESSON X.4 - INTERNAL JAVASCRIPT
/* 
yes, just like in css there is also an internal javascript on an html document
<script> <!-- element for adding javascript -->
// example javascript code
    const all_code = document.query_selector_all("code");

    for (let item of all_code) {
        item.inner_HTML = '&lt;${item.inner_HTML}&gt;';
    }
</script>
*/

// LESSON X.5 - EXTERNAL JAVASCRIPT
// add this in your html file, <head><script scr="script.js"></script></head>

// LESSON X.6 - MODERN JAVASCRIPT LOADING - IMPORTANT
//load it in the html <head> and just use async and defer
// USING ASYNC (parse html while downloading js -> while executing js stop parsing html -> continue parsing html)  <script src="script.js" async></script>
// USING DEFER (parse html while downloading js -> all this parsing must be complete before js execution)  <script src="script.js" defer></script>

// LESSON X.7 - JAVASCRIPT MODULES
import backpack from "./backpack" //import object from file - importing the whole module and setting the backpack as an alias for the whole module, to access a single export from this alias, use dot e.g. backpack.methodfromBackpack
import { methodFromBackpack } from "./backpack" // importing a single export from backpack module
export default backpack;

// LESSON X.8 - THIS KEYWORD - the object that is executing the function, if i
// method -> obj | function not -> obj

// 'this' in a method on an object
const video = {
    title: "a",
    play () {
        console.log(this); // this is referring to the whole method this would print {title: "a", play: f} // f means function
    }
}

// 'this' in a function
function playVideo() {
    console.log(this);
}
playVideo(); // this would print some useless thing, that means 'this' is useless for traditional function but not for constructor function since constructor function is object

// 'this' in a constructor function is the same with in a method, they both reference to the object

// LESSON X.9 - ASYNC-AWAIT JS CRASH COURSE
// sync - everything is happening continously
// async - you wait for something to happen before it moves on to the next line


// LESSON X.10 - EVENT LISTENERS
// bubble event - if parent node is clicked, child node is then also clicked | starts from child node to parent(target) node
// html_element.addEventListener("click",f); // there are plenty of event listener click is one of them, just google it | html_elemet.addEventListener("action", functionality/callback function)
grandparent.addEventListener("click", e => {
    console.log("Grandparent 1")
} // try clicking the element and then look at the console
parent.addEventListener("click", e => {
    console.log("parent 1") // this is automatically bubble event
} // if you click the parent, it woudl also trigger the child 1 since child 1 is inside the parent and this is a bubble event
child.addEventListener("click", e => {
    console.log("child 1") // this is automatically bubble event
}

// capture - opposite of bubbling, if parent node is clicked then grandparent node is then also clicked, starts from grandparent into parent(target) node
grandparent.addEventListener("click", e => {
    console.log("Grandparent 1 capture")
} 
parent.addEventListener("click", e => {
    console.log("parent 1 capture") },
    // adding capture event
    { capture: true }
} 
child.addEventListener("click", e => {
    console.log("child 1 capture") 
}

// stop propagation, if for example in a capture event you clicked the child and you added the stop event propagation at parent, the grandparent and parent will execute but the execution will stop on parent
grandparent.addEventListener("click", e => {
    console.log("Grandparent 1 capture")
} 
parent.addEventListener("click", e => {
    e.stopPropagation(); // if you clicked child event, the propagation would stop here at parent
    console.log("parent 1 capture") },
    // adding capture event
    { capture: true }
} 
child.addEventListener("click", e => {
    console.log("child 1 capture") }, 
    // adding capture event
    { capture: true }
}

// running event only once - after it has executed, it would not be executing anymore again
child.addEventListener("click", e => {
    console.log("child 1 capture") 
    // adding capture event
    { once: true }
}

// or you could do this, which functions the same way
child.addEventListener("click", e => {
    console.log("child 1 capture") 
});
.removeEventListener; // removing the event

// FINISH EVENT DELEGATION ON LEARN JAVASCRIPT EVENT LISTENERS IN 18 MINUTES BY WEB DEV SIMPLIFIED

// LESSON X.11 - USING DATA ATTRIBUTE IN HTML AS A GOOD PRACTICE NOT TO MESS WITH CLASS NAME
/* in html
<button data-modal-target = "modal"> //data-modal-target is somehow the equivalent of class and ="modal" is the equivalent of class name | its like creating your own attribute but it must start with data-
<button data-close-button = "close-button">
*/

// STUDY ARRAY METHODS, MAP, FILTER, PROMISE, HTTP PROCESS, ES6, HIGH ORDER, REDUCE

// LESSON X.13 - DEBUGGING JAVASCRIPT - using console.log or the way you debug in mql4 and mql5
// example

overlay.addEventListener("click", () => {
    console.log("it works"); // good old way of debugging | if console didnt print this that means it wasnt able to get here which means there's something wrong in here
    const modals = document.querySelectorAll(".overlay--active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

// OR YOU COULD ALSO USE BREAKPOINTS (SUPER IMPORTANT!!)
// just have a quick search on them it's hard to describe them in words

// LESSON X.14 - DESTRUCTURING - taking an object or collection and convert it into smaller elements/variable
// with array 
const alphabet = ["a", "b", "c", "d"];
const number = [1,2,3,4,5];

const [a,b] = alphabet; // we're only getting the values we want from alphabet collection
const [a,,c] = alphabet; // we do this if we want to skip the b and only get the a and c
const [a,,c, ...rest] = alphabet; // get the remaining values
console.log(a);
console.log(rest);

const newArray = [...alphabet, ...number]; // joining two array, this uses spread operator, spread makes the collection piece by piece, thus you're passing it here piece by piece

// with objects 
const person = {
    name: "Renz",
    age: 20,
    height: 5
};

//geting only the name property - when destructuring object you're getting the key from key value pair while in destructuring array, you're assigning a variable for certain piece of the array
const { name } = person
console.log(name);

// LESSON X.15 - ERROR HANDLING - try,catch, finally, throw 
// try - test block of code for errors
// catch - handle the error
// throw - create custom error
// finally - execute code after try and catch regardless of the result

try{ // test the code - try also has a return
    console.log("start of try runs");
    unicycle;
    console.log("End of try runs -- never reached");
} 

catch(err) { // if error go here
    console.log("error has occured: " + err.stack);
}

finally { // will always run
    console.log("This is always run");
}

console.log("... Then the execution continues");

// LESSON X.16 - ASYNCHRONOUS JAVASCRIPT - asynchronous code allows the program below async code to be executed immediately despite the async code not being finished, best example is setTimeout | CODE WILL EXECUTE LATER WHEN IT'S DONE NO NEED TO WAIT FOR ME, functions running in parallel with other functions | SYNC IS DONT RUN YET, WAIT FOR ME TO FINISH FIRST
// synchronous code requires the upper line of code to be finished first before executing
// we typically use asynch on codes that is slow like fetching data,image processing,etc., we want our program to flow smoothly, if every code is synchronous that means it has to wait for previous line of code to finish before executing but what if that previous line of code is slow? fix is async programming
// code blocking is when the previous line of code is so slow (happening in synchronous coding, sync is the nature of javascript since it is single threaded langauge, it means it only has one callstack (think of this stack as the way you think about stack in data structure, same in c++ memory stack);
// async code disappears in the call stack and goes to webapis, that's why the next line of code keeps running without waiting for the async code, after the async code is ready for execution it then goes to task queue, event loop is the one looking at stack and task queue and tells when stack is empty

// promise - returns either resolve or reject
const myPromise = new Promise ((resolve, reject) => {
    const randInt = Math.floor(Math.random() * 10);
    if (randInt === 0) {
        resolve(); // if it's successful you call resolve | success path
    } else {
        reject(); // if it fails you call reject | reject path
    }
});

// then and catch is the asynchronous code for promise, they execute parallel to other functions ocne the promise is fulfilled
myPromise
    .then( () => { console.log("Success"); } ) // then handles the success case, think of this as the resolve, we call this is if it's successful
    .catch( () => { console.error("Something went wrong"); } ); // catch handles the fail casem think of this as the reject, we call this if it's failure

// fs readFile with promises
const fs = require("fs"); // importing the filestate(fs)

fs.promises // if something needs to be done whether it fails or success use finally
    .readFile("./test.txt", { encoding: "UTF-8" } )
    .then( (data) => console.log(data) ) // if reading file is a success do this
    .catch( (err) => console.error(err) ); // if fail do this

// fetch promises
fetch("https://pokeapi.co/api/v2/pokemon/ditto") // getting the source, this fetch is a promise
    .then( (res) => res.json() ) // since fetch is a promise, this is what we do if it's a success, we convert it into res.json and that res.json returns a promise
    .then( (data) => console.log(data) ) // we print the data after res.json has converted into a json file, remember that res.json returns a promise
    .catch( (err) => console.error(err) ) // this is how we handle errors

// async/await - basically just a syntactical sugar for promises | since this is async, it gets removed to call stack then moved into webapi, after done executing it goes to task queue then the event loop checks the call stack if it's empty, if it's empty this async function gets transferred into call stakc and gets executed
const loadFile = async () => { // you put async because the code inside is asynchronous, promise is async 
    try { 
        // await are placed on promises or asynchronous code
        const data = await fs.promises.readFile("./test.txt", { // await make sures the synchronous code gets executed first, it waits for the promise to get resolved first
            encoding: "UTF-8",
        });
        console.log(data); // equivalent of then, if await is successful then do this
    } catch (error) { // equivalent of catch
        console.error(error);
    }
};
loadFile();

// fetching with async/await
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // do this
        const data = await res.json(); // then after above is successful do this, but this is also a promise
        console.log(data); // then do this
    } catch (err) { // equivalent of catch
        console.error(err); // if error do this
    }
};
fetchPokemon(2);

// LESSON X.15 - NULLISH COALESCING (??)

// LESSON X.16 - VARIADIC FUNCTION - function that can accepts infinite amount of parameter

// LESSON X.17 - PASSING AN ARRAY AS A PARAMETER
const arr123 = [1,2,3,4,5,6];

// passing an array one by one  
func123(...arr123); // we're using the spread operator and it does this in the background func123(arr123[0],arr123[1],... and so on); but this is mostly good for variadic function only

// passing an array as a whole
func123(arr123); // well this is very simple, this is how you pass an array as a whole in js, i just had to create an own lesson for this because c++ way of passing an array is confusing lmao 

// LESSON X.18 - .ENV FILE 
// WE USE .ENV FILE TO HIDE VARIABLES, E.G. API KEYS

// LESSON X.19 - LOCAL STORAGE IN JS 
// exploring local storage
// we could say to get access to the property of window object which is a global object 
window.localStorage

// but for window object we really don't have to do that, we could just say
localStorage // localStorage stores data in the web browser 

// clearing data for localStorage,
localStorage.clear();

// adding data to local storage 
localStorage.setItem("name", "Renz"); // creating the data to be stored | this creates object, 1st is the key 2nd is the value
// now if we refresh the browser, we could notice that the data inside the localStorage is still there 
// local storage stays there forever unless cleared 

// removing data from local storage 
localStorage.removeItem("name"); // removing the property by specifying the key from key-value pair

// getting data from lcoal storage 
localStorage.setItem("age","30"); // creating another data
console.log(localStorage.getItem("age")); // getting the value of age 

// you could also access data using key 
console.log(localStorage.key(0)); // 0 is starting index just like in array

// LESSON X.20 - if js datatypes are primitive, why can we access there built in methods?
var str = "hi";
var upper = str.toUpperCase();

//The JavaScript engine acts as though that code were written like this (for the purposes of accessing the toUpperCase property):

var str = "hi";
var upper = new String(str).toUpperCase(); // this is basicalyl creating a new class passing the str variable into the constructor and accessing the object inside

// LESSON X.21 - JS STRING METHODS 

// LESSON X.22 - JSON - commonly used for apis and configs, easier to read than xml, json is a superset of javascript, anything you write in json is a valid javascript objects 
// json types : strings, numbers, booleans, null, arrays, objects 
// you could always return a json of object or a json of array of objects 
// sample json 
{
    "key":"value",
    "int": 3,
    "boolean": true,
    "array":["abc", "qwert"],
    "objectArr":[{
        "name":"abc",
        "age":123,
    }],
}
// keys are contained within double brackets while number and boolean is not 

// parsing means converting the json into javascript object - converting json string into javascript object
JSON.parse(sample);

// LESSON X.23 - BASE64 ENCODING - used for sending binary data over a text based protocol such as http, ensures text does not get corrupted during transfer, it does not conceal data 
const str = "dcode";
const base64 = btoa(str); // btoa converts str variable into base64 string
const decoded = atob(base64); // atob converts base64 string into string 

// LESSON X.24 - FETCHING 

// fetching get api 
fetch('/api/endpoint')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err)); // error handling for ugly fetching

// fetching async await version (much better) | something could always go wrong with fetching that's why we wrap them in a try catch block for error handling
try {
    const res = await fetch(`/api/endpoint`) // fetching is default get
    const data = await res.json(); // grab the json response from the api then convert it into javascript object
    console.log(data); 
} catch (err) { 
    console.error(err); 
}

// fetching post api 
try {
    const res = await fetch(`/api/endpoint`, {
        method: "post",
        headers: { // this is required, it's like you're saying you're sending a json object into the api
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "user 1"
        })
    }) 
    const data = await res.json(); // grab the json response from the api then convert it into javascript object
    console.log(data); 
} catch (err) { 
    console.error(err); 
}

// fetching put api 
try {
    const res = await fetch(`/api/endpoint`, {
        method: "put",
        headers: { // this is required, it's like you're saying you're sending a json object into the api
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "user 1"
        })
    }) 
    const data = await res.json(); // grab the json response from the api then convert it into javascript object
    console.log(data); 
} catch (err) { 
    console.error(err); 
}

// fetching delete api | this is mostly where url parameter gets useful
try {
    const res = await fetch(`/api/endpoint/${id}`, { // id is a url parameter
        method: "delete",
    });
    const data = await res.json(); // grab the json response from the api then convert it into javascript object
    console.log(data); 
} catch (err) { 
    console.error(err); 
}

// LESSON X.25 - GETTERS AND SETTERS 
const samplePerson = class {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName () { // like some sort of way to use overloading method 
        return (`Your first name is: ${this.firstName}, your last name is: ${this.lastName}`);
    }
    set fullName (value) { // get and set is like some sort of way to use overloading method in javascript 
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

samplePerson.fullName; // this uses the getters 
samplePerson.fullName = "Renz Carillo"; // this uses the setters 

// LESSON X.26 - DECORATOR - like an another way to use a function, i dont think there's an advantage with using this one 
// decorator without parentheses 
let lipstick = function(target){
    target.lips = "pink";
}

@lipstick // equivalent to writing lipstick(Girl);
class Girl {

}

console.log(Girl.lips); // outcome: "pink"

// decorator with parentheses - like a function returning a function | like curying 
let lipstick = function(color){
    return function(target){
        target.lips = color;
    }
}

@lipstick("black") // like saying lipstick("black")(Girl)
class Girl{

}

