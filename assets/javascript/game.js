import { Player} from "./player.js";
import { HandleInput } from "./input.js";
//Adding an event listener to load all assets before game starts
window.addEventListener('load', function(){
    //Setting the canvas layout
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

   
    //Weapon will handle all things to do with the weapon
    class Weapon {
        constructor(game, x, y){
            
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