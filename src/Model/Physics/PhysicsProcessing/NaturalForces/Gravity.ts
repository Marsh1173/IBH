import { CONFIG } from "../../../Utils/gameConfig/GameConfig";
import { MomentumObjInterface } from "../../PhysicsInterfaces/MomentumObjInterface";

export abstract class Gravity {
    public static registerGravity(obj: MomentumObjInterface, elapsedTime: number) {
        obj.momentum.y += this.getGravityMagnitude(elapsedTime);
    }

    public static getGravityMagnitude(elapsedTime: number): number {
        return CONFIG.PhysicsConfig.fallingAccel * elapsedTime;
    }
}
