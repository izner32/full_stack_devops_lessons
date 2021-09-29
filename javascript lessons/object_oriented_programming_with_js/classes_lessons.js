// LESSON 1.1 - CLASSES - basically just a syntactical sugar for constructor function 
// you could also do classess declaration and classes expression but i'm more into expression
const Car = class { // class expression
    constructor (doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    carStats = function () { // function expression, yeah i like doing things with expression, i basically use this for anything
        return (`This car has ${this.doors} doors`);
    }
    /* another way of creating a function - this means the same as above
    carStats() {
        return (`This car has ${this.doors} doors`);
    }
    */
}

const maserati = new Car("abc","def","ghi");
console.log(maserati.carStats());
// the class just basically converts into constructor function implicitly, we can do all of this we did in class with constructor function, constructor function are just outdated way of doing things

// LESSON 1.3 - MAIN DIFFERENCES WITH CONSTRUCTOR FUNCTION AND CLASSES 
// functions are not hoisted and can be overwritten (only pure functions not arrow functions)
// classes are hoisted and cannot be overwritten 
//default behavior of moving all the declarations at the top of the scope before execution

// LESSON 1.6 - STATIC METHODS (UTILITY FUNCTIONS) - you don't have to initiate an object to use the method, you could access the method with the class itself 
const sampleClass = class {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static statMethod = function () {
        console.log(`do something`);
    }
}

// look we don't have to initiate an object, we just have to call it using the class name 
// i mean, it's not that we don't have to initiate an object, but rather we can't, it iz wat it iz
sampleClass.statMethod();

// LESSON 2.1 - CONSTRUCTOR
// only one per class unlike c++
// if you do not create a constructor then one would be generated for you implicitly just like in c++
// for inheritance you use super as a way to call the constructor of the super class, this is covered in prototypes lesson, i won't put it in here anymore 

// LESSON 3 - INHERITANCE, JUST LOOK AT THE PROTOTYPES LESSON 

// TODO: - LESSON 3.2 - MIXINS - when you want to extend a class you can only extend from one class at a time, to extend from multiple class you use mixins 
// di ko gets mixin, mukha namang 'di importante balikan ko nalang hahahahaha
// update, im now studying design patterns and i need to study this :(


// LESSON X.1 - HOW TO USE LIVE SERVER - it's like nodemon, any changes would automatically appear
// step 1: go to extensions, install live server
// step 2: go to view -> command palette -> type: live server: open with live server 


// LESSON X.2 - PURE FUNCTIONS - these are the functions used in functional programming, notice that we don't use constructor function in functional programming (constructor function are like a class, we can create object from it)
// it exactly works just like a function in math, if you input 2 + 2 then you would receive 4 
