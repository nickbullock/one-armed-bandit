import "../index.css";
import bgImage from "../static/images/bg.jpg";
import slotsImage from "../static/images/slot-machine.png";
import * as PIXI from "pixi.js/dist/pixi";
import Background from "./components/background";
import SlotMachine from "./components/slot-machine";

const preload = () => {
    const renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
    const stage = new PIXI.Container();

    renderer.view.style.position = "absolute";
    renderer.view.style.display = "block";
    renderer.autoResize = true;

    PIXI.loader
        .add([bgImage, slotsImage])
        .load(() => {
            const bg = new Background();
            const slotMachine = new SlotMachine();

            stage.addChild(bg, slotMachine);

            renderer.render(stage);
        });

    document.body.appendChild(renderer.view);
    document.body.onresize = () => renderer.resize();
};

document.addEventListener("DOMContentLoaded", preload);