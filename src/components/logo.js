import {Texture, Sprite} from "pixi.js/dist/pixi";
import logoImage from "../../static/images/logo.png";

class Logo extends Sprite {
    constructor() {
        super(Texture.fromImage(logoImage));

        this.position.x = window.innerWidth/2;
        this.position.y = window.innerHeight/2 - 230;
        this.anchor.set(0.5);
    }
}

export default Logo;