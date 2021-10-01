import { Vector } from "../Utils/2D/Vector";
import { CONFIG } from "../Utils/gameConfig/GameConfig";
import { Angle } from "../Utils/2D/Angle/Angle";
import { Renderable } from "../Rendering/Renderable";

export class TerrainEdge implements Renderable {
    public readonly ifCanStand: boolean;
    public readonly renderColor: string;
    constructor(public readonly matType: MaterialType, public readonly p1: Vector, public readonly p2: Vector) {
        let tempAngle: number = Angle.findAngle(this.p1, this.p2);
        this.ifCanStand = tempAngle < CONFIG.PhysicsConfig.maxStandAngle || tempAngle > Math.PI * 2 - CONFIG.PhysicsConfig.maxStandAngle;
        this.renderColor = this.setMatColor();
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.renderColor;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.closePath();
        ctx.stroke();
    }

    private setMatColor(): string {
        switch (this.matType) {
            case "sand":
                return "#ebca71";
            case "snow":
                return "#d9ebff";
            case "metal":
                return "#363a3d";
            case "wood":
                return "#593a27";
            case "plain":
                return "blue";
            default:
                return "red";
        }
    }
}

export type MaterialType = "sand" | "snow" | "metal" | "wood" | "plain";
