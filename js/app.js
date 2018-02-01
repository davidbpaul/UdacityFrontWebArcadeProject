class Enemy{
  constructor(x,y, speed){
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y= y;
        this.speed = speed;

  }
  update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    this.x += this.speed * dt;
    if(this.x > 505){
      this.x = 0;
    }


        // Check for collision between player and enemies
    if (player.x >= this.x - 10 && player.x <= this.x + 10 && player.y >= this.y - 3 && player.y <= this.y + 3) {
       player.x = 200;
       player.y = 380;
     }

  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
  constructor(x,y, speed){
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y= y;
        this.speed = speed;

  }
  update(dt){
    if (this.y < 0) {
     this.x = 200;
     this.y = 380;
 }
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(key){
    switch (key) {
      case 'left':
        this.x -= this.speed + 20;
        break;
      case 'up':
        this.y -= this.speed + 20;
        break;
      case 'right':
        this.x += this.speed + 20;
        break;
      case 'down':
        this.y += this.speed + 20;
        break;
    }
  }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [new Enemy(0, 50, 100 + Math.floor(Math.random() * 400)),
                    new Enemy(0, 110, 100 + Math.floor(Math.random() * 400)),
                    new Enemy(0, 240, 100 + Math.floor(Math.random() * 400))];
const player = new Player(200, 300, 100);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
