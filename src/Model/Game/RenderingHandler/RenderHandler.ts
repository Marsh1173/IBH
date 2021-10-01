import { Game } from "../game";
import { ScreenHandler } from "./ScreenHandler";
import { CameraHandler } from "./CameraHandler";
import { Vector } from "../../Utils/2D/Vector";
import { Square } from "../../Utils/2D/Square";
import { Renderable } from "../../Rendering/Renderable";

export class RenderHandler {
    public readonly renderableTerrain: { floor: Renderable | undefined; terrain: Renderable[] } = { floor: undefined, terrain: [] };
    public readonly renderableMobs: { mobs: Renderable[]; player: Renderable | undefined } = { mobs: [], player: undefined };

    public readonly screenHandler: ScreenHandler;
    public readonly cameraHandler: CameraHandler;
    public readonly ctx: CanvasRenderingContext2D;

    constructor(private readonly Game: Game, canvas: HTMLCanvasElement) {
        this.screenHandler = new ScreenHandler(canvas, this);
        this.cameraHandler = new CameraHandler(this, this.Game);
        this.ctx = canvas.getContext("2d")!;
        this.screenHandler.onWindowResize();
    }

    public updateAndRender(elapsedTime: number) {
        this.screenHandler.update(elapsedTime);
        this.cameraHandler.update(elapsedTime);
        this.ctx.resetTransform();

        let screenTransform: Vector = this.cameraHandler.getCameraTransform();
        this.ctx.translate(-screenTransform.x, -screenTransform.y);

        this.clearCanvas();

        this.renderAllTerrain();
        this.renderMobsAndPlayer();
        this.renderParticles(elapsedTime);

        let mousePos: Vector = this.Game.inputHandler.mouseHandler.globalMousePos;
        this.ctx.strokeStyle = "white";
        this.ctx.globalAlpha = 0.5;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(mousePos.x, mousePos.y, 15, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
    }

    private clearCanvas() {
        let screenDimensions: { pos: Vector; size: Square } = this.cameraHandler.getCanvasClearDimensions();
        this.ctx.clearRect(screenDimensions.pos.x, screenDimensions.pos.y, screenDimensions.size.width, screenDimensions.size.height);
    }

    private renderAllTerrain() {
        this.renderableTerrain.terrain.forEach((terrainObj) => {
            terrainObj.render(this.ctx);
        });
        if (this.renderableTerrain.floor) {
            this.renderableTerrain.floor.render(this.ctx);
        }
    }

    private renderMobsAndPlayer() {
        this.renderableMobs.mobs.forEach((mob) => {
            mob.render(this.ctx);
        });
        if (this.renderableMobs.player) {
            this.renderableMobs.player.render(this.ctx);
        }
    }

    private renderParticles(elapsedTime: number) {
        this.Game.particleHandler.updateAndRender(elapsedTime);
    }
}
