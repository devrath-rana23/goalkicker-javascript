///DOM stands for Document Object Model. It is an object-oriented representation of structured documents like XML and HTML.///

//Output text on a webpage by targeting and manipulating DOM element using element id and setting element's textContent property

document.getElementById("paragraph").textContent = "Hello, World";

///createElement()///

//we can use createElement property to create new DOM element using javascript

var element = document.createElement("p");
element.textContent = "My world!";
document.body.appendChild(element); //add the newly created element to the DOM

//PHIR INSPECT KRKE HTML DOM DIKHADENA

//Note js se hum unhi elements ko manipulate krskte joo already DOM mein create hoochuke hoo.

//Isiliye aapko apna script file body ke end mein likhna chiye yaa phir apni file ka javascript code koo onload event listener call krke likhna chiye jisse aapka code tabhi execute hoo yaa delay hoo jbtk whole content on your page has been loaded.

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

//third way to make sure aapka Pura DOM load hoo chuka hai

var wrapFn = (function () {
  console.log("MYMY MIYA");
})();
setTimeout(wrapFn, 10); //this will delay the execution of your jscode for 10 milli seconds to given enough time for your DOM to load completely
