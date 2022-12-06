export class Player {
    constructor(game){
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 2;
    }
    update(){
        if (this.game.keys.includes(ArrowUp)) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes(ArrowUp)) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};