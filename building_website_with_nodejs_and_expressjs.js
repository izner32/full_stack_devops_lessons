// LESSON 1.1 - CREATE EXPRESS SERVER 
// 1st: go to view->terminal->type npm install express
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => { // show this on the screen
    response.send("Hello Express :)");
}); 

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});

// LESSON 1.2 - 
