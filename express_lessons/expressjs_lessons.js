// LESSON 1.3 - INSTALLING EXPRESS APPLICATINO GENERATOR 
// step 1: go to terminal, type npm install express-generator -g
// step 2: type - express --view=hbs | and now we have template to create a fully functional website

// LESSON 2.1 - INITIAL NODE SERVER SETUP WITH EXPRESS
// step 1: go to the express_app folder you created in terminal type then npm init
// step 2: npm install --save express nodemon // nodemon allows us to refresh the server automatically when you make changes 
// step 3: npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
// step 4: go to your package.json, in scripts remove whole line of test then replace it with  "start": "nodemon ./index.js --exec babel-node -e js" | purpose of this is to run es6 code
// step 5: create .babelrc file on your express_app folder
// step 6: inside .babelrc file type this: 
{
    "presets": [
        "env",
        "stage-0"
    ]
} 
// step 7: create a new file: index.js | if going to create any changes like name of file, make sure it reflects on package.json
// step 8: inside index.js type this:
import express from 'express';
import { allowedNodeEnvironmentFlags } from 'process';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
}); 
// step 9: in terminal type npm start

// LESSON 2.2 - ADDING DATA TO SERVER
// step 1: obviously we don't have data so let's grab some in mockaroo.com, get 50 rows of data then download it as json file
// step 2: create a folder inside express_app named data then paste your MOCK_DATA.json in there
// step 3: inside index.js file paste this code: import data from "./data/MOCK_DATA.json"

// LESSON 2.3 - CREATE A BASIC ROUTE - what is route? think of it as the page that appeared after you click a link
app.get("/", (req, res) => { // read data | request data to backend | e.g. loading standard html page, loading assets like css, fetching json data, fetching xml data
    res.send(`get requeset with / route on port ${PORT}`); // sending into front end
});

app.post("/newItem", (req, res) => { // create data, send data to backend, adding resource to server | e.g. creating blog post, submiting form then eventually putting them into the database
    res.send(`post requeset with /newItem route on port ${PORT}`); // res.send this is what they'd receive when this api has been fetched, req is requesting some info from api 
});

app.put("/item", (req, res) => { // updating in your system, altho you could still create with this like a post | e.g. editing your blog post
    res.send(`put requeset with /item route on port ${PORT}`);
});

app.delete("/item", (req, res) => { // delete /item in your system | deleting data from the server 
    res.send(`delete requeset with /item route on port ${PORT}`);
});

// LESSON 2.4 - TEST ENDPOINTS WITH POSTMAN
// testing if post and put is working, we should be getting the correct response
// inside postman, type localhost:3000/newItem then change the GET into POST then click Send | localhost:3000/newItem is an example of endpoint
// you could also copy the code snippet in postman to see how these testing are done in code

// LESSON 2.5 - CREATE A BASIC DATA ENDPOINT - places where api send their request,create request,etc. is the endpoint ( i think this is the backend server )
app.get("/", (req, res) => { 
    // get data first 
    res.json(data)
}); // have a look now at localhost:3000/ and you'll see this data in frontend

// LESSON 2.6 - ADD A STATIC ROUTE FOR FILE SERVING
// inside express_app folder, create 2 new folders, public and images
// download the 2 images from exercise files, pate them into the images folder and now we'll load the static file(images) into the server
// adding static path, go to index.js | we need to do this to make a static image usable
app.use(express.static("public")); // use is a middleware to a path | its a middleware meaning it gets executed on every http request
app.use(express.static("images")); // craeting a path for images folder | if an app.use has only 1 parameter(and that's a callback function), it means put that callback function as a middleware everytime the app receives a request 
// app.use('/user/:id', function (req, res, next) { // this app.use has path, this means execute only this api request everytime there is a request for the endpoint(1st parameter)
//     console.log('Request Type:', req.method)
//     next()
//   })
// LESSON 3.1 - ROUTING: PARAMETERS, example use case: wanted to pull some data in mongodb
app.get("/item/:id", (req, res) => {
    console.log(req.params.id); // just makign sure we get what we want
    let user = Number(req.params.id); // cpnverting string into a number because in [user] below it requires a number not a string
    console.log(user);
    console.log(data[user]);
    res.send(data[user]); // sending it into front end the data you have requested from MOCK_DATA | this is what they'd receive by fetching this api
});
// in browser type: localhost:3000/item/01 or /02, up to /49 to access this api

// LESSON 3.2 - ROUTING: ROUTE HANDLERS - block of code that happens inside your route
app.get("/", (req, res) => { 
    // everything inside this is a route handler
    res.json(data)
    // --------- end of route handler
});

// refactoring 
app.get("/item/:id", (req, res, next) => {
    console.log(req.params.id); 
    let user = Number(req.params.id); 
    console.log(user);
    console.log(data[user]);
    res.send(data[user]); // you could only do one response method for each single call(get,post,put,etc.)
    next(); // next means execute the next request respond below | could do this multiple times
}, (req, res) =>
    console.log("Did you get the right data?"); // since next has been added above, this will execute after above | this would show to the terminal
);

// LESSON 3.3 - ROUTING: COMMON METHODS
// we've already done some common methods such as json,send

app.get("/images", (req, res) => { 
    // res.download("images/rocket.jpg"); // download the jpeg file
    // res.redirect("http://www.google.com"); // redirect into this website once the path(url/api) is called
    // res.end(); // end it right away
    // res.send(`get requeset with / route on port ${PORT}`); // send into frontend
    // res.json(data) // send into front the json data
    // there are more, make sure to read documentation
});

// LESSON 3.4 - ROUTING: CHAINING - when using same api for multiple routing methods
// here is a code example that does not use chaining
app.get("/item1", (req, res) => { 
    res.send(`get requeset with / route on port ${PORT}`); // sending into front end
});

app.post("/item1", (req, res) => { 
    res.send(`post requeset with /newItem route on port ${PORT}`);
});

app.put("/item1", (req, res) => { // updating in your system, altho you could still create with this like a post
    res.send(`put requeset with /item route on port ${PORT}`);
});

// refactoring/ using chaining to reduce line of codes
app.route("/item1")
    .get((req,res) => {
        res.send(`get requeset with / route on port ${PORT}`); // sending into front end
    })
    .post((req, res) => { // read data to server
        res.send(`post requeset with /newItem route on port ${PORT}`);
    })
    .put((req, res) => { // updating in your system, altho you could still create with this like a post
        res.send(`put requeset with /item route on port ${PORT}`);
    });

// LESSON 4.1 - BASIC MIDDLEWARE W/ EXPRESS - middleware are the one that's happening before we send the response
app.get("/item/:id", (req, res, next) => {
    // middleware then pulls the data
    console.log(req.params.id); 
    let user = Number(req.params.id); 
    console.log(user);
    console.log(data[user]);

    // middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request from: ${req.method}`); // this would return get

    //everything above is middleware
    
    res.send(data[user]); 
    next(); 
}, (req, res) =>
    console.log("Did you get the right data?") 
);

// LESSON 4.2 - BUILT IN MIDDLEWARE
// we've already used on them which is express.static

// using json middleware, to use json
app.use(express.json());

// JSON data
// { "hello" : "JSON is awesome" }
// URLEncoded data
// hello=

app.get("/newItem", (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

// in postman, after typing localhost:3000/newItem at post, go to header change the Content-Type to the value: application/json
// in body, instead of form-data click raw then inside code snipper type { "hello": "JSON is awesome" }

// url encoded middleware
app.use(express.urlencoded({extended: true}));
// in header at postman, change the value of content-type into application/x-www-form-urlencoded
// in body, change it into x-www-form-urlencoded , in key type hello, in value type anything

// LESSON 4.3 - ERROR HANDLING MIDDLEWARE
app.route("/item1")
    .get((req,res) => {
        throw new Error(); // we're forcing to throw an error
    })
    .put((req, res) => { 
        res.send(`put requeset with /newItem route on port ${PORT}`);
    })
    .delete((req, res) => { 
        res.send(`delete requeset with /item route on port ${PORT}`);
    }); 

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack); // er
    res.status(500).send(`Red alert!: ${err.stack}`);
});

// LESSON 4.4 - THIRD PARTY MIDDLEWARE 
// https://expressjs.com/en/resources/middleware.html | we'll be trying out the middleware for serve-favicon
// step 1: npm install --save serve-favicon
// step 2: paste the photo favicon.ico on your public folder | this step obviously depends
import favicon from "serve-favicon";
import path from "path";
import { request } from 'node:https';

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// LESSON 5.1 - DEBUGGIN IN EXPRESS
// in package.json add on scripts, below start: "debug" : "set DEBUG=express:* & nodemon ./index.js --exec babel-node -e js"
// to start debug we type npm run debug

// LESSON 5.2 - USING EXPRESS BEHIND A PROXY - proxy is another server that pushes endpoint calls or traffic to your application
// https://expressjs.com/en/guide/behind-proxies.html
// security is very important for proxy, this is just a quick overview
app.set("trust proxy", "loopback"); // you could see this at the link given above

// LESSON 5.3 - SECURITY OVERVIEW FOR EXPRESS
// use transport layer security(tls) for sensitive data, you could get certificate on let's encrypt
// use helmet's collection of security middleware
// use cookies securely


// LESSON X.1 - DEFINITIONS
// route - the api
// endpoint - request you want to the api | e.g. https://randomuser.me/api/?results=5000 , /?results=5000 is the endpoint | another e.g. https://randomuser.me/api/?gender=female, ?gender=female is the endpoint
// method(verb) - GET,POST,PUT,DELETE is a verb
// api - process of servers communicating to each others or software communicating to each other, like a middleman thru the communication | an abstract concept | we make request to the api, api is the one that locates the resources to the database(it generates a unique copy) and sends back the data to the client
// uri - universal resource identifier 
// url - universal resource location, subset of uri 
// requesting to api - you need to specify the verb, the endpoint and some content-type like json when doing this 
// resource - data contained at the end of the database (example xml) 
// representation - data obtained on access (example is data is parsed into json file when you receive it) 

// there are more http codes, just google them 
// GET - SUCCESS (200) | ERROR - (404) NOT FOUND | get the specified resource, if available 
// POST - CREATED (201) | ERROR - (401) UNAUTHORIZED, CONFLICT (409), NOT FOUND (404) | create new resource and add it to a collection
// PUT - SUCCESS (200) | ERROR - (401) UNAUTHORIZED, METHOD NOT ALLOWED (405), NOT FOUND (404) | update an existing singleton resource based on id
// PATCH - SUCCESS (200) | ERROR - (401) UNAUTHORIZED, METHOD NOT ALLOWED (405), NOT FOUND (404) | modify an existing singleton resource based on id 
// DELETE - SUCCESS (200) | ERROR - (401) UNAUTHORIZED, NOT FOUND (404) | delete singleton resource based on ID

// 1xx - INFORMATION
// 2xx - SUCCESS
// 3xx - REDIRECTION
// 4xx - CLIENT ERROR
// 5xx - SERVER ERROR

// LESSON X.2 - USING REST API

// res.send is the response we receive once the api request is done 

// req.body is the data we're passing to the api 

// endpoints is how we could call the api and make a request onto it

// OPTION -  to know what kind of method(verbs) you could use to the uri
 
// GET http://restfil.dev/wp-json/wp/v2/?per_page=2  | in here we're requesting to api to give us something in which per_page is = 2
// Authorization: Basic Renz asdfasdfasd

// POST http://restfil.dev/wp-json/wp/v2/posts/15 | in here we're requesting to api to allow us into sending a json file
// Authorization: Basic Renz asdfasdsad
// Content-Type: application/json 
{
    "title": "asdfasdfsafa",
    "content": "21321asfasdf",
    "status": "publish"
}

// PUT http://restfil.dev/wp-json/wp/v2/posts/15 | we're modifying the value of title 
// Authorization: Basic Renz asdfasdsad
// Content-Type: application/json 
{
    "title": "KHJKJGKGGJ",
    "content": "21321asfasdf",
    "status": "publish"
}

// LESSON X.3 - REQUEST AND RESPONSE 
/*
request.params 
request.query
request.route
request.signedCookies 
request.body 

*/

// LESSON X.4 - CORS - this allows us to fetch an api using a different url aside from the origin | setting on what url can only access the api

// import cors, do first npm install cors 
import cors from "cors";

// adding a middleware that lets us to add cors at every api calls
app.use(
    cors({
        origin: "http://localhost:4000", // to allow anything at all, use *
    })
)

// preflight method - the app.use above is only good for get api request, for others such as put,post, delete do this below
app.use(
    cors({
        origin: "http://localhost:4000", // to allow anything at all, use *
        method: ["GET", "POST"], // we can only fetch a get and post
    })
)

// sending a credentials on the api, do this 
app.use(
    cors({
        origin: "http://localhost:4000", // to allow anything at all, use *
        method: ["GET", "POST"], // we can only fetch a get and post
        credentials: true,
    })
)
