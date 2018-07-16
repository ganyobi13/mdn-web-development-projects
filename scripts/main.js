var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/hustle.jpg') {
        myImage.setAttribute ('src', 'images/hustle2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/hustle.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ground Up, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ground Up, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
