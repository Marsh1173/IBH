import { Vector } from "../../Utils/2D/Vector";
import { InputHandler } from "./InputHandler";
import { Game } from "../Game";
import { Square } from "../../Utils/2D/Square";

export class MouseMoveHandler {
    public readonly globalMousePos: Vector = { x: 0, y: 0 };
    public readonly localMousePos: Vector = { x: 0, y: 0 };

    constructor(private readonly inputHandler: InputHandler, private readonly Game: Game) {}

    public onMouseMove(e: MouseEvent) {
        this.localMousePos.x = e.clientX;
        this.localMousePos.y = e.clientY;
    }

    public updateGlobalMousePos() {
        let pageOffset = this.Game.renderHandler.cameraHandler.getCameraTransform();
        this.globalMousePos.x = this.localMousePos.x + pageOffset.x;
        this.globalMousePos.y = this.localMousePos.y + pageOffset.y;
    }
}
