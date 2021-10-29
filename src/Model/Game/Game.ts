import { GameInterface } from "../Utils/gameInterface/gameInterface";
import { GamePreset } from "../Utils/gamePresets/gamePreset";
import { RenderHandler } from "./RenderingHandler/RenderHandler";
import { InputHandler } from "./InputHandler/InputHandler";
import { PlayerHandler } from "./PlayerHandler/PlayerHandler";
import { ParticleHandler } from "./ParticleHandler/ParticleHandler";
import { GameViewObserver } from "../../View/Game/GameDiv";
import { PhysicsProcessor } from "../Physics/PhysicsProcessor";

import { ItemHandler } from "./ItemHandler/ItemHandler";
import { MobAdder } from "./ItemHandler/Adders/MobAdder";
import { Player } from "../Player/Player";
import { PlayerAdder } from "./ItemHandler/Adders/PlayerAdder";

export class Game implements GameInterface {
    public readonly renderHandler: RenderHandler;
    public readonly inputHandler: InputHandler;
    public readonly playerHandler: PlayerHandler;
    public readonly particleHandler: ParticleHandler;

    public readonly itemHandler: ItemHandler;
    public readonly physicsProcessor: PhysicsProcessor;

    public readonly dummyPlayer: Player;

    constructor(canvas: HTMLCanvasElement, public readonly gameView: GameViewObserver) {
        this.itemHandler = new ItemHandler(this);

        this.physicsProcessor = new PhysicsProcessor(this.itemHandler.physics.dynams, this.itemHandler.physics.statics);
        this.renderHandler = new RenderHandler(this, canvas);
        this.particleHandler = new ParticleHandler(this.renderHandler.ctx);

        this.inputHandler = new InputHandler(this);
        this.dummyPlayer = PlayerAdder.addDummyPlayer({ x: 500, y: -300 }, this.itemHandler);
        MobAdder.addTargetDummy({ x: 500, y: -300 }, this.itemHandler);

        this.playerHandler = new PlayerHandler(this, this.dummyPlayer);
        this.inputHandler.setPlayerController(this.playerHandler.playerController);
    }

    private update(elapsedTime: number) {
        this.playerHandler.update(elapsedTime);

        this.itemHandler.updateables.updateables.items.forEach((item) => {
            item.update(elapsedTime);
        });

        this.physicsProcessor.processPhysics(elapsedTime);

        this.inputHandler.mouseHandler.updateGlobalMousePos();
        this.renderHandler.updateAndRender(elapsedTime);
    }

    private going: boolean = false;
    public start() {
        this.going = true;
        this.inputHandler.setInputListeners();
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));

        this.renderHandler.cameraHandler.setFocus(this.dummyPlayer.position);
    }
    public stop() {
        if (!this.going) return;
        this.going = false;
        this.inputHandler.clearInputListeners();
    }
    public pause() {
        console.log("pausing");
        if (!this.going) return;
        this.going = false;
        this.inputHandler.clearInputListeners(false);
    }
    public resume() {
        console.log("resuming");
        if (this.going) return;
        this.going = true;
        this.inputHandler.setInputListeners();
        this.renderHandler.screenHandler.manualResetWindow();
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    private lastFrame: number = 0;
    private loop(timestamp: number) {
        let elapsedTime = (timestamp - this.lastFrame) / (1000 * 1);
        if (elapsedTime > 0.1) {
            elapsedTime = 1 / 60;
        }
        this.lastFrame = timestamp;
        this.update(elapsedTime);
        if (this.going) {
            window.requestAnimationFrame((timestamp) => this.loop(timestamp));
        }
    }
}
