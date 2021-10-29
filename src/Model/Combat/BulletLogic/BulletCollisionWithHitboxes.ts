import { Vector } from "../../Utils/2D/Vector";
import { Game } from "../../Game/Game";
import { LineIntersection, LineIntersectWithShapesReturnData } from "../../Utils/2D/LineIntersection/LineIntersection";
import { StaticObj } from "../../Physics/PhysicsObjs/StaticObj";
import { StaticObjEdge } from "../../Physics/PhysicsInterfaces/StaticObjEdgeInterface";
import { Shape } from "../../Utils/2D/Shape";
import { HealthActorInterface } from "../Health/HealthActorInterface";
import { Id } from "../../Utils/Actor/Id";
import { Team } from "../TeamLogic";

export class BulletCollisionWithHitboxes {
    public static checkBulletIntersectWithAllMobs(startPoint: Vector, endPoint: Vector, team: Team, game: Game): MobHitResults {
        let returnData: MobHitResults = {
            newEndPoint: endPoint,
            healthActor: undefined,
        };

        let allHitBoxMobs: (Shape & HealthActorInterface & Id)[] = game.itemHandler.hitBoxes.hitboxItems.items;
        let hitBoxMobs: (Shape & HealthActorInterface & Id)[] = [];

        if (team == "self" || team == "ally") {
            hitBoxMobs = allHitBoxMobs.filter((hitbox) => {
                return hitbox.team == "enemy";
            });
        } else {
            hitBoxMobs = allHitBoxMobs.filter((hitbox) => {
                return hitbox.team != "enemy";
            });
        }

        let results: LineIntersectWithShapesReturnData = LineIntersection.IfLineIntersectsWithShapes(startPoint, endPoint, hitBoxMobs);

        returnData.newEndPoint = results.newEndPoint;
        if (results.hitShapeIndex != -1) {
            returnData.healthActor = hitBoxMobs[results.hitShapeIndex];
        }

        return returnData;
    }
}

export interface MobHitResults {
    newEndPoint: Vector;
    healthActor: HealthActorInterface | undefined;
}
