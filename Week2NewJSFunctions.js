// Task 1: Function Declaration
 
function userProfile(name) {
  console.log("Hello,"+ name +"!");
}
userProfile("Mareeswari")

// Task 2: Arrow Function
const double=(num)=>{
    return num*2;
}

console.log(double(3));

// Task 3:Anonymous Function
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
// after 2 seconds.

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
},2000)

// Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
// that should print “Call Back Function” after 3 seconds.
// Call the `getUserData` function and log message using the callback function.

function getUserData(callback){
    setTimeout(function(){
        console.log("inside settimeout function")
        callback();
    },3000);
}

function samplecallbackfunction(){
    console.log("sample callback function");
}

getUserData(samplecallbackfunction)