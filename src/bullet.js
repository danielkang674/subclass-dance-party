var Bullet = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shots"></span>');
  this.setPosition();
}

Bullet.prototype = Object.create(makeDancer.prototype);
Bullet.prototype.constructor = Bullet;
