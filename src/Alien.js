var Alien = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="space-invader space-invader-ufo"></span>');
  this.setPosition(top, left);
  this.stepRight = true;
};
Alien.prototype = Object.create(makeDancer.prototype);
Alien.prototype.constructor = Alien;

Alien.prototype.oldStep = makeDancer.prototype.step;

Alien.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.toggle();
  // this.setPosition();
  // let direction = 25;
  let stepRight = 25;
  let stepLeft = -25;
  if(window.firstAlienRow <= 100){
    this.stepRight = true;
  } else if (window.firstAlienRow >= 700){
    this.stepRight = false;
  }
  if(this.stepRight){
    this.left += stepRight;
    window.firstAlienRow += (stepRight/4);
  }
  if(!this.stepRight){
    this.left += stepLeft;
    window.firstAlienRow += (stepLeft/4);
  }
  // this.left = this.left-25;
  this.setPosition();
};
