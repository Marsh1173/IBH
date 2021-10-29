import { CONFIG } from "../../../Utils/gameConfig/GameConfig";
import { DynamObjInterface } from "../../PhysicsInterfaces/DynamObjInterface";

export abstract class Friction {
    public static registerFriction(obj: DynamObjInterface, elapsedTime: number) {
        if (obj.onGround && obj.ifGroundFriction()) {
            Friction.registerGroundFrictionMomentumDecrease(obj, elapsedTime);
        }
    }
    private static registerGroundFrictionMomentumDecrease(obj: DynamObjInterface, elapsedTime: number) {
        if (obj.momentum.x > 0) {
            obj.momentum.x -= elapsedTime * CONFIG.PhysicsConfig.groundFriction;
            if (obj.momentum.x < 0) obj.momentum.x = 0;
        } else if (obj.momentum.x < 0) {
            obj.momentum.x += elapsedTime * CONFIG.PhysicsConfig.groundFriction;
            if (obj.momentum.x > 0) obj.momentum.x = 0;
        }
    }
    //public static registerFallingFrictionMomentumDecrease(obj: DynamObj, elapsedTime: number) {}
}
