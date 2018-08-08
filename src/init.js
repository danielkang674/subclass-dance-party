$(document).ready(function() {
  window.dancers = [];
  // if (window.dancers.length > 0) {
  //   $('span.user-position.user-triangle').remove();
  //   $('span.space-invader.space-invader-ufo').remove();
  // }
  $('.addDancerButton').on('click', function(event) {
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

});


  // BASIC MODE
  $('.spaceInvaderButton').on('click', function(event) {
    // Link to Mercury audio
    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $('audio#mercury')[0].play();

    // check if the window dancer is empty, if not, remove all elements
    if (window.dancers.length > 0) {
      $('span.user-position.user-triangle').remove();
      $('span.space-invader.space-invader-ufo').remove();
      window.dancers.pop();
    }
    // calls upon the function within the html element
    var alienMakerFunctionName = $(this).data('alien-maker-function-name');
    // calls upon the window object with the stringed key of our Alien and playerShip functions
    var gameFunctionArray = alienMakerFunctionName.split(" ");
    var alienMakerFunction = window[gameFunctionArray[0]];
    var playerShipMakerFunction = window[gameFunctionArray[1]];

    //
    let firstAlienTop = 140;
    let firstAlienLeft = 120;

    var player = new playerShipMakerFunction(690, 440, 1000);
    $('#gameScreen').append(player.$node);
    window.dancers.push(player);

    for(let i = 0; i < 4; i++) {
      let firstAlien = new alienMakerFunction(firstAlienTop, firstAlienLeft, 50);
      $('#gameScreen').append(firstAlien.$node);

      let secondAlien = new alienMakerFunction(firstAlienTop + 60, firstAlienLeft + 260, 50);
      $('#gameScreen').append(secondAlien.$node);
      firstAlienLeft += 100;
    }
    window.firstAlienRow = 200;
    window.stepRight = true;

    // Hover color change requirement
    $( "span.user-position.user-triangle" ).mouseover(function() {
      $(this).css("border-bottom-color", "#587079");
    $( "span.user-position.user-triangle" ).mouseout(function() {
        $(this).css( "border-bottom-color", "#fff" );
    });
  });
});
  document.addEventListener('keydown', function(event){
    let player = window.dancers[0];
    const key = event.key;
    if(key === 'ArrowLeft' && player.left >= 200){
      player.left -= 90;
      player.setPosition();
    } else if (key === 'ArrowRight' && player.left <= 800){
      player.left += 90;
      player.setPosition();
    }
  });

  document.addEventListener('keydown', function(event){
    const key = event.keyCode;
    let player = window.dancers[0];
    if(key === 32){
      console.log(window.Bullet);
    }
  });


$('.massacreButton').on('click', function(event) {
  // stops all music
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
  // plays uranus song
  $('audio#uranus')[0].play();


  if (window.dancers.length > 0) {
    $('span.user-position.user-triangle').remove();
    $('span.space-invader.space-invader-ufo').remove();
    window.dancers.pop();
  }
  // calls upon the function within the html element
  var alienMakerFunctionName = $(this).data('massacre-maker-function-name');
  // calls upon the window object with the stringed key of our Alien and playerShip functions
  var gameFunctionArray = alienMakerFunctionName.split(" ");
  var alienMakerFunction = window[gameFunctionArray[0]];
  var playerShipMakerFunction = window[gameFunctionArray[1]];

  var player = new playerShipMakerFunction(690, 440, 1000);
  $('#gameScreen').append(player.$node);
  window.dancers.push(player);

  let firstAlienTop = 140;

  for(let i = 0; i < 7; i++) {
    let firstAlienLeft = 120;
    for (let j = 0; j < 7; j++) {
      let firstAlien = new alienMakerFunction(firstAlienTop, firstAlienLeft, 600000000);
      $('#gameScreen').append(firstAlien.$node);
      firstAlienLeft += 100;
    }
    firstAlienTop += 50;
  }
  window.firstAlienRow = 200;
  window.stepRight = true;

  // Hover color change requirement
  $( "span.user-position.user-triangle" ).mouseover(function() {
    $(this).css("border-bottom-color", "#957838");
  $( "span.user-position.user-triangle" ).mouseout(function() {
      $(this).css( "border-bottom-color", "#fff" );
  });

  });
});
