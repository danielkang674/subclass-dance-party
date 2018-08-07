var Alien = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="space-invader space-invader-ufo"></span>');
  this.setPosition(top, left);
};
Alien.prototype = Object.create(makeDancer.prototype);
Alien.prototype.constructor = Alien;

Alien.prototype.oldStep = makeDancer.prototype.step;

Alien.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.toggle();

  let stepRight = 20;

  if (this.left >= 800){
    this.left = this.left - 700;
    // window.firstAlienRow = 200;
    this.top += 100;
  }
  this.left += stepRight;

  if (this.top >= 640){
    this.$node.hide();
  }
  
  this.setPosition();
};
