////// Show this tutorial code in console itself and then write the explaination in paint by taking a screen shot and pasting it in paint

////// console.log() is a logging method
//It is used for debugging purpose

//In the example below, the console.log() function prints Hello, World! to the console and returns undefined (shown below in the console output window). This is because console.log() has no explicit return value.

console.log("Hello World!");

let isNum = "0";
if(isNum){
    console.log("Yes");
}else{
    console.log("No");
}

////// Logging variables ////

var foo = "kar";
console.log(foo);

//Spaces will be automatically added between each argument during concatenation using comma as separators

var thisVar = "First value";
var thatVar = "Second value";
console.log("thisVar:", thisVar, "thatVar:", thatVar);

//////Placeholders//////

//console.log() can be used in combination with placeholders

var hello = "Hello",
  world = "World";
console.log("%s, %s %f!", hello, world, 5.7);

/////Logging Objects//////

//useful for logging JSON response from API calls

console.log({
  Email: "",
  Groups: {},
  Id: 38,
  isHiddenInUI: false,
  isSiteAdmin: false,
  LoginName: "i:0#.w|virtualdomain\\user2",
  PrincipalType: 1,
  Title: "user2",
});

///Logiing HTML elements///

//You have the ability to log any element which exists within the DOM. In this case we log the body element:

console.log(document.body);
