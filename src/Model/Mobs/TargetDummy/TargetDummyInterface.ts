import { HealthActorInterface } from "../../Combat/Health/HealthActorInterface";
import { BaseObjInterface } from "../../Physics/PhysicsInterfaces/BaseObjInterface";
import { Renderable } from "../../Rendering/Renderable";
import { Shape } from "../../Utils/2D/Shape";
import { Updateable } from "../../Utils/Updateable/Updateable";

export interface TargetDummyInterface extends HealthActorInterface, Renderable, BaseObjInterface, Updateable, Shape {}
