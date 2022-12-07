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
        this.weapon = [];
    }
    update(){
        if (this.game.keys.includes('ArrowUp'))this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown'))this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;
        //Handle weapons
        this.weapon.forEach(weapon => {
            weapon.update();
        });
        this.weapon = this.weapon.filter(weapon => !weapon.markedForDeletion);
    }
    draw(context){
        context.fillstyle = 'black';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.weapon.forEach(weapon => {
            weapon.update(context);
        });
    }
    weaponTop(){
        this.weapon.push(new Weapon(this.game, this.x, this.y));
    }
};