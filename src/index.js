import "../index.css";
import bgImage from "../static/images/bg.jpg";
import slotsImage from "../static/images/slot-machine.png";
import * as PIXI from "pixi.js/dist/pixi";
import Background from "./components/background";
import SlotMachine from "./components/slot-machine";

const preload = () => {
    const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});

    document.body.appendChild(app.view);

    app.stage.interactive = true;
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;

    PIXI.loader
        .add([bgImage, slotsImage])
        .load(() => {
            const bg = new Background();
            const slotMachine = new SlotMachine();

            app.stage.addChild(bg, slotMachine);
            app.renderer.render(app.stage);
        });
};

document.addEventListener("DOMContentLoaded", preload);