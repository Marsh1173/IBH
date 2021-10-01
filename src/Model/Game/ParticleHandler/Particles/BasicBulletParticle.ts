import { BulletRender } from "../../../Rendering/BulletRendering/BulletParticleRender";
import { Vector } from "../../../Utils/2D/Vector";
import { BaseParticle } from "../BaseParticles";

const BULLET_PARTICLE_LIFETIME: number = 0.03;

export class BasicBulletParticle extends BaseParticle {
    constructor(public readonly startPoint: Vector, public readonly endPoint: Vector) {
        super(BULLET_PARTICLE_LIFETIME);
    }
    render(ctx: CanvasRenderingContext2D) {
        BulletRender.renderBasicBulletParticle(this, ctx);
    }
}
