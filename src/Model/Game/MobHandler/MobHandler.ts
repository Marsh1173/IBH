import { DummyFloor } from "../../Terrain/DummyFloor";
import { Renderable } from "../../Rendering/Renderable";
import { findDistance, Vector } from "../../Utils/2D/Vector";
import { Actor } from "../../Utils/Actor/Actor";
import { Game } from "../game";
import { Player } from "../../Player/Player";
import { Updateable } from "../../Utils/Updateable/Updateable";
import { TargetDummy } from "../../Mobs/TargetDummy/TargetDummy";
import { HealthActorInterface } from "../../Combat/Health/HealthActorInterface";
import { LineIntersection, LineIntersectWithShapesReturnData } from "../../Utils/2D/LineIntersection/LineIntersection";
import { Shape } from "../../Utils/2D/Shape";

export class MobHandler {
    public readonly dummyPlayer: Player;
    public readonly updateableMobs: Updateable[] = [];
    public readonly hitBoxMobs: (Shape & HealthActorInterface)[] = [];

    constructor(private readonly game: Game) {
        this.dummyPlayer = new Player({ x: 200, y: 300 }, this.game);

        this.game.renderHandler.renderableMobs.player = this.dummyPlayer;
    }

    public updateMobs(elapsedTime: number) {
        this.dummyPlayer.update(elapsedTime);
        this.updateableMobs.forEach((mob) => {
            mob.update(elapsedTime);
        });
    }

    public newTargetDummy(pos: Vector) {
        let targetDummy: TargetDummy = new TargetDummy(pos);

        this.updateableMobs.push(targetDummy);
        this.hitBoxMobs.push(targetDummy);

        this.game.renderHandler.renderableMobs.mobs.push(targetDummy);
    }

    public checkLineIntersectWithAllMobs(startPoint: Vector, endPoint: Vector): MobHitResults {
        let returnData: MobHitResults = {
            newEndPoint: endPoint,
            healthActor: undefined,
        };

        let closestPointDistance: number = findDistance(startPoint, endPoint);

        let results: LineIntersectWithShapesReturnData = LineIntersection.IfLineIntersectsWithShapes(startPoint, endPoint, this.hitBoxMobs);

        returnData.newEndPoint = results.newEndPoint;
        if (results.hitShapeIndex != -1) {
            returnData.healthActor = this.hitBoxMobs[results.hitShapeIndex];
        }

        return returnData;
    }
}

export interface MobHitResults {
    newEndPoint: Vector;
    healthActor: HealthActorInterface | undefined;
}
