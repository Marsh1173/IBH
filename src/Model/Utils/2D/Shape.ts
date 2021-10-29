import { Vector } from "./Vector";

export interface Shape {
    points: Vector[];
}

export abstract class ShapeMethods {
    public static offsetShape(points: Vector[], offset: Vector): Vector[] {
        return points.map((point) => {
            return { x: point.x + offset.x, y: point.y + offset.y };
        });
    }
}
