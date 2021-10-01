import { Vector } from "../Vector";

function findIntersection(line1Start: Vector, line1End: Vector, line2Start: Vector, line2End: Vector): undefined | Vector {
    // Check if none of the lines are of length 0
    if ((line1Start.x === line1End.x && line1Start.y === line1End.y) || (line2Start.x === line2End.x && line2Start.y === line2End.y)) {
        return undefined;
    }

    let denominator: number = (line2End.y - line2Start.y) * (line1End.x - line1Start.x) - (line2End.x - line2Start.x) * (line1End.y - line1Start.y);

    // Lines are parallel
    if (denominator === 0) {
        return undefined;
    }

    let ua = ((line2End.x - line2Start.x) * (line1Start.y - line2Start.y) - (line2End.y - line2Start.y) * (line1Start.x - line2Start.x)) / denominator;
    let ub = ((line1End.x - line1Start.x) * (line1Start.y - line2Start.y) - (line1End.y - line1Start.y) * (line1Start.x - line2Start.x)) / denominator;

    // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return undefined;
    }

    // Return a object with the x and y coordinates of the intersection
    let x = line1Start.x + ua * (line1End.x - line1Start.x);
    let y = line1Start.y + ua * (line1End.y - line1Start.y);

    return { x, y };
}
