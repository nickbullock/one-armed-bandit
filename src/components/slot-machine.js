import {Sprite, Texture} from "pixi.js/dist/pixi";
import {DropShadowFilter, DotFilter} from "pixi-filters/lib/pixi-filters.es";
import slotMachineImage from "../../static/images/slot-machine.png";

class SlotMachine extends Sprite {
    constructor() {
        super(Texture.fromImage(slotMachineImage));

        this.position.x = window.innerWidth/2;
        this.position.y = window.innerHeight/2;
        this.anchor.set(0.5);
        this.interactive = true;
        this.filters = [
            new DropShadowFilter,
            // new DotFilter
        ];
    }
}

export default SlotMachine;