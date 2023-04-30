
const element = document.getElementById("parent");
const words = document.getElementById("words");
const content = words.innerHTML;

let startIndex = 0;  //first char to edit - should be zero
let endIndex = 40;  //last char to edit in batch 
let indexChange = endIndex;  //size of starting batch - same as endIndex
let indexIncrementChange = 4; //how many more characters are added to the change each loop
let staticFontSize = 50;  //font size of first batch
let fontChange = 1.3;  //font change each batch
let minimumFontSize = 9;   //minimum font size if loop continues a long time
let hexColor = "#2f3e5e";  //Starting color

let loopLimit = content.length/(indexChange+endIndex);   //bit of math to choose how many loops to do - not accurate, but it stops it looping thousands of times.
console.log(loopLimit);
for (let i = 0; i < loopLimit; i++) {
  //Setup
  const extractedText = content.substring(startIndex, endIndex);
  if (!extractedText){console.log(i);break;}  //break when last text is extracted
  startIndex=endIndex;
  endIndex=endIndex+indexChange;
  indexChange=indexChange+indexIncrementChange;

  // Create a new div and set its innerHTML to the extracted text
  const newDiv = document.createElement("span");
  newDiv.innerHTML = extractedText;
  
  //SIZE
  staticFontSize = staticFontSize-fontChange;
  if (staticFontSize<minimumFontSize){staticFontSize = minimumFontSize;}
  var size = staticFontSize.toString() + "px";
  newDiv.style.fontSize = size;
  newDiv.style.lineHeight = 1;
  
  
  //COLOR
  var red = parseInt(hexColor.slice(1, 3), 16);
  var green = parseInt(hexColor.slice(3, 5), 16);
  var blue = parseInt(hexColor.slice(5, 7), 16);

  // Lighten the color by adding or subtracting from each RGB value
  var lightenedRed = Math.min(255, red + 4); if (lightenedRed > 240){lightenedRed=240}; if (lightenedRed < 20){lightenedRed=20};
  var lightenedGreen = Math.min(255, green + 4); if (lightenedGreen > 240){lightenedGreen=240}; if (lightenedGreen < 20){lightenedGreen=20}; 
  var lightenedBlue = Math.min(255, blue + 6); if (lightenedBlue > 250){lightenedBlue=250}; if (lightenedBlue < 20){lightenedBlue=20};

  // Convert the lightened RGB values back to hex
  hexColor = `#${lightenedRed.toString(16)}${lightenedGreen.toString(16)}${lightenedBlue.toString(16)}`;
  newDiv.style.color = hexColor;

  // Insert the new div into the DOM
  element.appendChild(newDiv);
  

}
words.remove();