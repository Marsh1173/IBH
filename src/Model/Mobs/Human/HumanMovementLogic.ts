import { DynamObjInterface } from "../../Physics/PhysicsInterfaces/DynamObjInterface";
import { PlayerInterface } from "../../Player/PlayerInterface";
import { ShapeMethods } from "../../Utils/2D/Shape";
import { CONFIG } from "../../Utils/gameConfig/GameConfig";
import { HumanInterface } from "./HumanInterface";

export class HumanMovementLogic {
    public static accelerateSideways(obj: DynamObjInterface, elapsedTime: number, ifLeft: boolean) {
        let factor: number = 1;
        if (ifLeft) factor = -1;

        if ((obj.momentum.x > -CONFIG.MobConfig.HumanMaxSidewaysSpeed && ifLeft) || (obj.momentum.x < CONFIG.MobConfig.HumanMaxSidewaysSpeed && !ifLeft)) {
            if (obj.onGround) {
                obj.momentum.x += factor * CONFIG.MobConfig.HumanStandingAccel * elapsedTime;
            } else {
                obj.momentum.x += factor * CONFIG.MobConfig.HumanFallingAccel * elapsedTime;
            }
            if ((obj.momentum.x < -CONFIG.MobConfig.HumanMaxSidewaysSpeed && ifLeft) || (obj.momentum.x > CONFIG.MobConfig.HumanMaxSidewaysSpeed && !ifLeft))
                obj.momentum.x = factor * CONFIG.MobConfig.HumanMaxSidewaysSpeed;
        }
    }
    public static crouch(obj: DynamObjInterface & HumanInterface) {
        obj.baseShape = CONFIG.MobConfig.HumanCrouchingShape;
        obj.points = ShapeMethods.offsetShape(obj.baseShape.points, obj.position);

        //if (obj.onGround) obj.position.y += (CONFIG.MobConfig.HumanDimensions.height - CONFIG.MobConfig.HumanCrouchingDimensions.height) / 2;

        obj.crouching = true;
    }

    public static unCrouch(obj: DynamObjInterface & HumanInterface) {
        obj.baseShape = CONFIG.MobConfig.HumanShape;
        obj.points = ShapeMethods.offsetShape(obj.baseShape.points, obj.position);

        //if (obj.onGround) obj.position.y -= (CONFIG.MobConfig.HumanDimensions.height - CONFIG.MobConfig.HumanCrouchingDimensions.height) / 2;

        obj.crouching = false;
    }

    public static jump(obj: DynamObjInterface) {
        obj.momentum.y = -CONFIG.PlayerConfig.PlayerJumpHeight;
    }
}
