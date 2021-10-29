import { Square } from "../../Utils/2D/Square";
import { Vector } from "../../Utils/2D/Vector";
import { RenderHandler } from "./RenderHandler";

export class ScreenHandler {
    private changedWindowSize: boolean = true;
    private readonly windowSize: Square = { width: 0, height: 0 };

    constructor(private readonly gameCanvas: HTMLCanvasElement, private readonly renderHandler: RenderHandler) {}

    public update(elapsedTime: number) {
        if (this.changedWindowSize) {
            this.resizeCanvas();
        }
    }

    private resizeCanvas() {
        this.gameCanvas.width = this.windowSize.width;
        this.gameCanvas.height = this.windowSize.height;
        this.changedWindowSize = false;
    }

    public onWindowResize() {
        this.windowSize.width = window.innerWidth;
        this.windowSize.height = window.innerHeight;
        this.changedWindowSize = true;
    }

    public getWindowSize(): Square {
        return this.windowSize;
    }

    public manualResetWindow() {
        this.changedWindowSize = true;
    }
}
