//Using classes for object orientated javascript
//HandleInput will handle things like keys 

export class HandleInput {
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

};