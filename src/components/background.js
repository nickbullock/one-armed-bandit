import {Sprite, Texture} from "pixi.js/dist/pixi";
import bgImage from "../../static/images/bg.jpg";

class Background extends Sprite {
    constructor() {
        super(Texture.fromImage(bgImage));
    }
}

export default Background;