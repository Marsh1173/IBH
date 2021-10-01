import { Square } from "../../Utils/2D/Square";
import { Vector } from "../../Utils/2D/Vector";
import { Game } from "../Game";
import { RenderHandler } from "./RenderHandler";

export class CameraHandler {
    private windowCenterPos: Vector = { x: 0, y: 0 };
    private readonly windowSize: Square;
    private focus: Vector = { x: 0, y: 0 };

    constructor(private readonly renderHandler: RenderHandler, private readonly Game: Game) {
        this.windowSize = this.renderHandler.screenHandler.getWindowSize();
    }

    public update(elapsedTime: number) {
        let globalMousePos: Vector = this.Game.inputHandler.mouseHandler.globalMousePos;

        this.windowCenterPos.x = (this.focus.x * 3 + globalMousePos.x) / 4;
        this.windowCenterPos.y = (this.windowCenterPos.y * 1 + (this.focus.y * 5 + globalMousePos.y) / 6) / 2;
    }

    public getCanvasClearDimensions(): { pos: Vector; size: Square } {
        return {
            pos: { x: this.windowCenterPos.x - this.windowSize.width / 2, y: this.windowCenterPos.y - (this.windowSize.height * 2) / 3 },
            size: this.windowSize,
        };
    }

    public getCameraTransform(): Vector {
        return { x: this.windowCenterPos.x - this.windowSize.width / 2, y: this.windowCenterPos.y - (this.windowSize.height * 2) / 3 };
    }

    public getCameraSize(): Square {
        return this.windowSize;
    }

    public setFocus(newFocus: Vector) {
        this.focus = newFocus;
    }

    public getFocus(): Vector {
        return this.focus;
    }
}
