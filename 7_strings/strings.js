// Chapter 7: Strings

// Section 7.1: Basic Info and String Concatenation

// Strings in JavaScript can be enclosed in Single quotes 'hello' , Double quotes "Hello" and (from ES2015, ES6) in
// Template Literals (backticks) `hello` .

console.log("Hello");
console.log("Hello");
console.log(`Hello`);

// Strings can be created from other types using the String() function.

console.log(typeof String(2));
console.log(typeof String(() => {}));
console.log(typeof String(1.2 + "asd"));
console.log(typeof String(null));

// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
console.log(typeof (2).toString());
console.log(typeof (() => {}).toString());
console.log(typeof true.toString());
console.log(typeof {}.toString());

// Strings also can be created by using String.fromCharCode method.
console.log(String.fromCharCode(104, 101, 108, 108, 111));

// Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects unlike
// primitive strings.
var objectString = new String("Yes, I am a String object.");
console.log(objectString);

// Concatenating Strings
// String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
// String object prototype.
console.log("a".concat("abc def"));
console.log("abc" + " " + "def");

// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.
console.log("a" + 23 + (() => {}) + 8 * 9);

// String Templates
// Strings can be created using template literals (backticks) `hello` .
console.log(`hello`);

// With template literals, you can do string interpolation using ${variable} inside template literals:
let variables = 23 + 8;
console.log(`Hey man ${variables}`);

// You can use String.raw to get backslashes to be in the string without modiﬁcation.
console.log(String.raw`ab\c`);

// Section 7.2: Reverse String
const reverseString = (str) => str.split("").reverse("").join("");
console.log(reverseString("abcdef"));

// However, this will work only so long as the string being reversed does not contain surrogate pairs. Astral symbols,
// i.e. characters outside of the basic multilingual plane, may be represented by two code units, and will lead this
// naive technique to produce wrong results. Moreover, characters with combining marks (e.g. diaeresis) will appear
// on the logical "next" character instead of the original one it was combined with.

// https://github.com/mathiasbynens/esrever

console.log("?????.".split("").reverse("").join(""));

// While the method will work ﬁne for most languages, a truly accurate, encoding respecting algorithm for string
// reversal is slightly more involved. One such implementation is a tiny library called Esrever, which uses regular
// expressions for matching combining marks and surrogate pairs in order to perform the reversing perfectly.

// Using spread operator
// Version ≥ 6

function reverseSpreadString(str) {
  return [...String(str)].reverse().join("");
}

console.log(reverseSpreadString("stackoverflow"));
console.log(reverseSpreadString(137356));
console.log(reverseSpreadString([1, 2, 3]));

//Custom string reverse
function customStrRev(str) {
  let reqStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reqStr += str[i];
  }
  return reqStr;
}

console.log(customStrRev("zebra"));

//Section 7.3: Comparing Strings Lexicographically
// To compare strings alphabetically, use localeCompare() . This returns a negative value if the reference string is
// lexicographically (alphabetically) before the compared string (the parameter), a positive value if it comes
// afterwards, and a value of 0 if they are equal.

let word1 = "Hello";
let word2 = "Hello";

console.log(word1.localeCompare(word2));

// The > and < operators can also be used to compare strings lexicographically, but they cannot return a value of zero
// (this can be tested with the == equality operator). As a result, a form of the localeCompare() function can be
// written like so:
function strCmp(a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
}

console.log(strCmp(word1, word2));
console.log(strCmp("hello", "world")); // -1
console.log(strCmp("hello", "hello")); // 0
console.log(strCmp("world", "hello")); // 1

// This is especially useful when using a sorting function that compares based on the sign of the return value (such as
//     sort ).

let fruitsArr = ["banana", "apple", "Strawberrry"];

fruitsArr.sort((a, b) => a.localeCompare(b));
console.log(fruitsArr); //['apple', 'banana', 'Strawberrry']

fruitsArr.sort((a, b) => a.localeCompare(b));
console.log(fruitsArr); //['apple', 'banana', 'Strawberrry']

// Section 7.4: Access character at index in string
// Use charAt() to get a character at the speciﬁed index in the string.
let hello = "helo";
console.log(hello.charAt(3)); //o

// Alternatively, because strings can be treated like arrays, use the index via bracket notation.
console.log(hello[2]); //l

// To get the character code of the character at a speciﬁed index, use charCodeAt() .
console.log(hello.charCodeAt(2)); //108

// Note that these methods are all getter methods (return a value). Strings in JavaScript are immutable. In other
// words, none of them can be used to set a character at a position in the string.

// Section 7.5: Escaping quotes

// If your string is enclosed (i.e.) in single quotes you need to escape the inner literal quote with backslash \

let text = "L'albero means tree in Italian";
console.log(text); //L'albero means tree in Italian

//Same goes for double quotes:
text = 'I feel "high"';
console.log(text); //I feel "high"

// Special attention must be given to escaping quotes if you're storing HTML representations within a String, since
// HTML strings make large use of quotations i.e. in attributes:
let content = '<p class="special">Hello World!</p>';
// valid String
hello = '<p class="special">I\'d like to say "Hi"</p>'; // valid String

console.log(content);
console.log(hello);

// Quotes in HTML strings can also be represented using &apos; (or &#39; ) as a single quote and &quot; ( or &#34; ) as
// double quotes.

let hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>"; // valid String
hello = '<p class="special">I&apos;d like to say "Hi"</p>'; // valid String

console.log(hello); //<p class="special">I&apos;d like to say "Hi"</p>
console.log(hi); //<p class='special'>I'd like to say &quot;Hi&quot;</p>

// Note: The use of &apos; and &quot; will not overwrite double quotes that browsers can automatically place on
// attribute quotes. For example <p class=special> being made to <p class="special"> , using &quot; can lead to
// <p class=""special""> where \" will be <p class="special"> .

// Version ≥ 6
// If a string has ' and " you may want to consider using template literals (also known as template strings in previous ES6
// editions), which do not require you to escape ' and " . These use backticks ( ` ) instead of single or double quotes.

let x = `"Escaping " and ' can become very annoying`;
console.log(x); //"Escaping " and ' can become very annoying

//Section 7.6: Word Counter
/*

http://jsfiddle.net/RokoCB/5nfay7d1/206/

<textarea id="text"></textarea>
<div id="result"></div>
<script>
function wordCount( val ){
    var wom = val.match(/\S+/g);
    return {
        charactersNoSpaces : val.replace(/\s+/g, '').length,
        characters         : val.length,
        words              : wom ? wom.length : 0,
        lines              : val.split(/\r*\n/).length
    };
}


var textarea = document.getElementById("text");
var result   = document.getElementById("result");

textarea.addEventListener("input", function(){
  var v = wordCount( this.value );
  result.innerHTML = (
      "<br>Characters (no spaces):  "+ v.charactersNoSpaces +
      "<br>Characters (and spaces): "+ v.characters +
      "<br>Words: "+ v.words +
      "<br>Lines: "+ v.lines
  );
}, false);
</script>

*/

// Say you have a <textarea> and you want to retrieve info about the number of:
// Characters (total)
// Characters (no spaces)
// Words
// Lines

function wordCount(val) {
  let wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, "").length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length,
  };
}

let someMultilineText = `hey theis sdjfsjf sdjfj asjf.`;
console.log(JSON.stringify(wordCount(someMultilineText))); //{"charactersNoSpaces":25,"characters":29,"words":5,"lines":1}

// Section 7.7: Trim whitespace

console.log(`  some whitespaced string`); //  some whitespaced string
console.log(`  some whitespaced string`.trim()); //some whitespaced string

// Many JavaScript engines, but not Internet Explorer, have implemented non-standard trimLeft and trimRight
// methods. There is a proposal, currently at Stage 1 of the process, for standardised trimStart and trimEnd
// methods, aliased to trimLeft and trimRight for compatibility.

// Stage 1 proposal
console.log("   this is me  ".trimStart(), "!"); //this is me  !
console.log("   this is me  ".trimEnd()); //   this is me

// Non-standard methods, but currently implemented by most engines
console.log("   this is me  ".trimLeft(), "!"); //this is me  !
console.log("   this is me  ".trimRight()); //   this is me

// Section 7.8: Splitting a string into an array
// Use .split to go from strings to an array of the split substrings:

let s = "one, two, three, four, five";
console.log(s.split(",")); //['one', ' two', ' three', ' four', ' five']

// Use the array method .join to go back to a string:
console.log(s.split(",").join("--")); //one-- two-- three-- four-- five

// Section 7.9: Strings are unicode
// All JavaScript strings are unicode!
// There are no raw byte or binary strings in JavaScript. To eﬀectively handle binary data, use Typed Arrays.
s = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5)); //8710

// Section 7.10: Detecting a string
// To detect whether a parameter is a primitive string, use typeof :

let myStr = "my string";
let myInt = 21;
let myObj = {};
console.log(typeof myStr === "string"); //true
console.log(typeof myInt === "string"); //false
console.log(typeof myObj === "string"); //false

// A good reason to use typeof is if the variable may be undefined. A good reason to use instanceof is if the variable may be null.
// If you ever have a String object, via new String("somestr") , then the above will not work. In this instance, we can
// use instanceof :

let aStringObj = new String("my string");
console.log(aStringObj instanceof String); // true

// To cover both instances, we can write a simple helper function:

function customIsString(val) {
  return typeof val === "string" || val instanceof String;
}

console.log(customIsString(aStringObj)); //true
console.log(customIsString(myStr)); //true
console.log(customIsString(myObj)); //false
console.log(customIsString(myInt)); //false

// A more robust solution is to not detect a string at all, rather only check for what functionality is required. For
// example:

let aString = "Primitive String";
// Generic check for a substring method
if (aString.substring) {
}
// Explicit check for the String substring prototype method
if (aString.substring === String.prototype.substring) {
  aString.substring(0);
}

// Section 7.11: Substrings with slice

// Use .slice() to extract substrings given two indices:

s = "0123456789abcdefg";
console.log(s.slice(0, 5)); // "01234"
console.log(s.slice(5, 6)); // "5"

// Given one index, it will take from that index to the end of the string:
console.log(s.slice(10)); //abcdefg

// Section 7.12: Character code
// The method charCodeAt retrieves the Unicode character code of a single character:

let charCode = "µ".charCodeAt();
console.log(charCode); // The character code of the letter µ is 181

// To get the character code of a character in a string, the 0-based position of the character is passed as a parameter
// to charCodeAt :

charCode = "ABCDE".charCodeAt(3);
console.log(charCode); //68
console.log("ABCDE".charCodeAt()); //65 gives first character unicode

// Version ≥ 6
// Some Unicode symbols don't ﬁt in a single character, and instead require two UTF-16 surrogate pairs to encode.
// This is the case of character codes beyond 216 - 1 or 63553. These extended character codes or code point values
// can be retrieved with codePointAt :
// The Grinning Face Emoji has code point 128512 or 0x1F600
let codePoint = "?????".codePointAt();
console.log(codePoint); //63

// Section 7.13: String Representations of Numbers

// JavaScript has native conversion from Number to its String representation for any base from 2 to 36.
// The most common representation after decimal (base 10) is hexadecimal (base 16), but the contents of this section
// work for all bases in the range.
// In order to convert a Number from decimal (base 10) to its hexadecimal (base 16) String representation the toString
// method can be used with radix 16 .

// base 10 Number
let b10 = 12;

// base 16 String representation
console.log(b10.toString(16));

// If the number represented is an integer, the inverse operation for this can be done with parseInt and the radix 16
// again

// base 16 String representation
let b16 = "c";

// base 10 Number
console.log(parseInt(b16, 16));

// To convert an arbitrary number (i.e. non-integer) from its String representation into a Number, the operation must be
// split into two parts; the integer part and the fraction part.
// Version ≥ 6

b16 = "3.243f3e0370cdc";
// Split into integer and fraction parts
let [i16, f16] = b16.split(".");
console.log(i16, f16);

// Calculate base 10 integer part
let i10 = parseInt(i16, 16); // 3
console.log(i10);

// Calculate the base 10 fraction part
let f10 = parseInt(f16, 16) / Math.pow(16, f16.length); // 0.14158999999999988
console.log(f10);

// Put the base 10 parts together to find the Number
b10 = i10 + f10; // 3.14159
console.log(b10);

// Note 1: Be careful as small errors may be in the result due to diﬀerences in what is possible to be represented in
// diﬀerent bases. It may be desirable to perform some kind of rounding afterwards.
// Note 2: Very long representations of numbers may also result in errors due to the accuracy and maximum values
// of Numbers of the environment the conversions are happening in.

// Section 7.14: String Find and Replace Functions
// To search for a string inside a string, there are several functions:
// indexOf( searchString ) and lastIndexOf( searchString )

// indexOf() will return the index of the ﬁrst occurrence of searchString in the string. If searchString is not found,
// then -1 is returned.

console.log("abc"[-1]); //undefined
let string = "Hello, World!";
console.log(string.indexOf("l")); //2
console.log(string.indexOf("foo")); //-1

// Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.

console.log(string.lastIndexOf("l")); //10
console.log(string.lastIndexOf("foo")); //-1

//includes( searchString, start )
// includes() will return a boolean that tells whether searchString exists in the string, starting from index start
// (defaults to 0). This is better than indexOf() if you simply need to test for existence of a substring.

string = "Hello World!";

console.log(string.includes("Hello")); //true
console.log(string.includes("World")); //true
console.log(string.includes("World!")); //true
console.log(string.includes("world")); //false
console.log(string.includes("world!")); //false
console.log(string.includes("World !")); //false

// replace( regexp|substring, replacement|replaceFunction )

// replace() will return a string that has all occurrences of substrings matching the RegExp regexp or string
// substring with a string replacement or the returned value of replaceFunction .
// Note that this does not modify the string in place, but returns the string with replacements.

string = "Hello, World!";
string = string.replace("Hello", "Bye");
console.log(string); // "Bye, World!"
string = string.replace(/W.{3}d/g, "Universe");
console.log(string); // "Bye, Universe!"

// replaceFunction can be used for conditional replacements for regular expression objects (i.e., with use with
//   regexp ). The parameters are in the following order:

// Parameter - Meaning
// match - the substring that matches the entire regular expression
// g1 , g2 , g3 , ... - the matching groups in the regular expression
// offset - the oﬀset of the match in the entire string
// string - the entire string

// Note that all parameters are optional.
string = "heLlo, woRlD!";
string = string.replace(/([a-zA-Z])([a-zA-Z]+)/g, function (match, g1, g2) {
  return g1.toUpperCase() + g2.toLowerCase();
});
console.log(string); // "Hello, World!"

// Section 7.15: Find the index of a substring inside a string

// The .indexOf method returns the index of a substring inside another string (if exists, or -1 if otherwise)

console.log("hello world".indexOf("ld")); //9

// .indexOf also accepts an additional numeric argument that indicates on what index should the function start
// looking

console.log("harr dee harr dee harr".indexOf("harr", 10)); //18

// You should note that .indexOf is case sensitive
console.log("Hellow World".indexOf("WOR")); //-1

// Section 7.16: String to Upper Case
// String.prototype.toUpperCase():
console.log("hello".toUpperCase()); //HELLO

// Section 7.17: String to Lower Case
// String.prototype.toLowerCase()
console.log("WORLD".toLowerCase()); //world

//Section 7.18: Repeat a String
// Version ≥ 6
// This can be done using the .repeat() method:
console.log("Abc".repeat(5)); //AbcAbcAbcAbcAbc
console.log("Abc".repeat(0));
// Version < 6
// In the general case, this should be done using a correct polyﬁll for the ES6 String.prototype.repeat() method.
// Otherwise, the idiom new Array(n + 1).join(myString) can repeat n times the string myString :
let myString = "abc";
let n = 3;
console.log(new Array(n + 1).join(myString)); //abcabcabc
console.log("Abc".repeat(-1)); //Uncaught RangeError: Invalid count value: -1 at String.repeat (<anonymous>)
