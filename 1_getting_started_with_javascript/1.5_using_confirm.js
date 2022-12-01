///Using window.conﬁrm()///

//result = window.confirm(message);

var message = "Are you sure you want to delete this?";

var deleteConfirm = window.confirm(message); //message is optional

if (deleteConfirm) {
  console.log("Clicked OK!");
} else {
  console.log("Clicked Cancel!");
}

// The argument is optional and not required by the speciﬁcation.
// Dialog boxes are modal windows - they prevent the user from accessing the rest of the program's interface
// until the dialog box is closed. For this reason, you should not overuse any function that creates a dialog box
// (or modal window). And regardless, there are very good reasons to avoid using dialog boxes for
// conﬁrmation.
// Starting with Chrome 46.0 this method is blocked inside an <iframe> unless its sandbox attribute has the
// value allow-modal.
// It is commonly accepted to call the conﬁrm method with the window notation removed as the window object
// is always implicit. However, it is recommended to explicitly deﬁne the window object as expected behavior
// may change due to implementation at a lower scope level with similarly named methods.
