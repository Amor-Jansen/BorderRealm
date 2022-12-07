//import { Player} from "./player";
//import { HandleInput } from "./input";
//import { FireBall} from "./fireball";
//Adding an event listener to load all assets before game starts
window.addEventListener('load', function(){
    //Setting the canvas layout
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    class HandleInput {
        constructor(game){
            this.game = game;
            window.addEventListener('keydown', e => {
                if (((e.key === 'ArrowUp') ||
                     (e.key === 'ArrowDown')) && this.game.keys.indexOf(e.key) === -1){
                    this.game.keys.push(e.key);
                } else if ( e.key === ' '){
                    this.game.player.shootTop();
                }
            });
            window.addEventListener('keyup', e => {
                if (this.game.keys.indexOf(e.key) > -1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
                }
            });
        }
    
    }

    class FireBall {
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
            context.fillStyle = 'yellow';
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Player {
        constructor(game){
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.maxSpeed = 2;
            this.fireBalls = [];
        }
        update(){
            if (this.game.keys.includes('ArrowUp'))this.speedY = -this.maxSpeed;
            else if (this.game.keys.includes('ArrowDown'))this.speedY = this.maxSpeed;
            else this.speedY = 0;
            this.y += this.speedY;
            //Handle fire balls
            this.fireBalls.forEach(fireBall => {
               fireBall.update();
            });
            this.fireBalls = this.fireBalls.filter(fireBall => !fireBall.markedForDeletion);
        }
        draw(context){
            context.fillStyle = 'black';
            context.fillRect(this.x, this.y, this.width, this.height);
            this.fireBalls.forEach(fireBall => {
                fireBall.draw(context);
            });
        }
        shootTop(){
            if (this.game.ammo > 0){
                this.fireBalls.push(new FireBall(this.game, this.x + 80, this.y + 30));
                this.game.ammo--;
            }
            
        }
    }
    
    //Particle is all the particle animations from damaged enemies
    class Particle {

    }
    
    //BadGuys is all animation related to the enemies
    class BadGuys {

    }
    //Layers is all functionality of the parallax background
    class Layers {

    }
    //Background will pull all backgrounds together
    class Background {

    }
    //Information will be used for things like ammo left and damage
    class UserInt {
        constructor(game){
            this.game = game;
            this.fontSize = 25;
            this.fontFamily = 'Sarpanch';
            this.color = 'black'
        }
        draw(context){
            context.fillStyle = this.color;
            for (let i = 0; i < this.game.ammo; i++){
                context.fillRect(20, 50, 3, 20);
            }
        }
    }
    //Game is the class everything will run through and come together
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new HandleInput(this);
            this.userInt = new UserInt(this);
            this.keys = [];
            this.ammo = 20;
            this.maxAmmo = 50;
            this.ammoTimer = 0;
            this.ammoInterval = 500;
        }
        update(deltaTime){
            this.player.update();
            if (this.ammoTimer > this.ammoInterval){
                if (this.ammo < this.maxAmmo) this.ammo++;
                this.ammoTimer = 0;
            } else {
                this.ammoTimer += deltaTime;
            }
        }
        draw(){
            this.player.draw(context);
            this.userInt.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    //Game player loop
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        context.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(context);
        requestAnimationFrame(animate);
    }
    animate(0);
});