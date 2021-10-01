import { CONFIG } from "../../Utils/gameConfig/GameConfig";
import { DynamObj } from "../PhysicsObjects/DynamObj";
import { MomentumObj } from "../PhysicsObjects/MomentumObj";

export class Gravity {
    public static registerGravity(obj: MomentumObj, elapsedTime: number) {
        obj.momentum.y += CONFIG.PhysicsConfig.fallingAccel * elapsedTime;
    }
}
