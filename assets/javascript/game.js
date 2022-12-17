/*Code is a mixture of https://www.franksworld.com/tag/franks-laboratory/ , W3Schools , 
*and https://www.udemy.com/courses/search/?src=ukw&q=javascript+game.*/
/*Adding an event listener to load all assets before game starts*/
window.addEventListener('load', function(){
/*Setting the canvas layout*/
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

/*This class handles all the user input, such as key strokes*/ 
    class HandleInput {
        constructor(game){
            this.game = game;
            window.addEventListener('keydown', e => {
                if (((e.key === 'ArrowUp') ||
                     (e.key === 'ArrowDown')) && this.game.keys.indexOf(e.key) === -1){
                    this.game.keys.push(e.key);
                } else if ( e.key === ' '){
                    this.game.player.shootTop();
                } else if ( e.key === 'd'){
                    this.game.debug = !this.game.debug;
                }
            });
            window.addEventListener('keyup', e => {
                if (this.game.keys.indexOf(e.key) > -1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
                }
            });
        }
    
    }

/*The fire ball class handles all the projectile information*/
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

/*The player class holds all the information on the players character*/
    class Player {
        constructor(game){
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 37;
            this.speedY = 0;
            this.maxSpeed = 2;
            this.fireBalls = [];
            this.image = document.getElementById('player');
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
            //Player animation
            if (this.frameX < this.maxFrame){
                this.frameX++;
            } else {
                this.frameX = 0;
            }
        }
        draw(context){
            if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
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
    
    //Particle is all the particle animations from damaged foes
    class Particle {

    }
    
/*Foe is all animation related to the foes*/
    class Foe {
        constructor(game){
            this.game = game;
            this.x = this.game.width;
            this.speedX = Math.random() * -1.5 - 0.5;
            this.markedForDeletion = false;
            this.lives = 5;
            this.score = this.lives;
        }
        update(){
            this.x += this.speedX;
            if (this.x + this.width < 0) this.markedForDeletion = true;
        }
        draw(context){
            context.fillStyle = 'red';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.fillStyle = 'black';
            context.font = '20px arpanch';
            context.fillText(this.lives, this.x, this.y)
        }
    }
/*Monster number one which is a child of the Foe class*/
    class Angler1 extends Foe {
        constructor(game){
            super(game);
            this.width = 228 * 0.2;
            this.height = 169 * 0.2;
            this.y = Math.random() * (this.game.height * 0.9 - this.height);
        }
    }
    //Layers is all functionality of the parallax background
    class Layers {
        constructor(game, image, speedModifier){
            this.game = game;
            this.image = image;
            this.speedModifier = speedModifier;
            this.width = 1920;
            this.height = 1080;
            this.x = 0;
            this.y = 0;
        }     
        update(){
            if(this.x <= -this.width) this.x = 0;
            this.x -= this.game.speed * this.speedModifier;
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y);
            context.drawImage(this.image, this.x + this.width, this.y);
        }
    }
/*Background will pull all backgrounds together*/
    class Background {
        constructor(game){
            this.game = game;
            this.image1 = document.getElementById('layer1');
            this.image2 = document.getElementById('layer2');
            this.image3 = document.getElementById('layer3');
            this.image4 = document.getElementById('layer4');
            this.image5 = document.getElementById('layer5');
            this.image6 = document.getElementById('layer6');
            this.image7 = document.getElementById('layer7');
            this.image8 = document.getElementById('layer8');
            this.image9 = document.getElementById('layer9');
            this.layer1 = new Layers(this.game, this.image1, 0.1);
            this.layer2 = new Layers(this.game, this.image2, 0.2);
            this.layer3 = new Layers(this.game, this.image3, 0.3);
            this.layer4 = new Layers(this.game, this.image4, 0.4);
            this.layer5 = new Layers(this.game, this.image5, 0.5);
            this.layer6 = new Layers(this.game, this.image6, 0.6);
            this.layer7 = new Layers(this.game, this.image7, 0.7);
            this.layer8 = new Layers(this.game, this.image8, 0.8);
            this.layer9 = new Layers(this.game, this.image9, 1);
            this.layers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5, this.layer6, this.layer7, this.layer8, this.layer9];
        }
        update(){
            this.layers.forEach(layer => layer.update());
        }
        draw(context){
            this.layers.forEach(layer => layer.draw(context));
        }
    }
/*User Interface will be used for things like ammo left and damage*/
    class UserInt {
        constructor(game){
            this.game = game;
            this.fontSize = 25;
            this.fontFamily = 'Sarpanch';
            this.color = 'white'
        }
        draw(context){
            //Score
            context.save();
            context.fillStyle = this.color;
            context.shadowOffsetX = 2;
            context.shadowOffsetY = 2;
            context.shadowColor = 'black';
            context.font = this.fontSize + 'px' + this.fontFamily;
            context.fillText('Score: ' + this.game.score, 20, 40);
            //Ammo
            context.fillStyle = this.color;
            for (let i = 0; i < this.game.ammo; i++){
                context.fillRect(20 + 5 * i, 50, 3, 20);
            }
            //Timer
            const formattedTime = (this.game.gameTime * 0.001).toFixed(1);
            context.fillText('Timer: ' + formattedTime, 20, 100);
            //Game over messages
            if (this.game.gameOver){
                context.textAlign = 'center';
                let message1;
                let message2;
                if (this.game.score > this.game.winningScore){
                    message1 = 'You Win!';
                    message2 = 'Congradulations!';
                } else {
                    message1 = 'You Lose!';
                    message2 = 'Try Again..';
                }
                context.font = '50px ' + this.fontFamily;
                context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);
                context.font = '25px ' + this.fontFamily;
                context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 40);
            }
            context.restore();
        }
    }
/*Game is the class everything will run through and come together*/
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new HandleInput(this);
            this.userInt = new UserInt(this);
            this.keys = [];
            this.foes = [];
            this.FoeTimer = 0;
            this.FoeInterval = 1000;
            this.ammo = 20;
            this.maxAmmo = 50;
            this.ammoTimer = 0;
            this.ammoInterval = 500;
            this.gameOver = false;
            this.score = 0;
            this.winningScore = 10;
            this.gameTime = 0;
            this.timeLimit = 5000;
            this.speed = 1;
            this.debug = true;
        }
        update(deltaTime){
            if (!this.gameOver) this.gameTime += deltaTime;
            if (this.gameTime > this.gameLimit) this.gameOver = true;
            this.background.update();
            this.player.update();
            if (this.ammoTimer > this.ammoInterval){
                if (this.ammo < this.maxAmmo) this.ammo++;
                this.ammoTimer = 0;
            } else {
                this.ammoTimer += deltaTime;
            }
            this.foes.forEach(Foe => {
                Foe.update();
                if(this.checkCollisions(this.player, Foe)){
                    Foe.markedForDeletion = true
                }
                this.player.fireBalls.forEach(fireBall => {
                    if (this.checkCollisions(fireBall, Foe)){
                        Foe.lives--;
                        fireBall.markedForDeletion = true;
                        if (Foe.lives <= 0){
                            Foe.markedForDeletion = true;
                           if (!this.gameOver) this.score += Foe.score;
                            if (this.score > this.winningScore) this.gameOver = true;
                        }
                    }
                })
            });
            this.foes = this.foes.filter(Foe => !Foe.markedForDeletion);
            if (this.FoeTimer > this.FoeInterval && !this.gameOver){
                this.addFoe();
                this.FoeTimer = 0;
            } else {
                this.FoeTimer += deltaTime;
            }
        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.userInt.draw(context);
            this.foes.forEach(Foe => {
                Foe.draw(context);
            });
        }
        addFoe(){
            this.foes.push(new Angler1(this));
        }
        checkCollisions(rect1, rect2){
            return( rect1.x < rect2.x + rect2.width &&
                    rect1.x + rect1.width > rect2.x &&
                    rect1.y < rect2.y + rect2.height &&
                    rect1.height + rect1.y > rect2.y)
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
/*Game player loop*/
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