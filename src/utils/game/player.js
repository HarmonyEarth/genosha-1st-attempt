export class Player {
  constructor(game, hero) {
    this.game = game;
    this.width = hero.Idle.width;
    this.height = hero.Idle.height;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.vy = 0;
    this.weight = 1;
    this.image = hero.Idle.img;
    this.frame = 0;
    this.frameMax = 70;
    this.speed = 0;
    this.maxSpeed = 10;
    this.states = [];
    this.currentState = this.states[0];
    this.currentState.enter();
  }
  update(input) {
    // horizontal movement
    this.x += this.speed;
    if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
    else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;

    // vertical movement
    if (input.includes('ArrowUp') && this.onGround()) this.vy -= 20;
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;

    //Frame for Animation
    this.frame++;
    if (this.frame === this.frameMax) this.frame = 0;
  }

  animation() {
    //if you are not attacking
    /*if (this.onGround()){
        if (this.vy===0) //Change Spritesheet to Stand
        else //Change Spritesheet to Run
      } else {
        if (this.vy<0) //Change Spritesheet to Jump
        else //Change Spritesheet to fall
      }
      // Else - Change Spritesheet to Attack*/
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frame * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
