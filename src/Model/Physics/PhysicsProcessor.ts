import { ItemContainer } from "../Utils/Containers/ItemContainer";
import { DynamObjInterface } from "./PhysicsInterfaces/DynamObjInterface";
import { StaticObj } from "./PhysicsObjs/StaticObj";
import { CollisionProcessor } from "./PhysicsProcessing/Collision/CollisionProcessor";
import { Friction } from "./PhysicsProcessing/NaturalForces/Friction";
import { Gravity } from "./PhysicsProcessing/NaturalForces/Gravity";

export class PhysicsProcessor {
    public collisionProcessor: CollisionProcessor;

    constructor(private dynams: ItemContainer<DynamObjInterface>, private statics: ItemContainer<StaticObj>) {
        this.collisionProcessor = new CollisionProcessor(this.statics);
    }

    public processPhysics(elapsedTime: number) {
        this.dynams.items.forEach((dynamObj) => {
            //1. natural momentum changes
            this.updateDynamObjNaturalPhysics(dynamObj, elapsedTime);

            dynamObj.onGround = false;

            //2. update position based on collision
            let counter: number = 10;
            while (this.collisionProcessor.processDynamObjCollision(dynamObj, elapsedTime) && counter >= 0) {
                counter--;
            }

            //3. update position based on momentum
            this.positionUpdate(dynamObj, elapsedTime);
        });
    }

    private updateDynamObjNaturalPhysics(obj: DynamObjInterface, elapsedTime: number) {
        Gravity.registerGravity(obj, elapsedTime);
        Friction.registerFriction(obj, elapsedTime);
    }

    private positionUpdate(obj: DynamObjInterface, elapsedTime: number) {
        obj.position.x += obj.momentum.x * elapsedTime;
        obj.position.y += obj.momentum.y * elapsedTime;
    }
}
