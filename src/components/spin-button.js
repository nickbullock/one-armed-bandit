import {Texture, Sprite} from "pixi.js/dist/pixi";
import spinImage from "../../static/images/spin.png";

class SpinButton extends Sprite {
    constructor() {
        super(Texture.fromImage(spinImage));

        this.position.x = window.innerWidth/2;
        this.position.y = window.innerHeight/2 + 200;
        this.anchor.set(0.5);
        this.scale.set(0.3);
        this.interactive = true;
        this.buttonMode = true;
    }
}

export default SpinButton;