// LESSON INTRO.4 - GETTING AN OpenWeatherMap API Key
// step 1: go to openweathermap.org -> go to api -> proceed and grab your api key, here's your api key: eab9958d4e9f0051c409957caec90d4a
// api key - identifies your app & your request

// LESSON 1.1 - ASYNCHRONOUS
// synchronous - when a set of things has to happen one after another | sunod sunod
// asycn - sabay na nangyayari, js is sync in nature then how could this happen? async code goes into webapi -> sync code starts executing -> after async code is done executing from webapi it goes into queue -> event loop would look at stack, if all sync codes are done executing it places the async code into stack, and now the async code will start to work

// LESSON 1.3 - CALLBACK FUNCTION - these are the functions that are called after the async code has finished executing 
// that means callback function are the functions passed as an argument in an async code 
// example of callback function
setTimeout ( () => { // setTimeout is an async code 
    console.log(`printing callback function`);
}, 5000); // 1st parameter is a callback function because it would only execute after the async code has finished executing.
// WAIT!!! CALLBACKS AREN'T ONLY MEANT FOR ASYNC CODES, THE MOMENT YOU PASS A FUNCTION TO A HIGHER ORDER FUNCTION AND THAT HIGHER ORDER FUNCTION CALLS IT, THAT'S A CALLBACK, GEEZ THESE INSTRUCTORS HAS ALL DIFFERENT OPINIONS FOR HOW THINGS WORK
// LESSON 1.5 - FAIL CALLBACKS - callbacks fail when the async code fail executing 

// LESSON X.1 - AJAX VS NODEJS 
// ajax is client side, obviously you don't make api request to the database in here
// nodejs is a server side, this is where you make api request to the database, but i prefer to do everything in here 