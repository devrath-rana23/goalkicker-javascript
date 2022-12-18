/*
variable_name : {Required} The name of the variable: used when calling it.

= : [Optional] Assignment (deﬁning the variable)

value : {Required when using Assignment} The value of a variable [default: undeﬁned]

Variables are what make up most of JavaScript. These variables make up things from numbers to objects, which are all over JavaScript to make one's life much easier.
*/

///// Deﬁning a Variable /////
//This is an example of deﬁning variables. This variable is called a "string" because it has ASCII characters ( A-Z , 0-9 , !@#$ , etc.)

var myVariable = "This is a variable!";

//// Using a Variable ////
//Here, we deﬁned a number called "number1" which was equal to 5. However, on the second line, we changed the value to 3. To show the value of a variable, we log it to the console

var number1 = 5;
number1 = 3;

console.log(number1);

//To add, subtract, multiply, divide, etc., we do like so:

number1 = number1+5;//8
number1 -= 6;//2

var number2 = number1 * 10;//20
var number3 = number2/number1;//10

//We can also add strings which will concatenate them, or put them together. For example:

var myString = "I am a "+ "string!";// I am a string!

//// Types of variables ///

var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define it to anything yet
window.alert(aRandomVariable); // undefined
var myNull = null; // null
// etc...

/// Arrays and Objects ///

var myArray = []; // empty array

//An array is a set of variables. For example:

var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];
myArray = ["zero", "one", "two"];
console.log(myArray[0]); // 0 is the first element of an array
// in this case, the value would be "zero"
myArray = ["John Doe", "Billy"];
elementNumber = 1;
console.log(myArray[elementNumber]); // Billy

//An object is a group of values; unlike arrays, we can do something better than them:

myObject = {};
john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
billy = {
firstname: "Billy",
lastname: undefined,
fullname: "Billy"
};
console.log(john.fullname); // John Doe
console.log(billy.firstname); // Billy

//Rather than making an array ["John Doe", "Billy"] and calling myArray[0] , we can just call john.fullname and billy.fullname .