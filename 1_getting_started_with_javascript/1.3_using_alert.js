// The alert method displays a visual alert box on screen. The alert method parameter is displayed to the user in plain text:

var message = "Hello world!";
window.alert(message);

//Because window is the global object, you can call also use the following shorthand:
alert("Hi my guy!");

//The alert method is technically a property of window object, but since all window properties are automatically global variables, we can use alert as a global variable instead of as a property of window - meaning you can directly use alert() instead of window.alert() .

//Unlike using console.log , alert acts as a modal prompt meaning that the code calling alert will pause until the prompt is answered. Traditionally this means that no other JavaScript code will execute until the alert is dismissed:

alert("Pause!");
console.log("Alert was dismissed");

// However the speciﬁcation actually allows other event-triggered code to continue to execute even though a modal
// dialog is still being shown. In such implementations, it is possible for other code to run while the modal dialog is
// being shown.
// More information about usage of the alert method can be found in the modals prompts topic.
// The use of alerts is usually discouraged in favour of other methods that do not block users from interacting with the
// page - in order to create a better user experience. Nevertheless, it can be useful for debugging.
// Starting with Chrome 46.0, window.alert() is blocked inside an <iframe> unless its sandbox attribute has the value
// allow-modal.

{
  /* <iframe src="demo_iframe_sandbox.htm" sandbox="allow-modals"></iframe> */
}

// The alert dialog should be used for messages which do not require any response on the part of the user, other than the acknowledgement of the message.

// Dialog boxes are modal windows - they prevent the user from accessing the rest of the program's interface until the dialog box is closed. For this reason, you should not overuse any function that creates a dialog box (or modal window).

// Alternatively <dialog> element can be used to display alerts.
