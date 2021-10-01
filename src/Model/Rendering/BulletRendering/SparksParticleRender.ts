import { SparkParticle } from "../../Game/ParticleHandler/Particles/SparkParticle";

export class SparksRender {
    public static renderSparksParticle(particle: SparkParticle, ctx: CanvasRenderingContext2D) {
        ctx.lineCap = "butt";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";

        ctx.beginPath();
        ctx.moveTo(particle.pos.x, particle.pos.y);
        ctx.lineTo(particle.prevPos.x, particle.prevPos.y);
        ctx.stroke();
    }
}
