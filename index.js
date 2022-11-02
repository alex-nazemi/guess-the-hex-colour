var randomHexValue; 

function numberToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex; 
}

const randomRgbNumber = () => { return Math.floor((Math.random() * 255) + 1) }; 

const randomHex = () => { return "#" + numberToHex(randomRgbNumber()) + numberToHex(randomRgbNumber()) + numberToHex(randomRgbNumber()); }

function changeColour() {
    let randomButton = "button" + Math.floor((Math.random() * 3) + 1);
    const arrayOfButtons = document.getElementsByTagName("button"); 
    randomHexValue = randomHex();

    document.getElementsByClassName("square")[0].setAttribute("style", "background-color:" + randomHexValue + ";");
    
    Array.from(arrayOfButtons).forEach(element => {
        element.id === randomButton ? document.getElementById(randomButton).textContent = randomHexValue : document.getElementById(element.id).innerText = randomHex();
    });
}

function checkAnswer(button) {
    button.textContent === randomHexValue ? document.getElementsByTagName("p")[0].textContent = "Correct!" : document.getElementsByTagName("p")[0].textContent = "Incorrect!";
    changeColour();
}

window.onload = (event) => {
    changeColour();
};








