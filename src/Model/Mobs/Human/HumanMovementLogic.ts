import { DynamObj } from "../../Physics/PhysicsObjects/DynamObj";
import { PlayerInterface } from "../../Player/PlayerInterface";
import { CONFIG } from "../../Utils/gameConfig/GameConfig";
import { Human } from "./Human";
import { HumanInterface } from "./HumanInterface";

export class HumanMovementLogic {
    public static accelerateLeft(obj: DynamObj, elapsedTime: number) {
        if (obj.momentum.x > -CONFIG.MobConfig.HumanMaxSidewaysSpeed) {
            if (obj.onGround) {
                obj.momentum.x -= CONFIG.MobConfig.HumanStandingAccel * elapsedTime;
            } else {
                obj.momentum.x -= CONFIG.MobConfig.HumanFallingAccel * elapsedTime;
            }
            if (obj.momentum.x < -CONFIG.MobConfig.HumanMaxSidewaysSpeed) obj.momentum.x = -CONFIG.MobConfig.HumanMaxSidewaysSpeed + 1;
        }
    }
    public static accelerateRight(obj: DynamObj, elapsedTime: number) {
        if (obj.momentum.x < CONFIG.MobConfig.HumanMaxSidewaysSpeed) {
            if (obj.onGround) {
                obj.momentum.x += CONFIG.MobConfig.HumanStandingAccel * elapsedTime;
            } else {
                obj.momentum.x += CONFIG.MobConfig.HumanFallingAccel * elapsedTime;
            }
            if (obj.momentum.x > CONFIG.MobConfig.HumanMaxSidewaysSpeed) obj.momentum.x = CONFIG.MobConfig.HumanMaxSidewaysSpeed + 1;
        }
    }
    public static crouch(obj: DynamObj & HumanInterface) {
        obj.dimensions.width = CONFIG.MobConfig.HumanCrouchingDimensions.width;
        obj.dimensions.height = CONFIG.MobConfig.HumanCrouchingDimensions.height;

        if (obj.onGround) obj.position.y += (CONFIG.MobConfig.HumanDimensions.height - CONFIG.MobConfig.HumanCrouchingDimensions.height) / 2;

        obj.crouching = true;
    }

    public static unCrouch(obj: DynamObj & HumanInterface) {
        obj.dimensions.width = CONFIG.MobConfig.HumanDimensions.width;
        obj.dimensions.height = CONFIG.MobConfig.HumanDimensions.height;

        if (obj.onGround) obj.position.y -= (CONFIG.MobConfig.HumanDimensions.height - CONFIG.MobConfig.HumanCrouchingDimensions.height) / 2;

        obj.crouching = false;
    }

    public static jump(obj: DynamObj) {
        obj.momentum.y = -CONFIG.PlayerConfig.PlayerJumpHeight;
    }
}
