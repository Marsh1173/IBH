import { Game } from "../game";
import { DynamObj } from "../../Physics/PhysicsObjects/DynamObj";
import { Gravity } from "../../Physics/NaturalForces/Gravity";
import { Friction } from "../../Physics/NaturalForces/Friction";
import { GroundCollision } from "../../Physics/GroundCollision/GroundCollision";
import { BoundaryCollision } from "../../Physics/BoundaryCollision/BoundaryCollision";
import { finalPositionUpdate, updateDynamObjPhysics } from "../../Physics/PhysicsLogic/PhysicsUpdateLogic";

export class PhysicsHandler {
    constructor(private readonly Game: Game) {}

    public updatePhysics(elapsedTime: number) {
        this.updateDynamObjPhysics(this.Game.mobHandler.dummyPlayer, elapsedTime);
        //foreach obj..
    }

    protected updateDynamObjPhysics: (obj: DynamObj, elapsedTime: number) => void = updateDynamObjPhysics;
    protected positionUpdate: (obj: DynamObj, elapsedTime: number) => void = finalPositionUpdate;
}
