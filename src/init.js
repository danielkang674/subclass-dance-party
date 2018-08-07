$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  // make alien
  $('.spaceInvaderButton').on('click', function(event) {
    // calls upon the function within the html element
    var alienMakerFunctionName = $(this).data('alien-maker-function-name');
    // calls upon the window object with the stringed key of our Alien and playerShip functions
    var gameFunctionArray = alienMakerFunctionName.split(" ");
    var alienMakerFunction = window[gameFunctionArray[0]];
    var playerShipMakerFunction = window[gameFunctionArray[1]];

    //
    var alien = new alienMakerFunction(250, 210, 1000);
    let firstAlienTop = 140;
    let firstAlienLeft = 120;

    var player = new playerShipMakerFunction(690, 440, 1000);
    $('#gameScreen').append(player.$node);

    for(let i = 0; i < 4; i++) {
      let firstAlien = new alienMakerFunction(firstAlienTop, firstAlienLeft, 50);
      $('#gameScreen').append(firstAlien.$node);

      let secondAlien = new alienMakerFunction(firstAlienTop + 60, firstAlienLeft + 260, 50);
      $('#gameScreen').append(secondAlien.$node);
      firstAlienLeft += 100;
    }
    window.firstAlienRow = 200;
    window.stepRight = true;

  });
});
  // make character at the bottom of the screen upon the same event as alien
