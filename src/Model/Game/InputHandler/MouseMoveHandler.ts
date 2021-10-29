import { Vector } from "../../Utils/2D/Vector";
import { InputHandler } from "./InputHandler";
import { Game } from "../Game";
import { Square } from "../../Utils/2D/Square";
import { screenExtendFactor } from "../RenderingHandler/CameraHandler";

const mouseMovementFactor: number = 1.3;

export class MouseMoveHandler {
    public readonly globalMousePos: Vector = { x: 0, y: 0 };
    public readonly localMousePos: Vector;
    public readonly screenBounds: Square;

    constructor(private readonly inputHandler: InputHandler, private readonly Game: Game) {
        this.screenBounds = this.Game.renderHandler.screenHandler.getWindowSize();
        this.localMousePos = { x: 300, y: 0 };
    }

    public onMouseMove(e: MouseEvent) {
        this.localMousePos.x += e.movementX * mouseMovementFactor;
        this.localMousePos.y += e.movementY * mouseMovementFactor;
    }

    public updateGlobalMousePos() {
        let focusOffset = this.Game.renderHandler.cameraHandler.focus;
        do {
            this.globalMousePos.x = this.localMousePos.x + focusOffset.x;
            this.globalMousePos.y = this.localMousePos.y + focusOffset.y;
        } while (!this.checkIfInMouseBounds());
    }

    public bumpMouse(bump: Vector) {
        this.localMousePos.x += bump.x;
        this.localMousePos.y += bump.y;
        this.checkIfInMouseBounds();
    }

    private checkIfInMouseBounds(): boolean {
        let maxX: number = (this.screenBounds.width / 2) * (screenExtendFactor / (screenExtendFactor - 1));

        if (this.localMousePos.x < -maxX) {
            this.localMousePos.x = -maxX;
            return false;
        } else if (this.localMousePos.x > maxX) {
            this.localMousePos.x = maxX;
            return false;
        }
        let maxY: number = (this.screenBounds.height / 2) * (screenExtendFactor / (screenExtendFactor - 1));

        if (this.localMousePos.y < -maxY) {
            this.localMousePos.y = -maxY;
            return false;
        } else if (this.localMousePos.y > maxY) {
            this.localMousePos.y = maxY;
            return false;
        }
        return true;
    }
}
