/* 
 * In Chromium console from SVG file tab.
 */

// Text and circles nodes 
var texts = document.getElementsByTagName("text"),
    circles = document.getElementsByTagName("circle"),
    l = texts.length,
    text, circle, title;

// Elements and labels have tve the same order
for (var k=0; k<l; k++) {
  // Current text and circle nodes
  text = texts[k];
  circle = circles[k];
  // New title element
  title = document.createElement("title");
  // Copy text content from text to title
  title.textContent = text.textContent;
  // Append title node to circle
  circle.appendChild(title);
}

// Delete text nodes
var last;
while (l = document.getElementsByTagName("text").length) {
  last = document.getElementsByTagName("text")[l-1];
  last.parentNode.removeChild(last);
}

/*
 * Then copy as HTML the svg element (root element) and paste it in a new file .svg.
 * That's it!
 */
