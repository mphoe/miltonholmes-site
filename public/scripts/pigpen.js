var SECRET_INCR = 0;
var SUCCESS_ELEMENT = document.getElementById('success-alert');

var incrementSecret = function () {
    SECRET_INCR++;
    if (SECRET_INCR == 5) {
        //secret things for clever people
        SUCCESS_ELEMENT.className = "alert alert-success";
        SUCCESS_ELEMENT.innerHTML = "Congratulations! You've solved all my ciphers and won the game!";
    }
}

//Will make the pig-penned text appear and clear the original message
var pigpenSubmit = function () {
    var text = document.getElementById('pigpen-input-text').value;
    document.getElementById("pigpen-results-text").innerHTML = text;
    var text = document.getElementById('pigpen-input-text').value = "";
}

//render the explanation for why pigpen won't work outside page
var renderExplain = function () {
    var container = document.getElementById("pigpen-explanation-container");
    container.className = (container.className == "hidden") ? "" : "hidden";
}