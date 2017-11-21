import {Sprite, Texture} from "pixi.js/dist/pixi";
import slotMachineImage from "../../static/images/slot-machine.png";

class SlotMachine extends Sprite {
    constructor() {
        super(Texture.fromImage(slotMachineImage));

        this.position.x = window.innerWidth/2;
        this.position.y = window.innerHeight/2;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
    }
}

export default SlotMachine;