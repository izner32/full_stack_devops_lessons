import express from 'express';
import data from "./data/MOCK_DATA.json"; // importing data from mockaroo | LESSON 2.2

// lesson 4.4 - third party middleware installation
import favicon from "serve-favicon";
import path from "path";

const app = express();
const PORT = 3000;

// loading a static file (image) - LESSON 2.6
app.use(express.static("public")); // use is a middleware to a path 
app.use(express.static("images")); // craeting a path for images folder

// using json middleware - LESSON 4.2
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This is for proxies - LESSON 5.2
app.set("trust proxy", "loopback");

// using static-favicon middleware - LESSON 4.4
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));


// LESSON 2.3 - CREATING BASIC ROUTE
app.get("/", (req, res) => { // create data | fetch
    // res.send(`get requeset with / route on port ${PORT}`); | we remove this line of code for LESSON 2.5

    // get data first - LESSON 2.5
    res.json(data) // sending into front end
});

// LESSON 3.1 - ROUTING: PARAMETERS, example use case: wanted to pull some data in mongodb
// app.get("/item/:id", (req, res) => {
//     console.log(req.params.id); // just makign sure we get what we want
//     let user = Number(req.params.id); // cpnverting string into a number because in [user] below it requires a number not a string
//     console.log(user);
//     console.log(data[user]);
//     res.send(data[user]); // sending it into front end the data you have requested from MOCK_DATA
// });
// in browser type: localhost:3000/item/01 or /02, up to /49 to access this api

// // LESSON 3.2 - ROUTING: ROUTE HANDLERS - we're using next in here
// app.get("/item/:id", (req, res, next) => {
//     console.log(req.params.id); 
//     let user = Number(req.params.id); 
//     console.log(user);
//     console.log(data[user]);
//     res.send(data[user]); // you could only do one response method for each single call(get,post,put,etc.)
//     next(); // next means execute the next request respond below | could do this multiple times
// }, (req, res) =>
//     console.log("Did you get the right data?") // since next has been added above, this will execute after above | this would show to the terminal
// );

// LESSON 4.1 - BASIC MIDDLEWARE W/ EXPRESS - middleware are the one that's happening before we send the response
app.get("/item/:id", (req, res, next) => {
    // middleware the pulls the data
    console.log(req.params.id); 
    let user = Number(req.params.id); 
    console.log(user);
    console.log(data[user]);

    // middleware that uses the req object , code below could only be seen in the terminal
    console.log(`Request from: ${req.originalUrl}`); // getting the url
    console.log(`Request from: ${req.method}`); // this would return get since obviously the method is get


    //everything above is middleware
    
    res.send(data[user]); 
    next(); 
}, (req, res) =>
    console.log("Did you get the right data?") 
);

// LESSON 3.3 - ROUTING: COMMON METHODS
// we've already done some common methods such as json,send
app.get("/images", (req, res) => { 
     res.download("images/rocket.jpg"); // download the jpeg file
    // res.redirect("http://www.google.com"); // redirect into this website once the path(url/api) is called
    // res.end(); // end it right away
    // res.send(`get requeset with / route on port ${PORT}`); // send into frontend
    // res.json(data) // send into front the json data
});

// // LESSON 3.4 - ROUTING: CHAINING - when using same api for multiple routing methods
app.route("/item1")
    .get((req,res) => {
        res.send(`get requeset with / route on port ${PORT}`); // sending into front end
    })
    .post((req, res) => { 
        res.send(`post requeset with /newItem route on port ${PORT}`);
    })
    .put((req, res) => { 
        res.send(`put requeset with /item route on port ${PORT}`);
    }); // ------ end of lesson 3.4

// LESSON 4.3 - ERROR HANDLING MIDDLEWARE
// app.route("/item1")
//     .get((req,res) => {
//         throw new Error(); // we're forcing to throw an error
//     })
//     .put((req, res) => { 
//         res.send(`put requeset with /newItem route on port ${PORT}`);
//     })
//     .delete((req, res) => { 
//         res.send(`delete requeset with /item route on port ${PORT}`);
//     }); 

// // error handling
// app.use((err, req, res, next) => {
//     console.error(err.stack); // er
//     res.status(500).send(`Red alert!: ${err.stack}`);
// }); // -------- end of lesson 4.3

// LESSON 4.2 - MIDDLEWARE
// JSON data
// { "hello" : "JSON is awesome" }
// URLEncoded data
// hello=

app.get("/newItem", (req,res) => {
    console.log(req.body);
    res.send(req.body);
}); // ----------- end of lesson 4.2

app.post("/newItem", (req, res) => {  // read data to server
    res.send(`post requeset with /newItem route on port ${PORT}`);
});

app.put("/item", (req, res) => { // updating in your system, altho you could still create with this like a post
    res.send(`put requeset with /item route on port ${PORT}`);
});

app.delete("/item", (req, res) => { // delete /item in your system
    res.send(`delete requeset with /item route on port ${PORT}`);
});
// ----- END OF LESSON 2.3

app.listen(PORT, () => {
    // these are all on the server, it's now being showed to the front end
    console.log(`Your server is running on port ${PORT}`);
    // console.log(data); // have a look at the fake data you generated from mockaroo | LESSON 2.2
});