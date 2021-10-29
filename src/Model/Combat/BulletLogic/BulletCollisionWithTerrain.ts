import { Vector } from "../../Utils/2D/Vector";
import { Game } from "../../Game/Game";
import { LineIntersection, LineIntersectWithShapesReturnData } from "../../Utils/2D/LineIntersection/LineIntersection";
import { StaticObj } from "../../Physics/PhysicsObjs/StaticObj";
import { StaticObjEdge } from "../../Physics/PhysicsInterfaces/StaticObjEdgeInterface";

export class BulletCollisionWithTerrain {
    public static checkBulletIntersectionWithAllTerrain(startPoint: Vector, endPoint: Vector, game: Game): StaticObjHitResults {
        let returnData: StaticObjHitResults = {
            ifStartsInsideShape: false,
            newEndPoint: { x: 0, y: 0 + 0 },
            edge: undefined,
        };

        let staticObjs: StaticObj[] = game.itemHandler.physics.statics.items;

        let results: LineIntersectWithShapesReturnData = LineIntersection.IfLineIntersectsWithShapes(startPoint, endPoint, staticObjs);

        returnData.ifStartsInsideShape = results.ifStartsInsideShape;
        returnData.newEndPoint = results.newEndPoint;
        if (results.hitLineIndex != -1 && results.hitShapeIndex != -1) {
            returnData.edge = staticObjs[results.hitShapeIndex].edges[results.hitLineIndex];
        }

        return returnData;
    }
}

export interface StaticObjHitResults {
    ifStartsInsideShape: boolean;
    newEndPoint: Vector;
    edge: StaticObjEdge | undefined;
}
