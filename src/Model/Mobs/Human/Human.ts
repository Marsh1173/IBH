import { Vector } from "../../Utils/2D/Vector";
import { Square } from "../../Utils/2D/Square";
import { Actor, getNextActorID } from "../../Utils/Actor/Actor";
import { CONFIG } from "../../Utils/gameConfig/GameConfig";
import { HumanInterface } from "./HumanInterface";
import { HumanMovementLogic } from "./HumanMovementLogic";
import { Team } from "../../Combat/TeamLogic";
import { HealthHandler } from "../../Combat/Health/HealthHandler";
import { renderHuman } from "../../Rendering/MobRendering/RenderHuman";

export class Human implements HumanInterface {
    public movingLeft: boolean = false;
    public movingRight: boolean = false;
    public crouching: boolean = false;

    public readonly momentum: Vector = { x: 0, y: 0 };
    public readonly prevMomentum: Vector = { x: 0, y: 0 };
    public onGround: boolean = false;

    public readonly id: number = getNextActorID();
    public readonly lastHitBy: Actor | undefined = undefined;

    public readonly healthHandler: HealthHandler;

    public readonly dimensions: Square = {
        width: CONFIG.MobConfig.HumanDimensions.width,
        height: CONFIG.MobConfig.HumanDimensions.height,
    };

    constructor(public readonly position: Vector, public readonly team: Team) {
        this.healthHandler = new HealthHandler(this, 100);
    }

    public update(elapsedTime: number) {
        if (this.movingLeft && !this.movingRight) {
            this.accelerateLeft(elapsedTime);
        } else if (!this.movingLeft && this.movingRight) {
            this.accelerateRight(elapsedTime);
        }

        this.healthHandler.update(elapsedTime);
    }

    public render: (ctx: CanvasRenderingContext2D) => void = renderHuman;

    protected accelerateLeft(elapsedTime: number) {
        HumanMovementLogic.accelerateLeft(this, elapsedTime);
    }

    protected accelerateRight(elapsedTime: number) {
        HumanMovementLogic.accelerateRight(this, elapsedTime);
    }

    public ifGroundFriction() {
        return !this.movingRight || !this.movingLeft;
    }

    public die() {
        //do something
    }

    public crouch() {
        HumanMovementLogic.crouch(this);
    }

    public unCrouch() {
        HumanMovementLogic.unCrouch(this);
    }
}
