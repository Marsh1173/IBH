import { Angle } from "../../../Utils/2D/Angle/Angle";
import { Vector } from "../../../Utils/2D/Vector";
import { ItemContainer } from "../../../Utils/Containers/ItemContainer";
import { DynamObjInterface } from "../../PhysicsInterfaces/DynamObjInterface";
import { StaticObj } from "../../PhysicsObjs/StaticObj";
import { StaticDynamObjCollision } from "./S-D-ObjCollision";
import { CONFIG } from "../../../Utils/gameConfig/GameConfig";
import { BestCollisionTracker } from "./BestCollisionTracker";
import { CollideResultsHandler } from "./CollideResultsHandler";

export class CollisionProcessor {
    private statics: StaticObj[];
    constructor(itemContainer: ItemContainer<StaticObj>) {
        this.statics = itemContainer.items;
    }

    public processDynamObjCollision(obj: DynamObjInterface, elapsedTime: number): boolean {
        this.prepDynamObj(obj, elapsedTime);

        let momEdges: { p1: Vector; p2: Vector }[] = this.getDynamMomentumEdges(obj, elapsedTime);

        for (let i: number = 0; i < this.statics.length; i++) {
            //collision distance check
            if (!CollisionProcessor.ifMightCollide(obj.collisionDist, obj.position, this.statics[i])) continue;

            let staticMomEdges: { p1: Vector; p2: Vector }[] = this.getStaticMomentumEdges(this.statics[i], obj.momentum, elapsedTime);

            let dynamToStaticResults: DynamObjCollisionResults | undefined = StaticDynamObjCollision.getDynamToStaticCollision(momEdges, this.statics[i]);
            let staticToDynamResults: DynamObjCollisionResults | undefined = StaticDynamObjCollision.getStaticToDynamCollision(staticMomEdges, obj);

            BestCollisionTracker.compareCollision(dynamToStaticResults);
            BestCollisionTracker.compareCollision(staticToDynamResults);
        }

        let bestCollideResults: DynamObjCollisionResults | undefined = BestCollisionTracker.getBestResults();

        if (!bestCollideResults) return false;

        CollideResultsHandler.handleCollideResults(obj, bestCollideResults, elapsedTime);
        return true;
    }

    public static ifMightCollide(collisionDist: number, origin: Vector, staticObj: StaticObj): boolean {
        return collisionDist + staticObj.collisionDist >= Vector.findDistance(origin, staticObj.position);
    }

    private getDynamMomentumEdges(obj: DynamObjInterface, elapsedTime: number): { p1: Vector; p2: Vector }[] {
        return obj.points.map((point) => {
            return { p1: point, p2: { x: point.x + obj.momentum.x * elapsedTime, y: point.y + obj.momentum.y * elapsedTime } };
        });
    }

    private getStaticMomentumEdges(obj: StaticObj, momentum: Vector, elapsedTime: number): { p1: Vector; p2: Vector }[] {
        return obj.points.map((point) => {
            return { p1: point, p2: { x: point.x - momentum.x * elapsedTime, y: point.y - momentum.y * elapsedTime } };
        });
    }

    public prepDynamObj(obj: DynamObjInterface, elapsedTime: number) {
        let highestCollisionDist: number = 0;

        for (let i: number = 0; i < obj.points.length && i < obj.baseShape.points.length; i++) {
            obj.points[i].x = obj.baseShape.points[i].x + obj.position.x;
            obj.points[i].y = obj.baseShape.points[i].y + obj.position.y;

            let baseShapePointDist: number = Vector.findLength(obj.baseShape.points[i]);
            if (baseShapePointDist > highestCollisionDist) {
                highestCollisionDist = baseShapePointDist;
            }
        }

        obj.collisionDist = highestCollisionDist + Vector.findLength(obj.momentum) * elapsedTime;
    }
}

export interface DynamObjCollisionResults {
    forcebackVector: Vector;
    faceAngle: number;
}

function renderLine(p1: Vector, p2: Vector, ctx: CanvasRenderingContext2D, color: string = "white") {
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}
