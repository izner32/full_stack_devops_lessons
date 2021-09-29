// LESSON 3.1 - GLOBAL OBJECTS - can be used anywhere in the file
var hello = "Hello world from nodeJS"
console.log(hello);  // console is an example of global object since we did not import anything to use it
// to run the object go to view->terminal->type ls first to check if you're at the right file-> then type node nodejs_lessons.js

// BASIC COMMAND LINE
// ls means list of files
// cd to change directory | cd .. to go back
// cls to clear

// LESSON 3.2 - THE REQUIRE FUNCTION - to load other modulem module is single functionality while library is a collection of modules
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`); // a backtick is a string
console.log(__dirname); // prints the path to the directory
console.log(__filename); // print the path to the directory including the file name

// LESSON 3.3 - ARGUMENT VARIABLES USING process.argv - this is a global object
// console.log(process.pid)
// console.log(process.versions.node) // print version of nodejs you're using
// console.log(process.argv); // it's like having an input and each word of the input is an item to a collection(in this case array) | type node nodejs_lessons.js hello world in terminal, hello world becomes an item of collection
const [, , firstName, lastName] = process.argv
console.log(`Your name is ${firstName} ${lastName}`);

// creating a variable in termninal
// type node nodejs_lessons.js --varName renz --anotherVariable "Renz Carillo" | you use quotation marks so process.argv would not treat this "Renz Carillo" as a different value
// const user = grab("--varName"); // we use this grab function to grab the value of this variable you set from terminal
// const greetings = grab("--anotherVariable");
// console.log(`${greetings} ${user}`);

// LESSON 3.4 - STANDARD OUTPUT - like a console.log except it is inline
process.stdout.write("Hello "); // the only diff with console.log is console.log is like a block, everytime you do it, it starts on the next space and process.stdout.write is like an inline
process.stdout.write("World \n\n\n");

// LESSON 3.5 - STANDARD INPUT
process.stdin.on("data", data => { // on is an event listener, listening to the data we input since this is stdin | if we execute this function, then we write on the terminal, it goes into the 2nd parameter and that somoehow becomes like an argument for the arrow function
    process.stdout.write(`\n\n${data.toString().trim()} \n\n`);
    process.exit(); // we need to exit because stdout keeps on asking without stopping
});

// LESSON 3.6 - setTimeout Delay
const waitTime = 3000;
console.log(`settin a ${waitTime/1000} second delay`);
const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime); // 1st argument would be executed based on specified time at 2nd argument, in this case 3000 ms or 3 seconds

// LESSON 3.7 - setInterval
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime = currentTime + waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);

    if (currentTime === waitTime) {
        console.log(`done done done`);
        clearInterval(interval); // clear the setInterval(itself) if 3 seconds has been reached | somehow the equivalent of process.exit()
    }
};

const interval = setInterval (incTime, waitInterval); // 1st argument would be executed over and over again after every time interval specified on 2nd argument, in this case at every 0.5 seconds

// LESSON 3.8 - REPORT PROGRESS WITH setInterval
// const waitTime = 5000;
// const waitInterval = 500;
// let currentTime = 0;

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor((currentTime / waitTime) * 100); // math.floor rounds the value down ex. 5.65 -> 5
//     process.stdout.clearLine(); // clears the current line so loading screen would be continous
//     process.stdout.cursorTo(0); // the loading would keep on hopping without this, it keeps the current line at axis 0
//     process.stdout.write(`waiting ... ${p}%`); // write is output
// };

// console.log(`setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => {
//     clearInterval(interval); 
//     console.log("done");
// };

// const interval = setInterval(incTime, waitInterval); // execute the incTime every waitInterval seconds
// setTimeout(timerFinished, waitTime);

// LESSON 4.1 - CORE MODULES - module that are locally installed as you install nodejs, doesn't require npm install | module is a single functionality while library is a collection of module
const path1 = require("path"); // "path" is a core module
const utili = require("util"); // same with uti;
const v8 = require("v8");

utili.log(path1.basename(__filename)); // utilities module is somehow like a console but utilities has date
utili.log(" ^ The name of the current file"); //.log has been deprecated

utili.log(v8.getHeapStatistics());

const { log } = require("util"); // getting only the log from util

// LESSON 4.2 - COLLECT INFORMATION WITH READLINE
const readline = require ("readline"); // a core module
const rl = readline.createInterface({ // creating an interface that has input and output
    input: process.stdin,
    output: process.stdout
});

// question you'd like to ask the user once you have the interface created
rl.question("How do you like Node? ", answer => { // answer is the user input | question(input,output)
    console.log(`Your answer: ${answer}`);
});

// LESSON 4.3 - USING READLINE FUNCTIONS - study this again
// all of these code for this lesson 4.3 is to ask a question then store the answer in an array
const readline1 = require("readline");
const rl = readline1.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [ // creating a collection(array) of questions
    "What is your name? ", 
    "Where do you live? ", 
    "What are you going to do with node js? "
];

const collectAnswers = (questions,done) => {
    const answers = [];
    const [firstQuestion] = questions; // destructuring, only getting the first index of question

    const questionAnswered = answer => {
        answer.push(answer); // add variable to the end of the array
        if (answers.length < questions.length) { // questions collection is higher than answers collection
            rl.question(questions[answers.length], questionAnswered)
        }
        else {
            done(answers);
    }

    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers); 
    process.exit();
});

// LESSON 4.4 - EXPORT CUSTOM MODULES
// create your own module and make it usable by adding module.exports = "Sample" // with this you're only exporting "Sample", you could also export functions ex. const inc = () => ++ count; module.exports = {inc};
// on another js file, add const name = ("./myModule"); // myModule is the name of the first file which you did module.export

// LESSON 4.6 - CUSTOM EVENTS WITH THE EventEmitter - creating custom events
const events = require("events");
const emitter = new events.EventEmitter();

// setting what the customEvent will do
emitter.on("customEvent", (message, user) => { // on is an event listener
    console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => { // event listener that listens to the data you input(stdin) | 2nd argument is the functionality on the data you type
    const input = data.toString().trim(); // toString() convert any data type to string and trim() removes any outer space
    if (input ==="exit") { // if user type exit 
        emitter.emit("customEvent", "Goodbye!", "process"); // say this message after typing exit
        process.exit(); // stop asking for input
    }
    emitter.emit("customEvent", input, "terminal"); // do the functionality of customEvent
});

// using the customEvent
emitter.emit("customEvent", "Hello World", "Computer");
emmiter.emit("customEvent", "That's pretty cool huh", "Renz");

// UNFINISHED - LESSON 4.7 - IMPROVE A MODULE WITH EventEmitter

// LESSON 5.1 - LIST DIRECTORY FILES
const fs = require("fs"); // core module for file 

// reading the files inside a directory/folder then store it in an array
const files = fs.readdirSync("./npm_lessons"); // remove the Sync to make it async
console.log(files);

// using async code equivalent of readdir
const asyncReadDir = async () => {
    try {
        const names = await fs.readdir('path/to/dir'); // await is applied to async codes
        console.log(names);
    } catch (err) {
        console.log('e', err);
    }
}

// LESSON 5.2 - READ FILES - read the content of the file
const text = fs.readFileSync("./assets/Readme.md", "UTF-8"); // make it readFile to make it async
console.log(text); //  this would print the content of the file

//async readFile - last argument would always be the callback
fs.readFile("./assets/Readme.md", (err,data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
});

// LESSON 5.3 - WRITE AND APPEND FILES - creating something to a new file
const md =`
# This is a new file

We can write text to a file with fs.writeFile
* fs.readdir
* fs.readFile
* fs.writeFile
`;

fs.writeFile("./assets/notes.md", md.trim(), err => { // write data to file, replace if it exists
    if (err){
        throw err;
    }
    console.log("file saved");
});

// LESSON 5.4 - DIRECTORY CREATION/FOLDER CREATION
const fs = require("fs");

if (fs.existsSync("storage-files")) {
    console.log("there is already a folder like this");
} else {
    fs.mkdir("storage-files", err => { // make directory 
        if (err) {
            throw err;
        }
        console.log("directory created");
    });
}

// LESSON 5.5 - APPEND FILES - appending/adding a content in a file
const colorData = require("./assets/colors.json"); // this is a json file from the exercise files it is filled with object

colorData.colorList.forEach ( (c) => { // colorList is an object inside an object from the json file which contains different color including the name and hex code property
    fs.appendFile("./storage-files/colors.md", `${c.name}: ${c.hex} \n`, err => { // create a colors.md if there is none then add the value specified
        if (err) {
            throw err;
        }
    });
});

// LESSON 5.6 - RENAME AND REMOVE FILES - rename() for rename and unlink() for delete/remove

// renaming file - synch way
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// renaming file - async way
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => { 
    if (err) {
        throw err;
    }
});

// deleting a file with unlinkSync after 4 seconds with setTimeout
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);

// LESSON 5.7 - RENAME AND REMOVE DIRECTORY/FOLDERS

fs.renameSync("./storage-files", "./storage"); //rename the storage-files directory into storage

// return all files so we could delete the directory
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`); // delete all files
});

fs.rmdir("./storage", err => { // to remove directory, we need to remove first the files in it
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
});

// LESSON 6.1 - READABLE FILE STREAMS - reading the content of a file
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8"); // read the content of this text file, set the encoding to utf-8 so it would not produce binary text

let txtFile = "";

console.log("type something...");
readStream.on("data", data => { // read the content, the content would be the 2nd argument which is then used for the arrow function
    console.log(`I read ${data.length - 1} characters of text`); // returns the no. of character in the string, idk why there is -1
    txtFile += data; // store the data in txtFile
});

// read the data once
readStream.once("data", data => {
    console.log(data);
});

// let us know if reading of data is done
readStream.on("end", () => {
    console.log("finished reading");
    console.log(`total character is ${txtFile.length - 1}`);
});

// LESSON 6.2 - WRITABLE FILE STREAMS - adding content of the file
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8"); // creating a file

writeStream.write("hello"); // creating a content inside the file
writeStream.write(" world\n"); // adding a content to the file

process.stdin.on("data", data => {
    writeStream.write(data); // the data you input gets into the file
});

// writable stream working with readable stream
const writeStream1 = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream1 = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

process.stdin.pipe(writeStream1); // everything you type into the terminal gets written into the myFile.txt
readStream1.pipe(writeStream); // adding the content of readStream1 to the writeStream1 file

// LESSON 6.3 - CREATE CHILD PROCESS WITH EXEC - open website, terminal, etc.
const cp = require("child_process");

cp.exec("open http://www.linkedin.com/learning"); // open website
cp.exec("open -a Terminal ."); // open Terminal

// cp.exec using terminal command
cp.exec("ls", (err, data) => { // equivalent of typing ls in command
    if (err) {
        throw err;
    }
    console.log(data);
});

// UNFINISHED - LESSON 6.4 - CREATE CHILD PROCESS WITH SPAWN
// idk whats happening in here 
const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Renz \n");
questionApp.stdin.write("Carillo \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});

// LESSON X.1 - CONFIG - we use config to bind app to a specific port, enter a connection string so you can connect to cloud database, use a third party service through a proided API key or credentials
// always create a separate config directory with a default.json file, it could also be toml,etc.
