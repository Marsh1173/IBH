import { MathExtra } from "../MathExtra";
import { Vector } from "../Vector";

export class Angle {
    /**
     * Finds the angle between two points.
     * @param p1 The point from which the angle will be measured.
     * @param p2 The point to which the angle will be measured.
     * @returns The calculated angle.
     */
    public static findAngle(p1: Vector, p2: Vector): number {
        let angle: number = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        return angle < 0 ? angle + Math.PI * 2 : angle;
        //atan2 gives an angle between -PI and PI. For simplicity, I made all angles between 0 and PI * 2
    }

    /**
     * Calculates two angles added together, keeping the answer between 0 and PI * 2
     */
    public static addAngles(angle1: number, angle2: number): number {
        return MathExtra.absValueModulo(angle1 + angle2, Math.PI * 2);
    }

    public static findVectorFromAngle(angle: number, magnitude: number = 1, startPoint: Vector = { x: 0, y: 0 }): Vector {
        return { x: Math.cos(angle) * magnitude + startPoint.x, y: Math.sin(angle) * magnitude + startPoint.y };
    }

    public static rotateLine(lineLength: number, angle: number): Vector {
        return { x: Math.cos(angle) * lineLength, y: Math.sin(angle) * lineLength };
    }
}
