// CONFUSION: FLYWEIGHT AND SINGLETON
// FUNCTIONS AS FIRST CLASS CITIZENS 
// WHAT ARE STRUCTURAL PATTERNS 
// CONSTRUCTOR PATTERNS
// CLASS DESIGN PATTERN

// LESSON 1.1 - DESIGN PATTERN - a general, reusable solution to a commonly occuring problem within a given context in software design 
// TYPES OF DESIGN PATTERN
// CREATIONAL - create new things | focus on creating new objects 
// STRUCTURAL - structure your code | organization of code 
// BEHAVIORAL - use for behaviors in code

// LESSON 1.2 - CLASS DESIGN PATTERN

// LESSON 1.3 - CONSTRUCTOR PATTERN 

// LESSON 1.4 - SINGLETON PATTERN

// LESSON 1.5 - FACTORY PATTERN - when you want to create a mechanism to create other objects | e.g. factory for creating cars | use case: creating multiple copies of objects 
// step 1: create an object with its attribute
// step 2: create a factory that produces the same object but with different attributes 

// create first an attribute for a car
const Car = class {
    constructor (doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// factory class, where the magic happens
const createFactory = class { 
    createCar (type) {
        switch(type){
            case "honda":
                return (new Car (4, "V6", "Grey"));
            case "civic":
                return (new Car (6, "V3", "Yellow"));
        }
    }
}

// with this we can create multiple copies of honda and civic just like in a factory
const factory = new createFactory();
const honda1 = factory.createCar("honda");

// automatically assigning doors:4, engine:v6, color:grey into variable honda1 
console.log(honda1);
console.log(honda1.doors)

// LESSON 1.6 - ABSTRACT FACTORY PATTERN - handling multiple factories | encapsulate a group of individual factories
// step 1: create multiple individual objects with its attributes
// step 2: create a factory that create the same individual objects but with differing attributes
// step 3: have a manufacturer that handles different factories 
// step 4: now you could create an object thru the manufacturer which handles multiple factories

const Car = class {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const Plane = class {
    constructor(doors, engine, color){ // of course these attributes doesn't represent accurately a plane, i know nothing about plane and cars
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const CarFactory = class {
    createCar = function (model){
        switch(model){
            case "honda":
                return new Car (2,"V8","Red");
            case "civic":
                return new Car (3,"V6", "Grey");
        }
    }
}

const PlaneFactory = class { // making these as an expression and a const is actually good, it prevents us from creating a variable/function with the same name as this 
    createPlane = function (model){
        switch(model){
            case "Boeing":
                return new Plane (2,"Estarabusbuspapao","Yellow");
            case "Kersteen":
                return new Plane (4,"Qwertyupo", "Blue");
        }
    }
}

const carFactory = new CarFactory();
const planeFactory = new PlaneFactory();

const vehicleManufacturer = (type,model) => {
    switch(type){
        case "car":
            return carFactory.createCar(model);
        case "plane":
            return planeFactory.createPlane(model);
    }
}

const honda1 = vehicleManufacturer("car","honda");
console.log(honda1);

// LESSON 3.2 - MODULE PATTERN - module is a single function, or single functionality | library is a collection of module | diz is basically what i always do react why am i even taking a note for this
// inside a module.js file 
const module = () => {
    console.log(`this is a module`);
}

export default module; 
// ---------------------- this is basically what a module is, ez pz 

// to use this module in a different js file, do this
import module from "./module"; // "./nameOfFile"

// now we use it 
module();

// TODO: - LESSON 3.3 - MIXINS PATTERN - you could use mixins to add interesting functions to the class we created - di ko parin gets mixins, di naman importante, decorater pattern daw gamit sa react
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'red')
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey')
            case 'sante fe':
                return new Car(2, "V8", 'red')
        }
    }
}

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom!`);
        
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');

honda.revEngine();

// LESSON 3.4 - FACADE PATTERN - basically the pattern of hiding complexity away by createing a facade for the complex code
// you basically use this always with react, you hide the complexity in a module then leverage a simple line to render the component, ez pz 

// in app.js or main file you could only see this
<Home /> 
<Navbar />

// but inside the Home.js file, alot of complex things is happening
// that's basically what facade is

// TODO: LESSON 3.5 - FLYWEIGHT PATTERN

// TODO: LESSON 3.6 - DECORATOR PATTERN - serves the same purpose as mixins 

// LESSON 3.7 - MODEL-VIEW-CONTROLLER(MVC) PATTERN - defines how an application should be split
// model - data (schemas)
// view - visuals(html)
// controller - logic | con
// flow: model -> view -> controller -> model -> view -> controller ...

// LESSON 3.8 - MODEL-VIEW-PRESENTER(MVP) - based on mvc, almost the same
// model - data (schemas, database)
// view - visuals(html+css)
// presenter - logic (js)
// flow: client request to presenter -> presenter get data to model -> model returns the requested data to presenter -> presenter get the presentation to view -> view returns the presentation

// LESSON 3.9 - MODEL-VIEW-VIEW-MODEL(MVVC) - sometimes mvvc 
// this is the approach used in react 
// model - data (schemas)
// view - stateless visuals(components)
// view model - stateful components 



// LESSON X.1 - MIXINS - to inherit from multiple classes instead of just one 
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

// with this mixin, it lets 
let flyMixin = function(obj) { 
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // "Flying, wooosh!"
plane.fly(); // "Flying, wooosh!"

