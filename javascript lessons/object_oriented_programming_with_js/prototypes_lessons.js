// three ways to create an object - individual object, class, constructor function 
// method 1: individual object - cannot pass value but you can mutate them anyways
const indObj = {
    x : 5,
    y : 10,
    z : function () {
        console.log(`value of x is ${this.x}`);
    }
}

// method 2: class | you could create multiple objects from this - can pass value thru constructor | class is said to be a syntactical sugar for constructor function but i don't find it that way, weird. constructor function seems alot easier for me 
const classObj = class {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    z = function () { // you dont add 'this.z' with class' methods
        console.log(`value of x is ${this.x}`);
    }
};

const obj1 = new classObj(5,10);

// method 3: object constructor function | you could create multiple objects from this just like a class - can pass value thru arguments
const funcObj = function(x,y){
    this.x = x; // must always have 'this'
    this.y = y;
    this.z = function () { // you need 'this.z' the 'this' keyword in here
        console.log(`value of x is ${this.x}`);
    }
}

const obj1 = new funcObj(5,10); // the new keyword converts this function into an object

// LESSON 1.1 - OBJECT LITERALS - object is basically just key-value pair | this is the method 1
const sampleObject = {
    name: "Renz",
    age: 20,
    login: function () { // you could also write this as login () {
        console.log(`User ${this.name} has logged in`); // 'this' refers to object wrapping this method, if the function is outside an object this keyword refers to windows which prints out nonsense
    },                                                  // which means 'this' is only useful for anything inside objects, because again, 'this' refers to the object
    logout: function () { // you could declare function in here because functions are considered as first class in js
        console.log(`User ${this.name} has logged out`);
    }
}

// LESSON 1.2 - OBJECT CONSTRUCTOR FUNCTION - best practice when naming constructor function is to use PascalNotation, camelCase for regular function, and again PascalNotation for components in react
function sampleObject (name,age){
    this.name = name; // you need to specify 'this.' keyword on every key in this object constructor function 
    this.age = age; // each of these represents as a property
    this.login = function () {
        console.log(`User ${this.name} has logged in`); 
    }
}

const object = new sampleObject("Renz",20); // the 'new' keyword is the one converting this function implicitly into an object
// now that the function is an object, the 'this' keyword inside function now makes sense
// i don't see any real advantage of using object constructor function, using class is much better i think

// LESSON 2.1 - PROTOTYPE
// constructor function would contain properties and __proto__
// if you create two objects from constructor function that is not initialized with prototype, these properties would occupy their own space
// if you initialized the property of constructor function with prototype then you created a two new object from it, these two new object would be referring to the same thing, thus saving space
// CONCLUSION: with prototypes, multiple objects could be pointing to the same property, not creating their own property everytime you initialize a new object thus saving space
const SampleObject = function () {
    this.x = 10;
    this.y = 20;
}

const object = new sampleObject();
// go to browser -> inspect elements -> console then type the code above
// then type object -> you could now see __proto__:object 

// JUST READ THIS BELOW TO FULLY UNDERSTAND PROTOTYPE
// real usefulness of prototype - every objects points to the same property thus saving space
// converting a property into prototype - only useful with constructor function and class since you could create multiple objects from it
const object = class {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
}
object.prototype.z = 20; // now that we have added z as a prototype, this property 'z: 20' would now be shared among those who will create an object from this class

const obj1 = new object(10,15);
const obj2 = new object(100,150); // obj1 and obj2 has its own property of x and y but they share z



// LESSON 2.2 - PROTOTYPE CHAIN - ever wondered how array,date,etc. has a predefined method? it's because of prototype chaining
const ConstFunc = function (x,y) { // you can't use arrow function as an object constructor function because 'this' keyword works differently in arrow function 
    this.x = x;
    this.y = y;
}
constFunc.prototype.z = 3; // when this is created, it is chained into the object constFunc, now when we create new object out of constFunc they too would inherit this property 'z' 

// since we could now use property 'z' into this obj1 below, this is simply the prototype chain 
const obj1 = new constFunc(1,2); // just casually converting the function into an object 

// LESSON 2.3 - PROTOTYPICAL INHERITANCE - refers to the ability to access object properties from another object 
// this happens when you have an object as a prototype
const objobj = {
    x: 1,
    y: 2,
}

const objobjobj = {
    a: 1,
    b: 2,

    __proto__: objobj, // we can now access objobj from objobjobj as a prototype, it's like inheritance, i mean this is the inheritance
}

// you could also create prototype with this: objobjobj.prototype = new objobj(); | not sure with this one

const newObj = objobjobj;
console.log(newObj.x); // look we have accessed objobj thru objobjobj

// LESSON 3.2 - INHERITANCE WITH CLASS 
const SuperClass = class {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

const BaseClass = class extends SuperClass {
    constructor(a,b,c){
        super(a,b); // this is required when inheriting from another class, think of this as the constructor for superclass
        // now we inherit this.x and this.y from SuperClass
        
        this.c = c;
    }
}

const obj = new BaseClass(5,10,15);
console.log(obj.x);

// LESSON X.1 - __proto__ vs prototype
// __proto__ is a property of every object
// prototype is the property contained in __proto__