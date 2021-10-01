import { Vector } from "../../Utils/2D/Vector";
import { Actor } from "../../Utils/Actor/Actor";
import { Team } from "../TeamLogic";
import { BulletType } from "./Bullet";

export interface BulletInfo {
    startPoint: Vector;
    angle: number;
    range: number;
    damage: number;
    team: Team;
    originActor: Actor;
    type: BulletType;
}
