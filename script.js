//Set variables
let changeColor = true;   // set true to change the color
let changeSize = true;   // set true to change the size


const element = document.getElementById("parent");
const words = document.getElementById("words");
const content = words.innerHTML;

let startIndex = 0;  //first char to edit - should be zero
let endIndex = 52;  //last char to edit in batch 
let indexChange = endIndex;  //size of starting batch - same as endIndex
let indexIncrementChange = 4; //how many more characters are added to the change each loop
let staticFontSize = 55;  //font size of first batch
let fontChange = 2.4;  //font change each batch
let minimumFontSize = 9;   //minimum font size if loop continues a long time

let hexColor = "#2f3e5e";  //Starting color

for (let i = 0; i < content.length; i++) {
    
    const extractedText = content.substring(startIndex, endIndex);
    if (!extractedText){  //no more characters in the text box
        break; //break after last text is extracted
    } 

    // Increment batch numbers
    startIndex=endIndex;
    endIndex=endIndex+indexChange;
    indexChange=indexChange+indexIncrementChange;

    // Create a new div and set its innerHTML to the extracted text
    const newSpan = document.createElement("span");
    newSpan.innerHTML = extractedText;

    //SIZE
    if(changeSize){
        staticFontSize = staticFontSize-fontChange;
        if (staticFontSize<minimumFontSize){staticFontSize = minimumFontSize;}
        var size = staticFontSize.toString() + "px";
        newSpan.style.fontSize = size;
        newSpan.style.lineHeight = 1;
    }

    //COLOR
    if(changeColor){
        var red = parseInt(hexColor.slice(1, 3), 16);
        var green = parseInt(hexColor.slice(3, 5), 16);
        var blue = parseInt(hexColor.slice(5, 7), 16);

        // Lighten the color by adding or subtracting from each RGB value
        var lightenedRed = Math.min(255, red + 4); if (lightenedRed > 240){lightenedRed=240}; if (lightenedRed < 20){lightenedRed=20};
        var lightenedGreen = Math.min(255, green + 4); if (lightenedGreen > 240){lightenedGreen=240}; if (lightenedGreen < 20){lightenedGreen=20}; 
        var lightenedBlue = Math.min(255, blue + 6); if (lightenedBlue > 250){lightenedBlue=250}; if (lightenedBlue < 20){lightenedBlue=20};
        hexColor = `#${lightenedRed.toString(16)}${lightenedGreen.toString(16)}${lightenedBlue.toString(16)}`;
    }

    newSpan.style.color = hexColor;
    // Insert the new div into the DOM
    element.appendChild(newSpan);


}
words.remove();