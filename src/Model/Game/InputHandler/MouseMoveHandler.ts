import { Vector } from "../../Utils/2D/Vector";
import { InputHandler } from "./InputHandler";
import { Game } from "../Game";
import { Square } from "../../Utils/2D/Square";

export class MouseMoveHandler {
    public readonly globalMousePos: Vector = { x: 0, y: 0 };
    public readonly localMousePos: Vector;
    public readonly screenBounds: Square;

    constructor(private readonly inputHandler: InputHandler, private readonly Game: Game) {
        this.screenBounds = this.Game.renderHandler.screenHandler.getWindowSize();
        this.localMousePos = { x: (this.screenBounds.width * 2) / 3, y: this.screenBounds.height / 2 };
    }

    public onMouseMove(e: MouseEvent) {
        this.localMousePos.x += e.movementX;
        this.localMousePos.y += e.movementY;
        if (this.localMousePos.x < 0) this.localMousePos.x = 0;
        if (this.localMousePos.y < 0) this.localMousePos.y = 0;
        if (this.localMousePos.x > this.screenBounds.width) this.localMousePos.x = this.screenBounds.width;
        if (this.localMousePos.y > this.screenBounds.height) this.localMousePos.y = this.screenBounds.height;
    }

    public updateGlobalMousePos() {
        let pageOffset = this.Game.renderHandler.cameraHandler.getCameraTransform();
        this.globalMousePos.x = this.localMousePos.x + pageOffset.x;
        this.globalMousePos.y = this.localMousePos.y + pageOffset.y;
    }
}
