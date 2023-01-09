// typeof is the 'oﬃcial' function that one uses to get the type in JavaScript, however in certain cases it might yield
// some unexpected results ...

// Strings
console.log(typeof String(123));
console.log(typeof Date(2023, 10, 10));

//Numbers
console.log(typeof 42);

// Bool
console.log(typeof true);

// Object
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof /aaa/);
console.log(typeof Error());

// Function
console.log(typeof function () {});

// undefined
var var1;
console.log(typeof var1);

// Section 6.2: Finding an object's class
// To ﬁnd whether an object was constructed by a certain constructor or one inheriting from it, you can use the
// instanceof command:

//We want this function to take the sum of the numbers passed to it
//It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6

function sum(...argumentss) {
  if (argumentss.length === 1) {
    const [firstArgument] = argumentss;
    if (firstArgument instanceof Array) {
      //it means case where sum([1, 2, 3])-> first argument is itself an array
      return sum(...firstArgument);
    }
  }
  return argumentss.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3));
//6
console.log(sum([1, 2, 3])); //6
console.log(sum(4));
//4

// Note that primitive values are not considered instances of any class:

console.log(2 instanceof Number);
console.log("absc" instanceof String);
console.log(true instanceof Boolean);
console.log(Symbol() instanceof Symbol);

// Every value in JavaScript besides null and undefined also has a constructor property storing the function that was
// used to construct it. This even works with primitives.

//Whereas instanceof also catches instances of subclasses,
//using obj.constructor does not

console.log([] instanceof Object, [] instanceof Array);
console.log([].constructor === Object, [].constructor === Array);

function isNumber(value) {
  if (value === null || value === undefined) return false;
  return value.constructor === Number;
}

console.log(
  isNumber(null),
  isNumber(undefined),
  isNumber(NaN),
  isNumber([]),
  isNumber({}),
  isNumber(0),
  isNumber(Number("0.223")),
  isNumber(23)
);

// Section 6.3: Getting object type by constructor name

// When one with typeof operator one gets type object it falls into somewhat wast category...
// In practice you might need to narrow it down to what sort of 'object' it actually is and one way to do it is to use
// object constructor name to get what ﬂavour of object it actually is: Object.prototype.toString.call(yourObject)

// String
console.log(Object.prototype.toString.call("string"));

// Number
console.log(Object.prototype.toString.call(42));

// Bool
console.log(Object.prototype.toString.call(true));

// Object
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(Object()));

// Function
console.log(Object.prototype.toString.call(() => {}));

// Date
console.log(Object.prototype.toString.call(new Date(22, 10, 2222)));

// Regex
console.log(Object.prototype.toString.call(/abc/));
console.log(Object.prototype.toString.call(new RegExp("abc")));

// Array
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(new Array()));

// Null
console.log(Object.prototype.toString.call(null));

// Undefined
console.log(Object.prototype.toString.call(undefined));

// Error
console.log(Object.prototype.toString.call(Error()));
