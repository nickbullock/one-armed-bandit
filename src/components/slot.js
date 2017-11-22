import {Texture, extras} from "pixi.js/dist/pixi";
import slotImage from "../../static/images/slots.png";

class Slot extends extras.TilingSprite {
    constructor() {
        super(Texture.fromImage(slotImage), 106.5, 105);

        this.anchor.set(0.5);
        this.scale.set(2);
        this.height = 140;
        this.width = 100;
    }
}

export default Slot;