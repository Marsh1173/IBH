import { Vector } from "../../Utils/2D/Vector";
import { DynamObj } from "../PhysicsObjects/DynamObj";

const DUMMY_GAME_HEIGHT: number = 700;

export class GroundCollision {
    public static registerGroundCollision(obj: DynamObj) {
        if (obj.position.y + obj.dimensions.height / 2 > DUMMY_GAME_HEIGHT) {
            obj.position.y = DUMMY_GAME_HEIGHT - obj.dimensions.height / 2;
            obj.momentum.y = Math.min(obj.momentum.y, 0);
            obj.onGround = true;
        }
    }
}
