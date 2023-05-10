
const parent2 = document.getElementById("parent2");
const words2 = document.getElementById("words2");
const wordArray = words2.innerHTML.split(" ");

let startingFontSize = 60;  //font size of first batch
let newSize = startingFontSize;

let fontColor = "#2f3e5e";  //Starting color
let i = 0;
let d = 6;
let change = 7;
wordArray.forEach((word) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = word;
    newElement.style.color = fontColor;
    newSize = newSize - .2;
    if(i >= d && i % d == 0){
        newSize = newSize - 4;
        d=d+change;
        change++;
    }
    if(newSize <=11){ newSize = 11; }
    newElement.style.fontSize = newSize;

    var red = parseInt(hexColor.slice(1, 3), 16);
    var green = parseInt(hexColor.slice(3, 5), 16);
    var blue = parseInt(hexColor.slice(5, 7), 16);

    // Lighten the color by adding or subtracting from each RGB value
    var lightenedRed = Math.min(255, red - 2); if (lightenedRed > 230){lightenedRed=230}; if (lightenedRed < 20){lightenedRed=20};
    var lightenedGreen = Math.min(255, green - 1); if (lightenedGreen > 230){lightenedGreen=230}; if (lightenedGreen < 20){lightenedGreen=20}; 
    var lightenedBlue = Math.min(255, blue + 2); if (lightenedBlue > 200){lightenedBlue=200}; if (lightenedBlue < 20){lightenedBlue=20};
    hexColor = `#${lightenedRed.toString(16)}${lightenedGreen.toString(16)}${lightenedBlue.toString(16)}`;
    newElement.style.color = hexColor;

    
    newElement.classList.add("singleWord");
    parent2.appendChild(newElement);
    i++;
});

words2.remove();
