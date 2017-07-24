var SUCCESS_ELEMENT = document.getElementById('success-alert');

var success = function() {
    var guessTotal = glassBalls.guessTally;
    SUCCESS_ELEMENT.className = "alert alert-success";
    SUCCESS_ELEMENT.setAttribute("onclick","resetBalls();");
    SUCCESS_ELEMENT.innerHTML = "You win the game with " + guessTotal + " guesses. Click to reset game.";

}

var glassBalls = new glassBallsBuilding({
    'floors': 50,
    'anchorID': document.getElementById('building-floors-anchor'),
    'success': this.success
});

//-----------  on page load
glassBalls.initialise();

var checkFloor = function(floorNumber) {
    glassBalls.checkGuess(floorNumber);
}

var resetBalls = function() {
    glassBalls.initialise();
    SUCCESS_ELEMENT.innerHTML = "";
    SUCCESS_ELEMENT.className = "";
    document.getElementById('live-guess').innerHTML = "0";
    document.getElementById('live-broken').innerHTML = "0";
}

/**
 * 
 * @param {integer}     options.floors the number of floors the building will have
 * @param {Node}        options.anchorID the HTML element to render the building inside
 * @param {function}    options.success a callback for when you guess correctly.
 */
function glassBallsBuilding (options) {

    //------ Configuration for the building ----//
    this.floors = options.floors;
    this.floorsAnchor = options.anchorID;

    this.success = options.success;

    //------ Set-up ----//
    this.initialise = function(){
        this.floorsAnchor.innerHTML = "";
        this.renderFloors(this.floors, this.floorsAnchor);
        this.correct = Math.round(Math.random() * this.floors) - 1;
        this.guessTally = 0;
        this.brokenTally = 0;
    }

    this.checkGuess = function(guess) {
        var floorElements = document.getElementsByClassName('building-floor');
        this.guessTally++;
        //check if floor is correct
        if (guess == this.correct) {
            floorElements.item(guess).className = "building-floor correct";
            this.success();
        } else {
            //if guess is lower, make it class less - else make it class more
            if (guess < this.correct) {
                floorElements.item(guess).className = "building-floor less"; 
            } else {
                floorElements.item(guess).className = "building-floor more";
                this.brokenTally++;
            }
        }
        document.getElementById('live-guess').innerHTML = this.guessTally;
        document.getElementById('live-broken').innerHTML = this.brokenTally;
    }.bind(this);

    /**
     * Given a number of floors and an anchor, render the correct number of floors
     * A floor is a list item.
     * 
     * @param {integer} floorNumber 
     * @param {string} anchor 
     */
    this.renderFloors = function(floorNumber, anchor) {
        for (var i = 0; i < floorNumber; i++) {
            //Create a floor element
            var floor = document.createElement("li");
            floor.className = 'building-floor';
            floor.setAttribute('onclick', 'checkFloor(' + i +')');
            //Create a floor number label
            var floorNum = document.createElement('span');
            floorNum.className = "floor-number";
            floorNum.innerHTML = i;
            floor.appendChild(floorNum);
            //Create and add four windows to the floor
            for (var j = 0; j < 4; j++) {
                var window = document.createElement('span');
                window.className = 'window';
                floor.appendChild(window);
            }
            //add the floor to the anchor
            anchor.appendChild(floor);
        };    
    }

}