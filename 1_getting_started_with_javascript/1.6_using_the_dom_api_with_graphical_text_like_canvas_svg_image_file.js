///Using the DOM API (with graphical text: Canvas, SVG, or image ﬁle)///

///Using canvas elements///

// HTML provides the canvas element for building raster-based images.
// First build a canvas for holding image pixel information.

var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 250;

// Then select a context for the canvas, in this case two-dimensional:

var ctx = canvas.getContext("2d");

//Then set properties related to the text:

ctx.font = "30px Cursive";
ctx.fillText("Hello world!", 50, 50);

//Then insert the canvas element into the page to take eﬀect:

document.body.appendChild(canvas);

///Using SVG///

// SVG is for building scalable vector-based graphics and can be used within HTML.
// First create an SVG element container with dimensions:

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.width = 500;
svg.height = 50;

// Then build a text element with the desired positioning and font characteristics:

var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", "0");
text.setAttribute("y", "50");
text.style.fontFamily = "Times New Roman";
text.style.fontSize = "50";

//Then add the actual text to display to the text element:

text.textContent = "Hello world!";

//Finally add the text element to our svg container and add the svg container element to the HTML document:

svg.appendChild(text);
document.body.appendChild(svg);

///Image ﬁle///

// If you already have an image ﬁle containing the desired text and have it placed on a server, you can add the URL of
// the image and then add the image to the document as follows:

var img = new Image();
img.src = "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg";
document.body.appendChild(img);
