//Player handles all information regarding the player sprite and function
export class Player {
    constructor(game){
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 2;
        this.fireBall = [];
    }
    update(){
        if (this.game.keys.includes('ArrowUp'))this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown'))this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        //Handle fire balls
        this.fireBall.forEach(fireBall => {
           fireBall.update();
        });
        this.fireBall = this.fireBall.filter(fireBall => !fireBall.markedForDeletion);
    }
    draw(context){
        context.fillstyle = 'black';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.fireBall.forEach(fireBall => {
            fireBall.update(context);
        });
    }
    fireBallTop(){
        if (this.game.ammo > 0){
            this.fireBall.push(new FireBall(this.game, this.x, this.y));
        };
        
    }
};