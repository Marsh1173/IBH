import { GameInterface } from "../Utils/gameInterface/gameInterface";
import { GamePreset } from "../Utils/gamePresets/gamePreset";
import { MobHandler } from "./MobHandler/MobHandler";
import { PhysicsHandler } from "./PhysicsHandler/PhysicsHandler";
import { RenderHandler } from "./RenderingHandler/RenderHandler";
import { InputHandler } from "./InputHandler/InputHandler";
import { PlayerHandler } from "./PlayerHandler/PlayerHandler";
import { ParticleHandler } from "./ParticleHandler/ParticleHandler";
import { TerrainHandler } from "./TerrainHandler/TerrainHandler";
import { GameViewObserver } from "../../View/Game/GameDiv";

export class Game implements GameInterface {
    public readonly renderHandler: RenderHandler;
    public readonly physicsHandler: PhysicsHandler;
    public readonly mobHandler: MobHandler;
    public readonly inputHandler: InputHandler;
    public readonly playerHandler: PlayerHandler;
    public readonly terrainHandler: TerrainHandler;
    public readonly particleHandler: ParticleHandler;

    constructor(canvas: HTMLCanvasElement, public readonly gameView: GameViewObserver) {
        this.physicsHandler = new PhysicsHandler(this);
        this.renderHandler = new RenderHandler(this, canvas);
        this.particleHandler = new ParticleHandler(this.renderHandler.ctx);

        this.mobHandler = new MobHandler(this);
        this.terrainHandler = new TerrainHandler(this);

        this.inputHandler = new InputHandler(this);

        this.playerHandler = new PlayerHandler(this, this.mobHandler.dummyPlayer);
        this.inputHandler.setPlayerController(this.playerHandler.playerController);
    }

    private going: boolean = false;
    public start() {
        this.going = true;
        this.inputHandler.setInputListeners();
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));

        this.renderHandler.cameraHandler.setFocus(this.mobHandler.dummyPlayer.position);

        this.mobHandler.newTargetDummy({ x: 500, y: 500 });
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
        this.inputHandler.clearInputListeners();
    }
    public resume() {
        console.log("resuming");
        if (this.going) return;
        this.going = true;
        this.inputHandler.setInputListeners();
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    private lastFrame: number = 0;
    private loop(timestamp: number) {
        let elapsedTime = (timestamp - this.lastFrame) / 1000;
        if (elapsedTime > 2) {
            elapsedTime = 1 / 60;
        }
        this.lastFrame = timestamp;
        this.update(elapsedTime);
        if (this.going) {
            window.requestAnimationFrame((timestamp) => this.loop(timestamp));
        }
    }

    private update(elapsedTime: number) {
        this.playerHandler.update(elapsedTime);

        this.mobHandler.updateMobs(elapsedTime);

        this.physicsHandler.updatePhysics(elapsedTime);

        this.inputHandler.mouseHandler.updateGlobalMousePos();
        this.renderHandler.updateAndRender(elapsedTime);
    }
}
