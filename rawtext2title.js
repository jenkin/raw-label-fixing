/* 
 * In Chromium console from SVG file tab.
 */

// Text nodes 
var texts = document.getElementsByTagName("text");

for (var k in texts) {
  // Current text node
  var text = texts[k];
  // If text is a node
  if (typeof text.getAttribute === "function") {
    // Text transform attribute
    var transform = text.getAttribute("transform");
    // Text and circle are linked by the same transform attribute!
    var circle = document.querySelectorAll("circle[transform='"+transform+"']")[0];
    // New title element
    var title = document.createElement("title");
    // Copy text content from text to title
    title.textContent = text.textContent;
    // Append title node to circle
    circle.appendChild(title);
    // Remove old text node
    text.parentNode.removeChild(text);
  }
}

/*
 * Then copy as HTML the svg element (root element) and paste it in a new file .svg.
 * That's it!
 */
