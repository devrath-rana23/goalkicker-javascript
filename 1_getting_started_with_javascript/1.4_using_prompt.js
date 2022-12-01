///Using window.prompt()///

//An easy way to get an input from a user is by using the prompt() method.

var text = "Enter Age";
var defaultValue = 18;

var age = prompt(text, [defaultValue]);

console.log(age);

//The return value of prompt is always a string, unless the user clicks Cancel , in which that case it returns null . Safari is an exception in that when the user clicks Cancel, the function returns an empty string. From there, you can convert the return value to another type, such as an integer.

// While the prompt box is displayed, the user is prevented from accessing other parts of the page, since dialog boxes are modal windows. Starting with Chrome 46.0 this method is blocked inside an <iframe> unless its sandbox attribute has the value allow-modal.
