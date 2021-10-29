export interface Vector {
    x: number;
    y: number;
}
export abstract class Vector {
    public static findDistance(p1: Vector, p2: Vector): number {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }
    public static findDifference(p1: Vector, p2: Vector): Vector {
        return { x: p2.x - p1.x, y: p2.y - p1.y };
    }
    public static findLength(point: Vector): number {
        return Math.sqrt(point.x ** 2 + point.y ** 2);
    }
    public static addVectors(v1: Vector, v2: Vector): Vector {
        return { x: v1.x + v2.x, y: v1.y + v2.y };
    }
    /**
     * Function to project the vector U onto V, giving a vector in the direction of V.
     * @returns A vector going in the direction of V
     */
    public static projectUOntoV(u: Vector, v: Vector): Vector {
        let dotProduct: number = this.dotProduct(u, v) / this.dotProduct(v, v);
        return { x: v.x * dotProduct, y: v.y * dotProduct };
    }
    public static dotProduct(u: Vector, v: Vector): number {
        return u.x * v.x + u.y * v.y;
    }
}
