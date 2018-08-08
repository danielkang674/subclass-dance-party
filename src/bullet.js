var Bullet = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shots"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

Bullet.prototype = Object.create(makeDancer.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.oldStep = makeDancer.prototype.step;

Bullet.prototype.step = function () {
  this.oldStep.call(this);
  let stepNorth = -20;
  this.top += stepNorth;
  this.setPosition();
  let allAliens = window.allAliens;
  for (let i = 0; i < allAliens.length; i++) {
    if (allAliens[i]) {
      let alienBot = allAliens[i].top + 60;
      let alienTop = allAliens[i].top - 60;
      let alienLeft = allAliens[i].left - 60;
      let alienRight = allAliens[i].left + 60;
      if (this.top <= alienBot && this.top >= alienTop && this.left >= alienLeft && this.left <= alienRight) {
        allAliens[i].$node.toggle('explode');
        $('audio#explosion')[0].play();
        setTimeout(function () {
          if (allAliens[i]) {
            allAliens[i].$node.remove();
          }
        }, 1000);
        this.$node.remove();
        this.top = 0;
        this.left = 0;
        allAliens[i] = null;
      }
    }
  }
  if (this.top <= 150) {
    this.$node.remove();
  }
};