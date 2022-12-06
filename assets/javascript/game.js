//Adding an event listener to load all assets before game starts
window.addEventListener('load', function(){
    //Setting the canvas layout
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    //Using classes for object orientated javascript
    //HandleInput will handle things like keys 
    class HandleInput {
        constructor(game){
            this.game = game;
            window.addEventListener('onkeydown', e => {
                if (((e.key === 'ArrowUp') ||
                     (e.key === 'ArrowDown')
                )&& this.game.keys.indexOf(e.key) === -1){
                    this.game.keys.push(e.key);
                }
            });
            window.addEventListener('onkeyup', e => {
                if (this.game.keys.indexOf(e.key) > -1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key) > -1);
                }
            });
        }

    }
    //Weapon will handle all things to do with the weapon
    class Weapon {

    }
    //Particle is all the particle animations from damaged enemies
    class Particle {

    }
    //Player handles all information regarding the player sprite and function
    class Player {
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
    class Information {

    }
    //Game is the class everything will run through and come together
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new HandleInput(this);
            this.keys = [];
        }
        update(){
            this.player.update();
        }
        draw(){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    //Game player loop
    function animate(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(context);
        requestAnimationFrame(animate);
    }
    animate();
});