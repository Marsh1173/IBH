import { Game } from "../game";
import { ScreenHandler } from "./ScreenHandler";
import { CameraHandler } from "./CameraHandler";
import { Vector } from "../../Utils/2D/Vector";
import { Square } from "../../Utils/2D/Square";

export class RenderHandler {
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
        this.renderSetup(elapsedTime);

        this.renderAllTerrain();

        this.renderMobsAndPlayer();

        //this.renderPhysics();

        this.renderParticles(elapsedTime);

        this.ctx.globalCompositeOperation = "difference";
        let mousePos: Vector = this.Game.inputHandler.mouseHandler.globalMousePos;
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(mousePos.x, mousePos.y, 15, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = "source-over";
    }

    public renderSetup(elapsedTime: number) {
        this.screenHandler.update(elapsedTime);
        this.cameraHandler.update(elapsedTime);
        this.ctx.resetTransform();

        let screenTransform: Vector = this.cameraHandler.getCameraTransform();
        this.ctx.translate(-screenTransform.x, -screenTransform.y);

        this.clearCanvas();
    }
    public clearCanvas() {
        let screenDimensions: { pos: Vector; size: Square } = this.cameraHandler.getCanvasClearDimensions();
        this.ctx.clearRect(screenDimensions.pos.x, screenDimensions.pos.y, screenDimensions.size.width, screenDimensions.size.height);
    }

    private renderAllTerrain() {
        this.Game.itemHandler.renderables.terrain.items.forEach((terrainObj) => {
            terrainObj.render(this.ctx);
        });
    }

    private renderMobsAndPlayer() {
        this.Game.itemHandler.renderables.mobs.items.forEach((mobObj) => {
            mobObj.render(this.ctx);
        });
        this.Game.itemHandler.renderables.player.items.forEach((playerObj) => {
            playerObj.render(this.ctx);
        });
    }

    private renderParticles(elapsedTime: number) {
        this.Game.particleHandler.updateAndRender(elapsedTime);
    }

    public renderPhysics() {
        let mom: Vector = this.Game.dummyPlayer.momentum;
        this.Game.dummyPlayer.points.forEach((point) => {
            this.ctx.strokeStyle = "green";
            this.ctx.lineWidth = 3;

            this.ctx.beginPath();
            this.ctx.moveTo(point.x, point.y);
            this.ctx.lineTo(point.x + mom.x, point.y + mom.y);
            this.ctx.stroke();
        });
    }
}
