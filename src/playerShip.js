var playerShip = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="user-position user-triangle"></span>');
  this.setPosition(top, left);
}
playerShip.prototype = Object.create(makeDancer.prototype);
playerShip.prototype.constructor = playerShip;
