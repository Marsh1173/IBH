import { BasicBulletParticle } from "../../Game/ParticleHandler/Particles/BasicBulletParticle";

export class BulletRender {
    public static renderBasicBulletParticle(particle: BasicBulletParticle, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "#ffffff55";
        ctx.lineCap = "round";
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(particle.startPoint.x, particle.startPoint.y);
        ctx.lineTo(particle.endPoint.x, particle.endPoint.y);
        ctx.stroke();
    }
}
