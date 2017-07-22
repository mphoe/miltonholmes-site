var PREREQ_CARD = document.getElementById("pre-req-card");

/**
 * Stole this from: https://stackoverflow.com/questions/5047346 - but have added comments
 * This function will convert strings to objects (specifically the cookie string)
 * 
 * @param {string} string the string we want to convert to an object
 */
function stringToObject(string) {
    //split the string into an array of cookies
    splitString = string.split(', ');
    //create and empty result object
    var result = {};
    //loop through every item in the array
    for (var i = 0; i < splitString.length; i++) {
        //split the array items into key value pairs
        var current = splitString[i].split('=');
        //add the key value pair to the result object
        result[current[0]] = current[1];
    }
    return result;
}

//First, let's make a console log to say hello
console.log("Hello World");

//on page load we're going to check a cookie to see if we should hide the pre-requisites card
//We'll get the string that contains all the page's cookies, and convert it to an object
var cookies = stringToObject(document.cookie);
//if the cardClosed cookie exists, hide the prereq card.
if(cookies.cardClosed) PREREQ_CARD.className = "hidden";

/**
 * This function hides the pre-requisites card and creates a cookie, telling the browser not to show it again
 */
var closeCard = function () {
    PREREQ_CARD.className = "hidden";
    //send a console log to let the developer know their function is working.
    console.log("Closing the card worked!");

    //create a cookie called closedCard that says we've closed the card.
    //give it an expiry of 10 minutes in the future
    var expiryTime = new Date(Date.now() + 600000).toUTCString();
    document.cookie = "cardClosed = true; expires=" + expiryTime + ";";

}