import { Angle } from "../../../Utils/2D/Angle/Angle";
import { LineIntersection, LineIntersectWithShapeReturnData } from "../../../Utils/2D/LineIntersection/LineIntersection";
import { Vector } from "../../../Utils/2D/Vector";
import { DynamObjInterface } from "../../PhysicsInterfaces/DynamObjInterface";
import { StaticObj } from "../../PhysicsObjs/StaticObj";
import { DynamObjCollisionResults } from "./CollisionProcessor";

export abstract class StaticDynamObjCollision {
    public static getDynamToStaticCollision(dynamMomLines: { p1: Vector; p2: Vector }[], staticObj: StaticObj): DynamObjCollisionResults | undefined {
        let results: DynamObjCollisionResults | undefined = undefined;
        let momentumMag: number = Vector.findDistance(dynamMomLines[0].p1, dynamMomLines[0].p2);

        dynamMomLines.forEach((momLine) => {
            let lineResults: LineIntersectWithShapeReturnData = LineIntersection.checkLineIntersectionWithShape(momLine.p1, momLine.p2, momentumMag, {
                points: staticObj.points,
            });
            if (lineResults.newEndPoint != momLine.p2 && lineResults.closestPointDistance < momentumMag) {
                momentumMag = lineResults.closestPointDistance;
                results = {
                    forcebackVector: { x: momLine.p2.x - lineResults.newEndPoint.x, y: momLine.p2.y - lineResults.newEndPoint.y },
                    faceAngle: staticObj.edges[lineResults.hitLineIndex].angle,
                };
            }
        });

        return results;
    }
    public static getStaticToDynamCollision(staticMomLines: { p1: Vector; p2: Vector }[], dynamObj: DynamObjInterface): DynamObjCollisionResults | undefined {
        let results: DynamObjCollisionResults | undefined = undefined;
        let momentumMag: number = Vector.findDistance(staticMomLines[0].p1, staticMomLines[0].p2);
        let bestDist: number = momentumMag;

        staticMomLines.forEach((momLine) => {
            let lineResults: LineIntersectWithShapeReturnData = LineIntersection.checkLineIntersectionWithShape(momLine.p1, momLine.p2, momentumMag, {
                points: dynamObj.points,
            });
            if (lineResults.newEndPoint != momLine.p2 && momentumMag - lineResults.closestPointDistance < bestDist) {
                bestDist = momentumMag - lineResults.closestPointDistance;
                results = {
                    forcebackVector: { x: lineResults.newEndPoint.x - momLine.p2.x, y: lineResults.newEndPoint.y - momLine.p2.y },
                    faceAngle:
                        Angle.findAngle(dynamObj.points[lineResults.hitLineIndex], dynamObj.points[(lineResults.hitLineIndex + 1) % dynamObj.points.length]) +
                        Math.PI,
                };
            }
        });

        return results;
    }
}
