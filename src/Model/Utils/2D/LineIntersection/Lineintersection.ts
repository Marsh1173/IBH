import { Vector } from "../Vector";
import { Shape } from "../Shape";
import { ifPointInside } from "./ifPointInside";

export class LineIntersection {
    public static IfLineIntersectsWithShapes(startPoint: Vector, endPoint: Vector, shapes: Shape[]): LineIntersectWithShapesReturnData {
        //check if startpoint is in each shape
        //check each shape if the lines connect

        let returnData: LineIntersectWithShapesReturnData = {
            ifStartsInsideShape: false,
            newEndPoint: endPoint,
            closestPointDistance: Vector.findDistance(startPoint, endPoint),
            hitLineIndex: -1,
            hitShapeIndex: -1,
        };

        for (let j: number = 0; j < shapes.length; j++) {
            let shapeResults: LineIntersectWithShapeReturnData = this.checkLineIntersectionWithShape(
                startPoint,
                returnData.newEndPoint,
                returnData.closestPointDistance,
                shapes[j],
            );

            if (shapeResults.closestPointDistance < returnData.closestPointDistance) {
                returnData.ifStartsInsideShape = shapeResults.ifStartsInsideShape;
                returnData.newEndPoint = shapeResults.newEndPoint;
                returnData.closestPointDistance = shapeResults.closestPointDistance;
                returnData.hitLineIndex = shapeResults.hitLineIndex;
                returnData.hitShapeIndex = j;
            }
        }

        return returnData;
    }

    /**
     * @param startPoint
     * @param endPoint
     * @param closestPointDistance distance from the start point to the end point.
     * @param shape the collection of points of the shape.
     * @returns the closest point of intersection to the start point or the original point if there was no intersection.
     */
    public static checkLineIntersectionWithShape(
        startPoint: Vector,
        endPoint: Vector,
        closestPointDistance: number,
        shape: Shape,
    ): LineIntersectWithShapeReturnData {
        let returnData: LineIntersectWithShapeReturnData = {
            ifStartsInsideShape: false,
            newEndPoint: endPoint,
            closestPointDistance,
            hitLineIndex: -1,
        };

        if (ifPointInside(shape.points, startPoint)) returnData.ifStartsInsideShape = true;

        for (let i: number = 0; i < shape.points.length; i++) {
            let edgeCollisionCheck: Vector | undefined = LineIntersection.findIntersectionBetweenTwoLines(
                startPoint,
                endPoint,
                shape.points[i],
                shape.points[(i + 1) % shape.points.length],
            );

            if (edgeCollisionCheck) {
                let distance: number = Vector.findDistance(startPoint, edgeCollisionCheck);

                if (distance < returnData.closestPointDistance) {
                    returnData.hitLineIndex = i;
                    returnData.closestPointDistance = distance;
                    returnData.newEndPoint = edgeCollisionCheck;
                }
            }
        }

        return returnData;
    }

    public static findIntersectionBetweenTwoLines(line1Start: Vector, line1End: Vector, line2Start: Vector, line2End: Vector): undefined | Vector {
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
}

export interface LineIntersectWithShapeReturnData {
    ifStartsInsideShape: boolean;
    newEndPoint: Vector;
    closestPointDistance: number;
    hitLineIndex: number;
}

export interface LineIntersectWithShapesReturnData extends LineIntersectWithShapeReturnData {
    hitShapeIndex: number;
}
