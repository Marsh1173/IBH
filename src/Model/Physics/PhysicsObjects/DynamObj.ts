import { Square } from "../../Utils/2D/Square";
import { Vector } from "../../Utils/2D/Vector";
import { BaseObj } from "./BaseObj";
import { MomentumObj } from "./MomentumObj";

export interface DynamObj extends MomentumObj {
    prevMomentum: Vector;
    onGround: boolean;
    dimensions: Square;

    ifGroundFriction: () => boolean;
}
