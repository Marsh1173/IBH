import { TeamInterface } from "../../Combat/TeamLogic";
import { HealthActorInterface } from "../../Combat/Health/HealthActorInterface";
import { DynamObjInterface } from "../../Physics/PhysicsInterfaces/DynamObjInterface";
import { Renderable } from "../../Rendering/Renderable";
import { Actor } from "../../Utils/Actor/Actor";
import { HealthHandler } from "../../Combat/Health/HealthHandler";

export interface HumanInterface extends Actor, DynamObjInterface, Renderable, TeamInterface, HealthActorInterface {
    movingLeft: boolean;
    movingRight: boolean;
    crouching: boolean;

    crouch: () => void;
    unCrouch: () => void;
}
