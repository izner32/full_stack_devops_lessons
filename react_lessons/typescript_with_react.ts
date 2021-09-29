// LESSON 1.1 - CREATE A TYPESCRIPT REACT APP 
// npx create-react-app --template typescript name-of-file
// cd name-of-file
// npm start

// LESSON 1.2 - HANDLING STATE 
import React, {useState} from "react";

const [number,setNumber] = useState(5);

// setting the function into void since we don't want this to return anything
const changeNumber = (x:number):void => { // we're assigning a number datatype to x 
    setNumber(x); // we specified number so it would not be possible to put a string or other datatypes in here, which doesn't really make any sense right
}

//------- or we could apply generics into the useState to only use number
const [number1,setNumber1] = useState<number>(5); // now we could only use number datatype for this  

const changeNumber1 = ():void => { 
    setNumber1(10); 
}

//-------- assigning an object inside a state 
                            // obj[], remember that this is how we specify that we wanted a datatype to be an array, :datatype[]
const [obj,setObj] = useState<{name:string, age:number}[]>([
    {name: "Renz"},
    {age: 123}
]); // the datatype must be an object of array that has name and age, we could use interface on this one 

// application of interface to the above case 
interface objFormat {
    people: {
        name:string,
        age:number 
    }[] // this means people contains an array of objects 
}

                                // accessing specific key in an interface interfaceName["keyName"]
const [obj1,setObj1] = useState<objFormat["people"]>({name: "Renz", age:20});

// LESSON 1.3 - HANDLING PROPS 
// method 1: handlind props without react.fc SUPER CONFUSING DONT USE THIS 
/* 
1. create an interface on what List component can only accepts on its props, props is automatically an object and interface is only used on objects so they are a perfect pair
2. list only accepts an object with a certain format (because of interface) and according to that format its property is only "people" that has a value of array
3. we create an array which is to be passed on the List component
4. remember that passing a value to a component in react is automatically an object 
    e.g. in a normal function 
        func(5);
    e.g. in a component function in react
        <List a=5/> // this is equivalent to saying list({a:5}); so every value passed onto a props is an object
5. we pass a value to props of List component
    <List people={people}/> // {people} contains an array made from step 3 using useState | this is like saying list({people:[]);
*/

import List from "./link/List";

interface objFormat {
    people: {
        name:string,
        age:number 
    }[] // this means people contains an array of objects 
}

function App() {
                                // useState is a generic function, we assigned the property of people which holds an array into this specific example
    const [people,setPeople] = useState<objFormat["people"]>([]);

    return (
        <>
            <List people={people}/> //* people is an empty array 
            // since props has an interface that only has the property of people
            // remember that to pass a property to an object created with interface we must follow its format
        </>
    )
}

// inside list 
interface objFormat {
    people: {
        name:string,
        age:number 
    }[] // this means people contains an array of objects 
}

function List(props: objFormat) { // since props is automatically an object in react, we can use interface in it, main purpose of interface is to define the datatypes inside its content
    return (
        <> 

        </>
    )
}

// method 2: using reactfc
// inside list 
interface objFormat1 {
    people: {
        name:string,
        age:number 
    }[] // this means people contains an array of objects 
}

// using generic is somehow different with react's function component
function List: React.FC <objFormat1>({ people }) {
    return (
        <> 
            <p>{people.name}</p> 
        </>
    )
}

// LESSON 1.4 - HANDLING FUNCTIONS 
// inside app.js
import List from "./link/List";

interface objFormat {
    people: {
        name:string,
        age:number 
    }[] 
}

function App() {
    const [people,setPeople] = useState<objFormat["people"]>([{
        name:"Renz",
        age:20
    }]);

    return (
        <>
            <List people={people}/> 
        </>
    )
}

// inside list component
interface objFormat {
    people: {
        name:string,
        age:number 
    }[] 
}

function List: React.FC <objFormat1>({ people }) {
    
    const renderList = (): JSX.Element[] => { // since renderList is not a function component, but we want it to be we need to explicitly specify it to return jsx.element, the return datatype for a function component
        return people.map((person) => ( // ts would infer that we're returning an array of void since map method returns an array of void, to make sure we're returning jsx, specify explicitly look at my explanation above | hovering at function name is the best way to know what datatype to be returned on a function
            <li className ="List">
                <div className="List-header">
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        )
    }
}
// TODO : understand this lesson, confused on react.changeEvent, e.target.name
// LESSON 1.5 - HANDLING EVENTS - onclick, onchange fuck sobrang hirap

// inside AddToList.js 
import React from "react";

const AddToList = () => {

    const [input, setInput] = useState({
        name:"",
        age:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // i dont literally understand what just happened here
        setInput({
            ...input, // using the spread operator, it's like we're passing the property of the object one by one 
            [e.target.name]: e.target.value 
        })
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="name"
                value={input.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="age"
                value={input.age}
                onChange={handleChange}
            />
        </div>
    )
}

export default AddToList;

// inside App.js
import List from "./link/List";

interface objFormat {
    people: {
        name:string,
        age:number 
    }[] 
}

function App() {
    const [people,setPeople] = useState<objFormat["people"]>([{
        name:"Renz",
        age:20
    }]);

    return (
        <>
            <List people={people}/> // if we type straight ahead this List component, react would automatically import it for us, yes react could do that
            <AddToList/>

        </>
    )
}