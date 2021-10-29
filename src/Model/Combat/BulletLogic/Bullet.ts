import { Game } from "../../Game/Game";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { Vector } from "../../Utils/2D/Vector";
import { HealthActorInterface } from "../Health/HealthActorInterface";
import { BulletInfo } from "./BulletInfoInterface";
import { BulletParticleHandler } from "./BulletParticleHandler";
import { BulletCollisionWithTerrain, StaticObjHitResults } from "./BulletCollisionWithTerrain";
import { BulletCollisionWithHitboxes, MobHitResults } from "./BulletCollisionWithHitboxes";

export type BulletType = "normal";

export class Bullet {
    public static shoot(game: Game, info: BulletInfo): ShootReturnInfo {
        let endPoint: Vector = Angle.findVectorFromAngle(info.angle, info.range, info.startPoint);

        let terrainResults: StaticObjHitResults = BulletCollisionWithTerrain.checkBulletIntersectionWithAllTerrain(info.startPoint, endPoint, game);
        if (terrainResults.ifStartsInsideShape) {
            return {
                damageDealt: 0,
                actor: undefined,
            };
        } else if (terrainResults.edge) {
            endPoint = terrainResults.newEndPoint;
        }

        let actorHitInfo: MobHitResults = BulletCollisionWithHitboxes.checkBulletIntersectWithAllMobs(info.startPoint, endPoint, info.team, game);

        endPoint = actorHitInfo.newEndPoint;
        BulletParticleHandler.makeBulletStreakParticle(game, info.startPoint, endPoint);

        if (!actorHitInfo.healthActor) {
            if (terrainResults.edge) {
                BulletParticleHandler.makeBulletHitTerrainParticle(game, info.startPoint, endPoint, terrainResults.edge);
            }
            return {
                damageDealt: 0,
                actor: undefined,
            };
        } else {
            actorHitInfo.healthActor.healthHandler.takeDamage(info.damage);
            return {
                damageDealt: info.damage,
                actor: actorHitInfo.healthActor,
            };
        }
    }
}

export interface ShootReturnInfo {
    damageDealt: number;
    actor: HealthActorInterface | undefined;
}
