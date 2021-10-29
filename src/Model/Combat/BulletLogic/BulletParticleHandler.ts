import { Game } from "../../Game/Game";
import { StaticObjEdge } from "../../Physics/PhysicsInterfaces/StaticObjEdgeInterface";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { Vector } from "../../Utils/2D/Vector";

export class BulletParticleHandler {
    public static makeBulletStreakParticle(game: Game, startPoint: Vector, endPoint: Vector) {
        let particleStartPercent: number = Math.random() / 2 + 0.25;
        let differenceVector: Vector = Vector.findDifference(startPoint, endPoint);
        let particleStartPoint: Vector = {
            x: startPoint.x + differenceVector.x * particleStartPercent,
            y: startPoint.y + differenceVector.y * particleStartPercent,
        };

        game.particleHandler.newBasicBulletParticle(particleStartPoint, endPoint);
    }

    public static makeBulletHitTerrainParticle(game: Game, startPoint: Vector, endPoint: Vector, edge: StaticObjEdge) {
        let shotAngle: number = Angle.findAngle(startPoint, endPoint);
        let edgeAngle: number = Angle.findAngle(edge.p1, edge.p2);
        let angleDiff: number = shotAngle - edgeAngle;
        let newAngle: number = edgeAngle - angleDiff + Math.PI;

        game.particleHandler.newSparksParticle(endPoint, newAngle + Math.random() - 0.5);
        game.particleHandler.newSparksParticle(endPoint, newAngle + Math.random() - 0.5);
    }
}
