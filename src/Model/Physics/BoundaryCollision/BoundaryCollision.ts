import { GAME_PRESET } from "../../Utils/gamePresets/gamePreset";
import { DynamObj } from "../PhysicsObjects/DynamObj";

export class BoundaryCollision {
    private static readonly mapWidth: number = GAME_PRESET.mapWidth;

    public static checkSquareXBoundaryCollision(obj: DynamObj) {
        if (obj.position.x - obj.dimensions.width / 2 < 0) {
            obj.position.x = obj.dimensions.width / 2;
            obj.momentum.x = Math.max(obj.momentum.x, 0);
        } else if (obj.position.x + obj.dimensions.width / 2 > this.mapWidth) {
            obj.position.x = this.mapWidth - obj.dimensions.width / 2;
            obj.momentum.x = Math.min(obj.momentum.x, 0);
        }
    }
}
