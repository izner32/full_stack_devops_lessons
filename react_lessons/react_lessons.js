// LESSON 1.2 - CHROME TOOLS FOR REACT
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en

// LESSON 2.1 - INSTALLING CREATE REACT APP
// at terminal type: npx create-react-app name-of-file | this is somehow the equivalent for express generator
// start just like in express, type: npm start

// LESSON 2.3 - CREATING REACT ELEMENT
// on index.js, remove react strictmode and report web vitals
ReactDOM.render(
    // 1st argument: element we want to create, 2nd argument: attribute of the element , 3rd argument: content of the element
    React.createElement("h1", { style: "blue" } , "Hello World!"), // this is somehow the equivalent of <h1>Hello World</h1> in html | we're injecting this code into html
    document.getElementById('root')
);

// LESSON 2.4 - REFACTORING ELEMENTS USING JSX
// lists has child elements right? now here's how we do them in react
ReactDOM.render(
    React.createElement("ul", 
    null,
    React.createElement("li", null, "List 1"),
    React.createElement("li", null, "List 2"),
    React.createElement("li", null, "List 3") // so far, html looks way easier, but idk i'm just getting started
    ),
    document.getElementById('root')
);

// above code looks messy and looks way harder than html, so in this case we'll be using jsx(html like syntax inside react)
ReactDOM.render(
    <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
    </ul>,
    document.getElementById('root')
);

// LESSON 3.1 - CREATING A REACT COMPONENT - a component is a function, function which can be used to replace html code
// at index.js type import App from "./App"
// inside index.js: ReactDOM.render(<App/>,document.getElementById('root')); 
// inside App.js remove all elements under the div App

// code inside app.js | this is a react component
function Header() { // component name should start with a capital letter
    return(
        <header>
            <h1>Renz's Kitchen</h1>
        </header>
    );
}
  
function Main() {
    return(
        <main>
            <p>We serve the most delicious food everywhere.</p>
        </main>
    );
}
  
function Footer() {
    return(
        <footer>
            <small><p>It's true</p></small>
        </footer>
    );
}
  
// adding function component in here
function App() {
    return (
      <div className="App">
        <Header /> 
        <Main />
        <Footer />
      </div>
    );
}

// LESSON 3.2 - ADDING COMPONENT PROPERTIES
function Header(props) { // parameter is called as props here in react
    console.log(props.name); // below we passed name="Renz" for props in here, by typing props.name we're getting the value of the argument
    return(
        <header>
            <h1>Renz's Kitchen</h1>
        </header>
    );
}

// look carefully how parameter props is being used in here
function Main(props) {
    return(
        <main>
            <p>We serve the most {props.adjective} food everywhere.</p>
        </main>
    );
}

function Footer(props) {
    return(
        <footer>
            <small><p>Copyright {props.year}</p></small>
        </footer>
    );
}

// wow so we could do js functionality on like html, look at new Date()...
function App() {
    return (
      <div className="App">
          {/* think of the arguments you passed onto a function component as objects */}
        <Header name = "Renz"/> {/* name is an argument to be passed onto props, string should be enclosed with double quotation marks while everything else should be wrapped around brackets */}
        <Main adjective = "amazing"/>
        <Footer year = {new Date().getFullYear()}/>
      </div>
    );
}

// LESSON 3.3 - WORKING WITH LISTS
const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu and Vegetables",
    "Minestrone"
];

// we can't use css' text-align since it produces error, we have to use js's camelCase way of doing things so in text-align we do textAlign

function Main(props) {
    return(
        <section>
            <p>We serve the most {props.adjective} food everywhere.</p>
            <ul style = {{ textAlign: "left" }}> 
                {props.dishes.map((dish) => (
                <li>{dish}</li>
                )) }
            </ul>
        </section>
    );
}

dishes.forEach((item) => {
    console.log(item);
});

function App() {
    return (
      <div className="App">
        <Header name = "Renz"/> 
        <Main adjective = "amazing" dishes={dishes}/>
        <Footer year = {new Date().getFullYear()}/>
      </div>
    );
}

// LESSON 3.4 - ADDING KEYS TO LIST ITEMS
const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu and Vegetables",
    "Minestrone"
];

// creating an object out of the array
const dishObjects = dishes.map((item,i) => (
    {id: i, title: item } 
) );

// input the key value pair into li
function Main(props) {
    return(
        <section>
            <p>We serve the most {props.adjective} food everywhere.</p>
            <ul style = {{ textAlign: "left" }}> 
                {props.dishes.map((dish) => (
                <li key = {dish.id}>{dish.title}</li>
                )) }
            </ul>
        </section>
    );
}

// passing the dishObjects we just created
function App() {
    return (
      <div className="App">
        <Header name = "Renz"/> 
        <Main adjective = "amazing" dishes={dishObjects}/> 
        <Footer year = {new Date().getFullYear()}/>
      </div>
    );
}

// LESSON 3.5 - DISPLAYING IMAGES WITH REACT
import restaurant from ".react-essential/src"
import React, { useEffect } from "react"; // usually used for fetching data, making request in api

function Main(props) {
    return(
        <section>
            <p>We serve the most {props.adjective} food everywhere.</p>
            <img src = {restaurant} height = {200} alt = "napkin with plate and utensils"></img>
            <ul style = {{ textAlign: "left" }}> 
                {props.dishes.map((dish) => (
                <li key = {dish.id}>{dish.title}</li>
                )) }
            </ul>
        </section>
    );
}

// LESSON 3.6 - USING FRAGMENTS - this prevents from rendering excess useless elements
// inside index.js

function AppTwo() {
    return <h1>This is the second app</h1>
}

ReactDOM.render(
    <React.Fragment> {/*instead of wrapping it with div, it's better to use react.fragment */}
        <App /> {/*this app and apptwo wouldnt work if it wasn't contained in a container */}
        <AppTwo /> {/* we can only render one component, not two sibling component unless they're wrapped */}
    </React.Fragment>
    document.getElementById("root")
);

// LESSON 4.1 - CONDITIONAL RENDERING - show only with conditions
// all of these until App() are all on app.js
function secretComponent () {
    return (
        <h1>Secret information</h1>
    );
}

function regularComponent () {
    return (
        <h1>Everyone can see this information</h1>
    );
}

function App(props) {
    if(props.authorized) {
        return <secretComponent />;
    } else {
        return <regularComponent />;
    }
}

// in index.js
ReactDOM.render(
    <App authorized = {false} />,
    document.getElementById("root")
);

// LESSON 4.2 - DESTRUCTURING 
function App( {authorized } ) { // this is equivalent of saying { authorized } = { authorized:false } // which is a destructuring way for object
    if(authorized) {
        return <secretComponent />;
    } else {
        return <regularComponent />;
    } 
}

// LESSON 4.3 - UNDERSTANDING USESTATE HOOK - you can only use hooks inside function component, they cannot be nested, they cannot be inside loops, if statements
import React, { useState } from "react"; // using destructuring to only import useState

function App(props) {
    const [emotion, setEmotion] = useState("happy"); // useState returns an array, first item is the state, 2nd item is used to update state which is a function | for replacing state

    return (
    <>
        <h1>My emotion is: {emotion}</h1>
        <button onClick = { () => { setEmotion("Happy"); } }> {/* setEmotion is the 2nd value for useState which is a function */}
            Happy
        </button>
        <button onClick = { () => { setEmotion("Sad"); } }> {/* setEmotion is used to modify the state */}
            Sad
        </button>
        <button onClick = { () => { setEmotion("Frustrated"); } }> {/* onClick is an attribute of button */}
            Frustrated
        </button>
    </>
    );
}

// LESSON 4.4 - WORKING WITH USEEFFECT - telling react to do something after every render(component renders initially when we first load) or everytime we changes the state in useState (because setState makes the site rerender) | adding [] as a 2nd parameter makes sure the useEffect only run once only (at the first render) | run when the 2nd parameter has value of array and that value of that array changes
import React, { useState, useEffect } from "react";

function App(props) {
    const [emotion, setEmotion] = useState("happy"); 
    const [secondaryEmotion, setSecondaryEmotion] = useState("tired");
    
    useEffect( () => { 
        console.log(`It's ${emotion} around here`);
    });
  
    useEffect( () => { 
        console.log(`It's ${secondaryEmotion} around here`);
    }, [secondaryEmotion]); // 2nd argument is dependancy, if specific emotion has been called, execute this effect
    
    return (
    <>
        <h1>My emotion is: {emotion} and {secondaryEmotion}</h1>
        <button onClick = { () => { setEmotion("Happy"); } }> 
            Happy
        </button>
        <button onClick = { () => { setSecondaryEmotion("Tired"); } }> 
            Tired
        </button>
        <button onClick = { () => { setEmotion("Sad"); } }> 
            Sad
        </button>
        <button onClick = { () => { setSecondaryEmotion("Crabby"); } }> 
            Crabby
        </button>
        <button onClick = { () => { setEmotion("Frustrated"); } }> 
            Frustrated
        </button>
        <button onClick = { () => { setSecondaryEmotion("Enthusiastic"); } }> 
            Enthusiastic
        </button>
    </>
    );
}

// LESSON 4.4 - INCORPORATING USEREDUCER - an alternative to useState, used when the setting condition's logic is complex
import React, { useReducer } from "react";

function App() {
    const [checked, toggle] = useReducer( // useReducer returns an array and we're destructuring it
        (checked) => !checked, // 1st parameter: think of it as the setState
        false // 2nd parameter: think of it as the state or initial state
    );

    return (
        <>
            <input
                type = "checkbox"
                value = {checked} // initial value of input, since this is a checkbox it only has boolean values
                onChange = {toggle()} // attribute onChange, fires the moment when the value of the element is changed | in this case it is when clicking the checkbox, in some cases like dropdown, it is when choosing another choice in the dropdown 
            />
            <p> { checked ? "checked" : "not checked" }</p>
        </>
    );
}

// LESSON 5.1 - FETCHING DATA WITH HOOKS
import React, { useState, useEffect } from "react";

function App({ login }) {
    const [data,setData] = useState(null);

    useEffect( () => {
        fetch(`https://api.github.com/users/${login}`); // grabbing the data
        .then( (response) => { response.json() }) // if successful, do this
        .then(setData); // because response.json returns a promise you ened to create a then, this then has the data from .json
    }, []); // this [] means we only want to fetch data only once | 2nd parameter is an array that contains a list of state variables to watch for

    if (data) { // if data is true or has value (obvs not null) then stringify the json data |
        return <div>{JSON.stringify(data)}</div>; 
    }

    return <div>No User Available</div>
}

// in index.js 
ReactDOM.render(
    <App login = "Renz" />,
    document.getElementById("root")
);

// LESSON 5.2 - DISPLAYING DATA FROM AN API
import React, { useState, useEffect } from "react";
import { toBindingIdentifierName } from "./react-essential/node_modules/@babel/types/lib";

function App({ login }) {
    const [data,setData] = useState(null);

    useEffect( () => {
        fetch(`https://api.github.com/users/${login}`); // grabbing the data
        .then( (response) => { response.json() }) // if successful, do this
        .then(setData); // then this
    }, []); // this [] means we only want to fetch data only once | 2nd parameter is an array that contains a list of state variables to watch for | if array has value then useEffect only runs when the value has change 

    if (data) { // use if(data) to ensure that data is in there
        return <>
            <h1>Your name is {data.name}</h1> {/* the data we fetch is a json object and it has a field "name", that why we can access it */}
            <p>You're from {data.location}</p>
            <img alt = {data.login} src = {data.avatar_url} />
            </>; 
    }

    return <div>No User Available</div>
}

// in index.js 
ReactDOM.render(
    <App login = "Renz" />,
    document.getElementById("root")
);

// UNFINISHED -  LESSON 5.3 - HANDLING LOADING STATE
function App({ login }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!login) return; // if login has no value, return and do nothing
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then( (response) => response.json() ) // get the content and turn it into json, but this also returns promise so another then is added below
            .then(setData)
            .then( () => setLoading(false) )
            .catch(setError);
}, [login]);

if (loading) return <h1></h1>

// LESSON 6.1 - REACT TESTING: USING CREATE REACT APP AS A TESTING PLATFORM
// since we used create react app in the beginning we could have access to create-react-app.dev to test

// step 1: create a file function.test.js | this is where we put our tests
// step 2: also create a function.js  | this is where our function are going to live
// step 3: on view-> terminal -> type npm test

// LESSON 6.2 - REACT TESTING: TESTING SMALL FUNCTIONS WITH JEST  - jest is a react library that is automatically included when we created the react app | also called as TEST DRIVEN DEVELOPMENT
// inside functions.test.js
import {timesTwo} from "./functions"

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8); // we are testing the function timesTwo, toBe is the answer we're expecting from the function
});

// inside functions.js type this
export const timesTwo = x => x*2;

// LESSON 6.3 - REACT TESTING: INTRODUCING REACT TESTING LIBRARY
// inside app.test.js
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders an h1", () => {
    const { getByText } = render(<App />); // getByText is some sort of a query, it reaches out to App and return an element that is inside that App | this is an example of object destructuring
    const h1 = getByText(/Hello React Testing Library/); // find the element that has the content "Hello React Testing Library" then assign it into the variable h1
    expect(h1).toHaveTextContent( // we expect the variable h1
        "Hello React Testing Library" // to have this content, if it succeeds then the testing is successful
    );
});

// inside app.js
function App() {
    return (
        <div>
            <h1>Hello React Testing Library</h1>
        </div>
    );
}

// LESSON 6.4 - REACT TESTING: TESTING HOOKS WITH REACT TESTING LIBRARY
// test a component again
// create Checkbox.js and Checkbox.test.js

// inside checkbox.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react"; // importing testing library
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => { // 1st argument is the name of the test | 2nd argument is a callback function on what we'll do on the test
  const { getByLabelText } = render(<Checkbox />); // getting the element that has label text
  const checkbox = getByLabelText(/not checked/); // figuring out what element has not checked content as the label
  fireEvent.click(checkbox); // simulate clicking of the checkbox
  expect(checkbox.checked).toEqual(true); // we expect it to be true after clicking
});

// inside checkbox.js
import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked, // condition for toggle
    false // initial value
  );
  return (
    <>
      <label htmlFor = "checkbox"> 
        {checked ? "checked" : "not checked"}
      </label>
      <input
        id="checkbox"
        type="checkbox"
        value={checked} // checked initial value is false
        onChange={toggle} // if onChange execute toggle which is checked = !checked
      />
    </>
  );
}

// LESSON 7.1 - INSTALLING REACT ROUTER 6 
// single page application (spa) - instead of creating different files for different pages, we're going to create a single page and javascript is going to load information
// we must handle routing with spa to get into page to page
// in view-terminal type: npm install react-router@next react-router-dom@next 
// in src folder create a file pages.js
// pages.js would be responsible for all of the pages inside our app

// inside pages.js
import React from "react"

export function Home() { // react component for home page
    return (
        <div>
            <h1>[Company Website]</h1>
        </div>
    );
}

export function About() { // react component for about page
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Events() { // react component for events page
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() { // react component for contact page
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

// LESSON 7.2 - CONFIGURING THE ROUTER
// inside index.js (or the main js file)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router> {/* the location the history,etc. are all in the router */}
        <App authorized = {true} /> {/* we have given the App an access to the router */}
    </Router>,
    document.getElementById("root")
);

// in app.js file
import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
    Home, // this are the react component we created each of them represents a page
    About,
    Events,
    Contact
} from "./pages"

function App() {
    return (
        <div>
            <Routes> {/* inside routes, we're going to create individual route for each page from pages.js */}
                <Route path ="/" element ={<Home />}></Route> {/* path would be the link, and element is on which component to render */}
                <Route path ="/about" element ={<About />}></Route>
                <Route path ="/events" element ={<Events />}></Route>
                <Route path ="/contact" element ={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;

// on terminal type: npm install history, because there'd probably be some error regarding this

// LESSON 7.3 - INCORPORATING THE LINK COMPONENT 
// inside pages.js
import React from "react"
import { Link, useLocation } from "react-router-dom" // so we could add link, but i think this is already doable with href so im not sure about the real advantage of this one

export function Home() { // react component for home page
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about" >About</Link> {/* probably the equivalent href in html */} 
                <Link to="events" >Events</Link>
                <Link to="contact" >Contact</Link>
            </nav>
        </div>
    );
}

export function About() { // react component for about page
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Events() { // react component for events page
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() { // react component for contact page
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Error404() { // adding an error page when they go to a route that does not exist
     let location = useLocation(); // function that returns our current location
    return (
        <div>
            <h1>[Resource not found at {location.pathname}]</h1>
        </div>
    );
}

// inside app.js
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Services,
  CompanyHistory,
  Location,
  Error404
} from "./pages";

function App() {
    return (
        <div>
            <Routes> {/* inside routes, we're going to create individual route for each page from pages.js */}
                <Route path ="/" element ={<Home />}></Route> {/* path would be the link, and element is on which component to render */}
                <Route path ="/about" element ={<About />}></Route>
                <Route path ="/events" element ={<Events />}></Route>
                <Route path ="/contact" element ={<Contact />}></Route>
                <Route path ="*" element = {<Error404 />} ></Route>
            </Routes>
        </div>
    );
}



// LESSON 7.4 - NESTING LINKS WITH REACT ROUTER 6
import React from "react"
import { Link, useLocation, Outlet } from "react-router-dom"


// inside pages.js
export function About() { // react component for about page
    return (
        <div>
            <h1>[About]</h1>
            {/* outlet would be responsible for display whatever in these nested components */}
            <Outlet /> {/* with this we could for example access services with link /about/services */}
        </div>
    );
}

export function Services() { // react component for about page
    return (
        <div>
            <h1>[Our Services]</h1>
        </div>
    );
}

export function CompanyHistory() { // react component for about page
    return (
        <div>
            <h1>[Our Company History]</h1>
        </div>
    );
}

export function Location() { // react component for about page
    return (
        <div>
            <h1>[Location]</h1>
        </div>
    );
}

// inside app.js
function App() {
    return (
        <div>
            <Routes> {/* inside routes, we're going to create individual route for each page from pages.js */}
                <Route path ="/" element ={<Home />}></Route> {/* path would be the link you created for this react component , and element is on which component to render */}
                <Route path ="/about" element ={<About />}></Route>
                    <Route path ="services" element ={<Services />}></Route> {/* adding the new pages we created */}
                    <Route path ="companyhistory" element ={<CompanyHistory />}></Route>
                    <Route path ="location" element ={<Location />}></Route>

                <Route path ="/events" element ={<Events />}></Route>
                <Route path ="/contact" element ={<Contact />}></Route>
                <Route path ="*" element = {<Error404 />} ></Route>
            </Routes>
        </div>
    );
}

// LESSON X.1 - URL PARAMETERS - set dynamically in a page's url / example is twitter.com/reeeeenzi , the url/reeeeeenzi is an application of url parameter
function App() {
    return (
      <Router>
        <div className="App">
          <Navbar /> 
          <div id ="page-body">
          <Route path = "/" component = {HomePage} exact /> 
          <Route path = "/about" component = {AboutPage} />
          <Route path = "/article/:name" component = {ArticlePage} /> {/* whenever a path is equal to the name, show the component ArticlePage */}
          <Route path = "/articles-list" component = {ArticleList} />
          </div>
        </div>
      </Router>
    );
  }

// LESSON X.2 - PASSING A FUNCTION TO A JSX ATTRIBUTE 
<button onClick={() => upvoteArticle()}>Add Upvote </button> // look how weird we pass a function 

// LESSON X.3 - DEPLOYING REACT APP TO GITHUB PAGES 
// step 1: in temrnial type: npm install gh-pages --save-dev
// step 2: go to package.json, at the top type: "homepage": "http://izner32.github.io/project_cheatcode",
// step 3: go to script, under scripts type this:"predeploy": "npm run build", "deploy": "gh-pages -d build"
// step 4: npm run deploy

// LESSON X.4 - useHistory - used to redirect into pages 
import { useHistory } from "react-router-dom";

const history = useHistory(); 
history.go(-1); // this means go back 1 page before 
history.push("/"); // this means go to this redirection page 

// LESSON X.5 - JSX FORMS 
/* IMPORTANT
onChange - function occurs when the input field's value get changed - used in input element
onClick - function occurs when the element has been clicked - mostly used in button or also in anchor i think
*/
const [errorMessage, setErrorMessage] = useState("");

const [emailValue, setEmailValue] = useState("");
const [passwordValue, setPasswordValue] = useState("");

const history = useHistory();

const onLogInClicked = async () => { // alert function is a async so we use async keyword here 
    alert("Log in not implemented yet"); // alert function is the method that typically shows you a warning 
}

return (
    <div className = "content-container">
        <h1>Log In</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input 
            value={emailValue} {/* value is the value inside the input field */}
            onChange={ e => setEmailValue(e.target.value)} {/* onChange executes everytime the value inside input field changes | trigger the setEmailValue that changes the emailValue, e.target.value is the current value inside the input field */}
            placeholder = "someone@gmail.com" /> {/* default text that is in the input field */}
        <input 
            type="password" {/* used to specify the type of input to display */}
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholder="password" />
        <button 
            disabled={!emailValue || !passwordValue} {/* disabled is a boolean attribute, either a true or false | a string becomes false if the value is an empty string, this means this button is disabled when it has an empty string*/}
            onClick={onLogInClicked}>Log In</button> 
        <button onClick={() => history.push("/forgot-password")}>Forgot your password?</button> {/* redirect into forgot-password page if this button is clicked */}
        <button onClick={() => history.push("/signup")}>Don't have an account? Sign Up Now!</button>
    </div>
);

// LESSON X.6 - REACT COMMON HOOKS 
const [state, setState] = useState(); // state is for the initial value and setState is for changing the initial value | mainly used to track changes in forms 

useEffect( () => {
    console.log(`do this`);
    },[]); // 2nd param means every changes in the content of the array, do this useEffect, since it has no value and cannot be changed this useEffect would only execute once | mainly used for fetching

const history = useHistory(); // mainly used for redirection 

import { useParams } from "react-router-dom" // use this to get the string on the url parameter