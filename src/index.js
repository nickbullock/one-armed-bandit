import "../index.css";
import bgImage from "../static/images/bg.jpg";
import slotsImage from "../static/images/slots.png";
import slotMachineImage from "../static/images/slot-machine.png";
import * as PIXI from "pixi.js/dist/pixi";
import Background from "./components/background";
import SlotMachine from "./components/slot-machine";
import Slot from "./components/slot";
import SpinButton from "./components/spin-button";
import Utils from "./services/utils";

const preload = () => {
    const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    let positions = Utils.randomPositions();
    let isSpinning = false;
    const slotsCount = 3;
    const loopCount = 5;
    const tilesCount = 5;
    const tileHeight = 120;
    const slotSpriteList = [];
    const finalTileYList = [];
    const tileYOffset = 18;

    document.body.appendChild(app.view);

    app.stage.interactive = true;
    app.renderer.autoResize = true;
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";

    PIXI.loader
        .add([bgImage, slotMachineImage, slotsImage])
        .load(() => {
            const bg = new Background();
            const slotMachine = new SlotMachine();
            const spinBtn = new SpinButton();

            spinBtn.click = (e) => spin();
            spinBtn.touchstart = (e) => spin();

            const init = () => {
                for(let i = 0; i < slotsCount; i++){
                    slotSpriteList[i] = new Slot();
                    slotSpriteList[i].tilePosition.x = 0;
                    slotSpriteList[i].tilePosition.y = (-positions[i] * tileHeight) + 8;
                    slotSpriteList[i].x = window.innerWidth/2 + (i * 235) - 230;
                    slotSpriteList[i].y = window.innerHeight/2;
                }

                app.stage.addChild(bg, slotMachine, spinBtn, ...slotSpriteList);
            };

            const update = () => {
                for(let i = 0; i < slotsCount; i++) {
                    if (finalTileYList[i] > 0) {
                        slotSpriteList[i].tilePosition.y += tileYOffset;
                        finalTileYList[i] -= tileYOffset;
                    }
                }

                if(finalTileYList[2] <= 0) {
                    isSpinning = false;

                    return false;
                }

                app.renderer.render(app.stage);
                requestAnimationFrame(update);
            };

            const spin = () => {
                if(isSpinning) return false;

                isSpinning = true;
                positions = Utils.randomPositions();

                console.log(positions[0], positions[1], positions[2])

                for(let i = 0; i < slotsCount; i++){
                    slotSpriteList[i].tilePosition.x = 0;
                    slotSpriteList[i].tilePosition.y = (-positions[i] * tileHeight);
                    finalTileYList[i] = (loopCount * tileHeight * tilesCount );
                }
                update();
            };

            init();
        });
};

document.addEventListener("DOMContentLoaded", preload);