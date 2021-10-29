import { Vector } from "../../Utils/2D/Vector";

export interface StaticObjEdge {
    readonly p1: Vector;
    readonly p2: Vector;
    readonly angle: number;
    readonly material: MaterialType;
}

export type MaterialType = "snow" | "metal" | "none";
