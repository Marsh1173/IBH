import { Vector } from "../Utils/2D/Vector";
import { TerrainInterface } from "./TerrainInterface";
import { MaterialType, TerrainEdge } from "./TerrainEdge";

export class Platform implements TerrainInterface {
    public readonly points: Vector[] = [];
    public readonly edges: TerrainEdge[] = [];

    constructor(pointsPreset: { point: Vector; mat: MaterialType }[], public readonly position: Vector) {
        for (let i: number = 0; i < pointsPreset.length; i++) {
            this.points.push(pointsPreset[i].point);
            this.edges.push(new TerrainEdge(pointsPreset[i].mat, pointsPreset[i].point, pointsPreset[(i + 1) % pointsPreset.length].point));
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 10;
        ctx.lineJoin = "round";

        this.edges.forEach((edge) => {
            edge.render(ctx);
        });
    }
}
