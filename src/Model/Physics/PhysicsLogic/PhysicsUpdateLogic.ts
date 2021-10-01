import { DynamObj } from "../PhysicsObjects/DynamObj";
import { Gravity } from "../NaturalForces/Gravity";
import { Friction } from "../NaturalForces/Friction";
import { GroundCollision } from "../GroundCollision/GroundCollision";
import { PhysicsHandler } from "../../Game/PhysicsHandler/PhysicsHandler";

export function updateDynamObjPhysics(this: PhysicsHandler, obj: DynamObj, elapsedTime: number) {
    //1. natural momentum changes
    Gravity.registerGravity(obj, elapsedTime);
    Friction.registerFriction(obj, elapsedTime);

    //2. update position based on momentum
    this.positionUpdate(obj, elapsedTime);
    obj.onGround = false;

    //3. update position based on collision, lowest precendence first
    //static object collision
    //ground collision
    GroundCollision.registerGroundCollision(obj);
    //boundary collision disabled for now
    //BoundaryCollision.checkSquareXBoundaryCollision(obj);
}

export function finalPositionUpdate(this: PhysicsHandler, obj: DynamObj, elapsedTime: number) {
    obj.position.x += ((obj.momentum.x + obj.prevMomentum.x) * elapsedTime) / 2;
    obj.position.y += ((obj.momentum.y + obj.prevMomentum.y) * elapsedTime) / 2;

    obj.prevMomentum.x = obj.momentum.x;
    obj.prevMomentum.y = obj.momentum.y;
}
