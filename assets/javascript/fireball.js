//Weapon will handle all things to do with the weapon
export class FireBall {
    constructor(game, x, y){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 3;
        this.speed = 3;
        this.markedForDeletion = false;
    }
    update(){
        this.x += this.speed;
        if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
    }
    draw(context){
        context.fillstyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};