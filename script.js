// Potential text box for inputting target text
const text = 'Hi mylove haan ko ammu nu kasanu ka batiin like happy 13th mothsarry or happy 1 year and 1 month haan ko ammu loveeee ngemmm another sweet month with you mahall koo. Thanks for loving me wholeheartedly despite the distance between us and thanks for everything you do for me. I appreciate the efforts you put into our relationship- the way you listen, care about my needs, and make me feel valued and cherished. Thank you for all of the things you give me your love, your presence, your support you are everything to me. I\'m very happy with how we have grown together, and I hope this will continue forever!   awan maibaga kun loveee nasta ag simsimpett ka wennn mahal kooooo even addu problema ta or mga tampuhans and awaysss walang susuko haaa always natinn aayusinnnnn Iloveeeeeyousoomuch and Imissyouuuuuu!!!!';

// Converting the paragraph into an array - string is bad for manipulating
const paragraph = text.split("");

// Initiating how many letters are there
let i = 0;
var clickSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3");

function dashOut(arr) {
    if (i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];
        clickSound.play(); // Play the click sound
        i++;
        console.log('The i count: ' + i);
        setTimeout(function() { dashOut(arr); }, interval(arr[i]));
    }
}

function interval(letter) {
    console.log(letter);
    if (letter === ";" || letter === "." || letter === ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin() {
    i = 0;
    document.querySelector(".textCont").textContent = ""; // Clear the text content before starting
    dashOut(paragraph);
}

startFromBegin();
