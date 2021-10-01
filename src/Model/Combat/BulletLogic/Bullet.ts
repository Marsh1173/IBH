import { Game } from "../../Game/Game";
import { MobHitResults } from "../../Game/MobHandler/MobHandler";
import { TerrainHitResults } from "../../Game/TerrainHandler/TerrainHandler";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { findDifference, findDistance, Vector } from "../../Utils/2D/Vector";
import { HealthActorInterface } from "../Health/HealthActorInterface";
import { BulletInfo } from "./BulletInfoInterface";
import { BulletParticleHandler } from "./BulletParticleHandler";

export type BulletType = "normal";

export class Bullet {
    public static shoot(game: Game, info: BulletInfo): ShootReturnInfo {
        let endPoint: Vector = Angle.findVectorFromAngle(info.angle, info.range, info.startPoint);

        let terrainResults: TerrainHitResults = game.terrainHandler.checkLineIntersectWithAllTerrain(info.startPoint, endPoint);
        if (terrainResults.ifStartsInsideShape) {
            return {
                damageDealt: 0,
                actor: undefined,
            };
        } else if (terrainResults.edge) {
            endPoint = terrainResults.newEndPoint;
        }

        let actorHitInfo: MobHitResults = game.mobHandler.checkLineIntersectWithAllMobs(info.startPoint, endPoint);

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
