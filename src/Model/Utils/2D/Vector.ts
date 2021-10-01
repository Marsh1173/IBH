export interface Vector {
    x: number;
    y: number;
}
export function findDistance(p1: Vector, p2: Vector): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}
export function findDifference(p1: Vector, p2: Vector): Vector {
    return { x: p2.x - p1.x, y: p2.y - p1.y };
}
