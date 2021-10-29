import { Shape } from "../../Utils/2D/Shape";
import { Vector } from "../../Utils/2D/Vector";
import { Id } from "../../Utils/Actor/Id";

export interface BaseObjInterface extends Id, Shape {
    readonly position: Vector;
    points: Vector[];
    collisionDist: number;
}
