import { HealthHandler } from "../../Combat/Health/HealthHandler";
import { Team } from "../../Combat/TeamLogic";
import { Shape } from "../../Utils/2D/Shape";
import { Vector } from "../../Utils/2D/Vector";
import { TargetDummyInterface } from "./TargetDummyInterface";

const TARGET_DUMMY_SHAPE: Vector[] = [
    { x: 20, y: 20 },
    { x: -20, y: 20 },
    { x: -20, y: -20 },
    { x: 20, y: -20 },
];

export class TargetDummy implements TargetDummyInterface {
    public readonly points: Vector[];

    lastHitBy = undefined;
    team: Team = "enemy";

    public readonly healthHandler: HealthHandler = new HealthHandler(this, 100, 120);

    constructor(public readonly position: Vector) {
        this.points = TARGET_DUMMY_SHAPE.map((point) => {
            return { x: point.x + this.position.x, y: point.y + this.position.y };
        });
    }

    update(elapsedTime: number) {
        this.healthHandler.update(elapsedTime);
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "darkgray";
        ctx.lineWidth = 5;
        ctx.lineJoin = "bevel";
        ctx.beginPath();

        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i: number = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();

        ctx.stroke();

        this.healthHandler.render(ctx);
    }

    die() {
        this.healthHandler.healDamage(this.healthHandler.maxHealth);
    }
}
