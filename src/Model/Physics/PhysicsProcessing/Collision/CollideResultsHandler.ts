import { Angle } from "../../../Utils/2D/Angle/Angle";
import { Vector } from "../../../Utils/2D/Vector";
import { CONFIG } from "../../../Utils/gameConfig/GameConfig";
import { DynamObjInterface } from "../../PhysicsInterfaces/DynamObjInterface";
import { Gravity } from "../NaturalForces/Gravity";
import { DynamObjCollisionResults } from "./CollisionProcessor";

export abstract class CollideResultsHandler {
    public static handleCollideResults(dynamObj: DynamObjInterface, collisionData: DynamObjCollisionResults, elapsedTime: number) {
        let standable: boolean = this.ifStandable(collisionData.faceAngle);

        let surfacePressForce: Vector = this.getSurfacePressForce(collisionData.faceAngle, elapsedTime);

        let newMom: Vector = Vector.addVectors(
            { x: -collisionData.forcebackVector.x, y: -collisionData.forcebackVector.y },
            { x: dynamObj.momentum.x * elapsedTime, y: dynamObj.momentum.y * elapsedTime },
        );

        let slideMom: Vector = Vector.projectUOntoV(collisionData.forcebackVector, Angle.findVectorFromAngle(collisionData.faceAngle));
        newMom.x += slideMom.x + surfacePressForce.x;
        newMom.y += slideMom.y + surfacePressForce.y;

        if (standable) {
            dynamObj.onGround = true;

            let antiGravityForce: Vector = this.getAntiGravityForce(collisionData.faceAngle, elapsedTime);
            newMom.x += antiGravityForce.x * elapsedTime;
            newMom.y += antiGravityForce.y * elapsedTime;
        }

        dynamObj.momentum.x = newMom.x / elapsedTime;
        dynamObj.momentum.y = newMom.y / elapsedTime;
    }

    private static getAntiGravityForce(groundAngle: number, elapsedTime: number): Vector {
        let antiGravityForce: Vector = { x: 0, y: -Gravity.getGravityMagnitude(elapsedTime) };
        return Vector.projectUOntoV(antiGravityForce, Angle.findVectorFromAngle(groundAngle));
    }

    private static getSurfacePressForce(angle: number, elapsedTime: number): Vector {
        let orthogAngle: number = Angle.addAngles(angle, (Math.PI * 3) / 2);
        return Angle.findVectorFromAngle(orthogAngle, elapsedTime);
    }

    private static ifStandable(angle: number): boolean {
        return angle <= CONFIG.PhysicsConfig.maxStandAngle || angle >= Math.PI * 2 - CONFIG.PhysicsConfig.maxStandAngle;
    }
}
