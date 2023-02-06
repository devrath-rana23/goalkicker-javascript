// Chapter 10: Comparison Operations
// Section 10.1: Abstract equality / inequality and type conversion

// The Problem
// The abstract equality and inequality operators ( == and != ) convert their operands if the operand types do not
// match. This type coercion is a common source of confusion about the results of these operators, in particular, these
// operators aren't always transitive as one would expect.

console.log("" == 0); //true A
console.log("0" == 0); //true A
console.log("0" == ""); //false B
console.log(false == "0"); //true
console.log(false == 0); //true
console.log("" != 0); //false A
console.log("0" != 0); //false A
console.log("" != "0"); //true B
console.log(false != "0"); //false
console.log(false != 0); //false
console.log(Number("")); //0
console.log(Number("0")); //0
console.log(Number(false)); //0

// The Solution
// In the statement false B , both the operands are strings ( "" and "0" ), hence there will be no type conversion and
// since "" and "0" are not the same value, "" == "0" is false as expected.
// One way to eliminate unexpected behavior here is making sure that you always compare operands of the same
// type. For example, if you want the results of numerical comparison use explicit conversion:

const test = (a, b) => Number(a) == Number(b);

console.log(test("", 0)); //true
console.log(test("0", 0)); //true
console.log(test("", "0")); //true
console.log(test("abc", "abc")); //false as operands are not numbers
console.log(test(NaN, NaN)); //false due to same as above reason

// Or, if you want string comparison:
const stringComparisiontest = (a, b) => String(a) == String(b);

console.log(stringComparisiontest("", 0)); // false;
console.log(stringComparisiontest("0", 0)); // true
console.log(stringComparisiontest("", "0")); // false;

// Side-note: Number("0") and new Number("0") isn't the same thing! While the former performs a type conversion,
// the latter will create a new object. Objects are compared by reference and not by value which explains the results
// below.

console.log(Number("0") == Number("0")); //true
console.log(new Number("0") == new Number("0")); //false
console.log(new Number("0") == Number("0")); //true

// Finally, you have the option to use strict equality and inequality operators which will not perform any implicit type
// conversions.

console.log("" === 0); // false
console.log(0 === "0"); // false
console.log("" === "0"); // false

/*
Which equals operator (== vs ===) should be used in JavaScript comparisons?.
http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons

The lack of transitivity is alarming. My advice is to never use the evil twins. Instead, always use === and !==. All of the comparisons just shown produce false with the === operator.

*/
// Section 10.2: NaN Property of the Global Object
// NaN ("Not a Number") is a special value deﬁned by the IEEE Standard for Floating-Point Arithmetic, which is used when
// a non-numeric value is provided but a number is expected ( 1 * "two" ), or when a calculation doesn't have a valid
// number result ( Math.sqrt(-1) ).
// Any equality or relational comparisons with NaN returns false , even comparing it with itself. Because, NaN is
// supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other
// nonsensical computations.
// https://en.wikipedia.org/wiki/IEEE_754

console.log(1 * "two" === NaN); //false
console.log(NaN === 0); //false
console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); //false
console.log(NaN < 0); //false
console.log(NaN > 0); //false
console.log(NaN >= NaN); //false
console.log(NaN >= "two"); //false

// Non-equal comparisons will always return true :

console.log(NaN !== 0); //true
console.log(NaN !== NaN); //true

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(0 / 0)); //true
console.log(Number.isNaN("str" - 12)); //true
console.log(Number.isNaN(24)); //false
console.log(Number.isNaN("24")); //false
console.log(Number.isNaN(1 / 0)); //false
console.log(Number.isNaN(Infinity)); //false
console.log(Number.isNaN("str")); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN({})); //false

// Version < 6
// You can check if a value is NaN by comparing it with itself:
// true for NaN, false for any other value
let value = 2;
console.log(value !== value); //false
value = "ac";
console.log(value !== value); //false
value = NaN;
console.log(value !== value); //true

// You can use the following polyﬁll for Number.isNaN() :
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return value !== value;
  };

// By contrast, the global function isNaN() returns true not only for NaN , but also for any value or expression that
// cannot be coerced into a number:
console.log(isNaN(NaN)); //true
console.log(isNaN(0 / 0)); //true
console.log(isNaN("str" - 12)); //true
console.log(isNaN(24)); //false
console.log(isNaN("24")); //false
console.log(isNaN(Infinity)); //false
console.log(isNaN("str")); //true
console.log(isNaN(undefined)); //true
console.log(isNaN({})); //true

// ECMAScript deﬁnes a “sameness” algorithm called SameValue which, since ECMAScript 6, can be invoked with
// Object.is . Unlike the == and === comparison, using Object.is() will treat NaN as identical with itself (and -0 as not
// identical with +0 ):
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(+0, 0)); //true
console.log(NaN === NaN); //false
console.log(+0 === 0); //true

// Version < 6
// You can use the following polyﬁll for Object.is() (from MDN):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill_for_non-ES6_browsers

if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}

// Points to note
// NaN itself is a number, meaning that it does not equal to the string "NaN", and most importantly (though perhaps
// unintuitively):

console.log(typeof NaN === "number"); //true

// Section 10.3: Short-circuiting in boolean operators
// The and-operator ( && ) and the or-operator ( || ) employ short-circuiting to prevent unnecessary work if the outcome
// of the operation does not change with the extra work.
// In x && y , y will not be evaluated if x evaluates to false , because the whole expression is guaranteed to be false .
// In x || y , y will not be evaluated if x evaluated to true , because the whole expression is guaranteed to be true .
// Example with functions
// Take the following two functions:

function T() {
  // True
  console.log("T");
  return true;
}
function F() {
  // False
  console.log("F");
  return false;
}

console.log(T() && F()); // false
console.log(F() && T()); // false
console.log(T() || F()); // true
console.log(F() || T()); // true

// Short-circuiting to prevent errors
// obj; // object has value of undefined

// if (obj.property) {
// } // TypeError: Cannot read property 'property' of undefined

// if (obj.property && obj !== undefined) {
// } // Line A TypeError: Cannot read property 'property' of
// undefined

// Line A: if you reverse the order the ﬁrst conditional statement will prevent the error on the second by not executing
// it if it would throw the error
// if (obj !== undefined && obj.property) {
// } // no error thrown

// But should only be used if you expect undefined

// if (typeof obj === "object" && obj.property) {
// } // safe option but slower
// Short-circuiting to provide a default value
// The || operator can be used to select either a "truthy" value, or the default value.
// For example, this can be used to ensure that a nullable value is converted to a non-nullable value:
let nullableObj = null;
let obj = nullableObj || {};
// this selects {}
let nullableObj2 = { x: 5 };
let obj2 = nullableObj2 || {}; // this selects {x: 5}
// Or to return the ﬁrst truthy value
let truthyValue = { x: 10 };
console.log(truthyValue || {}); // will return {x: 10}
// The same can be used to fall back multiple times:
// envVariable || configValue || defaultConstValue; // select the first "truthy" of these
// Short-circuiting to call an optional function
// The && operator can be used to evaluate a callback, only if it is passed:
function myMethod(cb) {
  // This can be simplified
  if (cb) {
    cb();
  }
  // To this
  cb && cb();
}

// Of course, the test above does not validate that cb is in fact a function and not just an
// Object / Array / String / Number .

// Section 10.4: Null and Undeﬁned