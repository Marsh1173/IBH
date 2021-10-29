import { Square } from "../Utils/2D/Square";
import { Vector } from "../Utils/2D/Vector";
import { getNextActorID } from "../Utils/Actor/Id";
import { PlayerInterface } from "./PlayerInterface";
import { CONFIG } from "../Utils/gameConfig/GameConfig";
import { Human } from "../Mobs/Human/Human";
import { HumanMovementLogic } from "../Mobs/Human/HumanMovementLogic";
import { Angle } from "../Utils/2D/Angle/Angle";
import { Game } from "../Game/Game";
import { Bullet } from "../Combat/BulletLogic/Bullet";

export class Player extends Human implements PlayerInterface {
    isDoingLeftClick = false;

    constructor(public readonly position: Vector, private readonly Game: Game) {
        super(position, "self");
    }

    update(elapsedTime: number) {
        if (this.isDoingLeftClick) {
            let pos: Vector = this.Game.dummyPlayer.position;

            //let angleDeviation: number = Math.random() * 0.1 - 0.05;
            //let angle: number = Angle.addAngles(angleDeviation, Angle.findAngle(pos, this.Game.inputHandler.mouseHandler.globalMousePos));
            let angle: number = Angle.findAngle(pos, this.Game.inputHandler.mouseHandler.globalMousePos);

            Bullet.shoot(this.Game, {
                startPoint: pos,
                angle,
                range: 1000,
                damage: Math.ceil(10),
                team: "self",
                originActor: this,
                type: "normal",
            });

            this.Game.inputHandler.mouseHandler.bumpMouse({ x: Math.random() * 6 - 3, y: -10 });

            this.isDoingLeftClick = false;
        }

        super.update(elapsedTime);
    }

    public jump() {
        HumanMovementLogic.jump(this);
    }
}
