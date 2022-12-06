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
        }
        update(){

        }
        draw(){

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

    }
});