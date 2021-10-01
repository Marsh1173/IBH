import { Vector } from "../../Utils/2D/Vector";
import { BaseObj } from "./BaseObj";

export interface MomentumObj extends BaseObj {
    momentum: Vector;
}
