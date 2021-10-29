import { Vector } from "../Utils/2D/Vector";
import { Id } from "../Utils/Actor/Id";

export interface Renderable extends Id {
    render: (ctx: CanvasRenderingContext2D) => void;
}

export function drawShape(ctx: CanvasRenderingContext2D, points: Vector[]) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i: number = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
}
