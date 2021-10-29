import { Renderable } from "../Renderable";
import { CollisionProcessor } from "../../Physics/PhysicsProcessing/Collision/CollisionProcessor";
import { Game } from "../../Game/Game";
import { Vector } from "../../Utils/2D/Vector";
import { Platform } from "../../Terrain/Platform";

export class PlatformVisual implements Renderable {
    private readonly position: Vector;
    public readonly id: number;

    constructor(private readonly platform: Platform, private readonly game: Game) {
        this.id = this.platform.id;
        this.position = this.platform.position;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.strokeStyle = "black";

        /*if (CollisionProcessor.ifMightCollide(this.game.dummyPlayer.collisionDist, this.game.dummyPlayer.position, this.platform)) {
            ctx.strokeStyle = "cyan";
        }*/

        this.platform.edges.forEach((edge) => {
            ctx.beginPath();
            ctx.moveTo(edge.p1.x, edge.p1.y);
            ctx.lineTo(edge.p2.x, edge.p2.y);
            ctx.closePath();
            ctx.stroke();
        });

        ctx.fillRect(this.position.x - 3, this.position.y - 3, 6, 6);
    }
}
