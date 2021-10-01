import { HealthActorInterface } from "../../Combat/Health/HealthActorInterface";
import { BaseObj } from "../../Physics/PhysicsObjects/BaseObj";
import { Renderable } from "../../Rendering/Renderable";
import { Shape } from "../../Utils/2D/Shape";
import { Updateable } from "../../Utils/Updateable/Updateable";

export interface TargetDummyInterface extends HealthActorInterface, Renderable, BaseObj, Updateable, Shape {}
