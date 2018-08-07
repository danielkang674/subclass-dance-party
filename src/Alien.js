var Alien = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.$node = $('<span class="space-invader space-invader-ufo"></span>');
};
Alien.prototype = Object.create(makeDancer.prototype);
Alien.prototype.constructor = Alien;
