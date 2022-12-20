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

///Section 5.1: Measuring time - console.time()///

// console.time() can be used to measure how long a task in your code takes to run.

// Calling console.time([label]) starts a new timer. When console.timeEnd([label]) is called, the elapsed time, in milliseconds, since the original .time() call is calculated and logged. Because of this behavior, you can call .timeEnd() multiple times with the same label to log the elapsed time since the original .time() call was made.

console.time('response in');
alert('Click to continue');
console.timeEnd('response in');
alert('One more time');
console.timeEnd('response in');

/*
will output:
response in: 774.967ms
response in: 1402.199ms
*/


var elms = document.getElementsByTagName('*'); //select all elements on the page
console.time('Loop time');
for (var i = 0; i < 5000; i++) {
for (var j = 0, length = elms.length; j < length; j++) {
// nothing to do ...
}
}
console.timeEnd('Loop time');

/*
will output:
Loop time: 40.716ms
*/

///Section 5.2: Formatting console output///

// Many of the console's print methods can also handle C-like string formatting, using % tokens:

console.log('%s has %d points', 'Sam', 100);

// The full list of format speciﬁers in JavaScript is:

/*

Speciﬁer -> Output

%s -> Formats the value as a string
%i or %d -> Formats the value as an integer
%f -> Formats the value as a ﬂoating point value
%o -> Formats the value as an expandable DOM element
%O -> Formats the value as an expandable JavaScript object
%c -> Applies CSS style rules to the output string as speciﬁed by the second parameter
*/

///Advanced styling///

// When the CSS format speciﬁer ( %c ) is placed at the left side of the string, the print method will accept a second parameter with CSS rules which allow ﬁne-grained control over the formatting of that string:

console.log('%cHello world!', 'color: blue; font-size: xx-large');

//It is possible to use multiple %c format speciﬁers:

/*

any substring to the right of a %c has a corresponding parameter in the print method;

this parameter may be an empty string, if there is no need to apply CSS rules to that same substring;

if two %c format speciﬁers are found, the 1st (encased in %c ) and 2nd substring will have their rules deﬁned in
the 2nd and 3rd parameter of the print method respectively.

if three %c format speciﬁers are found, then the 1st, 2nd and 3rd substrings will have their rules deﬁned in
the 2nd , 3rd and 4th parameter respectively, and so on...
*/

console.log("%cHello %cWorld%c!!", // string to be printed
"color: blue;", // applies color formatting to the 1st substring
"font-size: xx-large;", // applies font formatting to the 2nd substring
"/* no CSS rule*/" // does not apply any rule to the remaining substring
);

///Using groups to indent output///

/*

Output can be indented and enclosed in a collapsible group in the debugging console with the following methods:

console.group() : creates an expanded group of entries that can be collapsed in order to hide the entries
after this method is invoked.

The indentation can be removed for posterior entries by using the following method:

console.groupEnd(): exits the current group, allowing newer entries to be printed in the parent group after
this method is invoked.

Groups can be cascaded to allow multiple indented output or collapsible layers within each other:

*/

console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");

///Section 5.5: Tabulating values - console.table()///

//In most environments, console.table() can be used to display objects and arrays in a tabular format.

console.table(['Hello', 'world']);

console.table({foo: 'bar', bar: 'baz'});

var personArr = [
  {
  "personId": 123,
  "name": "Jhon",
  "city": "Melbourne",
  "phoneNo": "1234567890"
  },
  {
  "personId": 124,
  "name": "Amelia",
  "city": "Sydney",
  "phoneNo": "1234567890"
  },
  {
  "personId": 125,
  "name": "Emily",
  "city": "Perth",
  "phoneNo": "1234567890"
  },
  {
  "personId": 126,
  "name": "Abraham",
  "city": "Perth",
  "phoneNo": "1234567890"
  }
  ];
  console.table(personArr, ['name', 'personId']);

  ///Section 5.6: Counting - console.count()///

  // console.count([obj]) places a counter on the object's value provided as argument. Each time this method is invoked, the counter is increased (with the exception of the empty string '' ). A label together with a number is displayed in the debugging console according to the following format:

  //[label]: X

  // label represents the value of the object passed as argument and X represents the counter's value.

  // An object's value is always considered, even if variables are provided as arguments:

  var o1 = 1, o2 = '2', o3 = "";
console.count(o1);
console.count(o2);
console.count(o3);
console.count(1);
console.count('2');
console.count('');

//Strings with numbers are converted to Number objects:

console.count(42.3);
console.count(Number('42.3'));
console.count('42.3');

//Functions point always to the global Function object:

console.count(console.constructor);
console.count(function(){});
console.count(Object);
var fn1 = function myfn(){};
console.count(fn1);
console.count(Number);


// Certain objects get speciﬁc counters associated to the type of object they refer to:

console.count(undefined);
console.count(document.Batman);
var obj;
console.count(obj);
console.count(Number(undefined));
console.count(NaN);
console.count(NaN+3);
console.count(1/0);
console.count(String(1/0));
console.count(window);
console.count(document);
console.count(console);
console.count(console.__proto__);
console.count(console.constructor.prototype);
console.count(console.__proto__.constructor.prototype);
console.count(Object.getPrototypeOf(console));
console.count(null);

//Empty string or absence of argument

// If no argument is provided while sequentially inputting the count method in the debugging console, an empty string is assumed as parameter, i.e.:

console.count();
console.count('');
console.count("");

// Section 5.7: Clearing the console - console.clear()

// You can clear the console window using the console.clear() method. This removes all previously printed messages in the console and may print a message like "Console was cleared" in some environments.

///Section 5.8: Displaying objects and XML interactively - console.dir(), console.dirxml()///

// console.dir(object) displays an interactive list of the properties of the speciﬁed JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

var myObject = {
  "foo":{
  "bar":"data"
  }
  };
  console.dir(myObject);

  // console.dirxml(object) prints an XML representation of the descendant elements of object if possible, or the JavaScript representation if not. Calling console.dirxml() on HTML and XML elements is equivalent to calling console.log() .

  console.dirxml(document)

  console.log(document)

  var myObject = {
    "foo":{
    "bar":"data"
    }
    };
    console.dirxml(myObject);

    // Section 5.9: Debugging with assertions - console.assert()

    // Writes an error message to the console if the assertion is false . Otherwise, if the assertion is true , this does nothing.

    console.assert('one' === 1);

    // Multiple arguments can be provided after the assertion–these can be strings or other objects–that will only be printed if the assertion is false :

    console.assert(true, "Testing assertion...", NaN, undefined, Object);
    console.assert(false, "Testing assertion...", NaN, undefined, Object);

    //console.assert does not throw an AssertionError (except in Node.js), meaning that this method is incompatible with most testing frameworks and that code execution will not break on a failed assertion.
