import { Shape } from "../../Utils/2D/Shape";
import { BaseObjInterface } from "./BaseObjInterface";
import { MomentumObjInterface } from "./MomentumObjInterface";

export interface DynamObjInterface extends MomentumObjInterface, BaseObjInterface {
    onGround: boolean;
    baseShape: Shape;

    ifGroundFriction: () => boolean;
}
