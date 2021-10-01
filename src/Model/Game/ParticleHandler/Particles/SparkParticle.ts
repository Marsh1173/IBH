import { SparksRender } from "../../../Rendering/BulletRendering/SparksParticleRender";
import { Vector } from "../../../Utils/2D/Vector";
import { BaseParticle } from "../BaseParticles";

const SPARK_PARTICLE_LIFETIME: number = 0.05;
const SPARK_PARTICLE_LENGTH_FACTOR: number = 1;

export class SparkParticle extends BaseParticle {
    public prevPos: Vector = { x: 0, y: 0 };
    public readonly pos: Vector = { x: 0, y: 0 };
    constructor(pos: Vector, public readonly mom: Vector) {
        super(SPARK_PARTICLE_LIFETIME + Math.random() * 0.1);
        this.pos.x = pos.x;
        this.pos.y = pos.y;
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    update(elapsedTime: number) {
        this.prevPos.x = (this.prevPos.x * SPARK_PARTICLE_LENGTH_FACTOR + this.pos.x) / (SPARK_PARTICLE_LENGTH_FACTOR + 1);
        this.prevPos.y = (this.prevPos.y * SPARK_PARTICLE_LENGTH_FACTOR + this.pos.y) / (SPARK_PARTICLE_LENGTH_FACTOR + 1);

        this.pos.x += this.mom.x * elapsedTime;
        this.pos.y += this.mom.y * elapsedTime;

        if (this.mom.x > 0) {
            this.mom.x -= elapsedTime * 200;
        } else {
            this.mom.x += elapsedTime * 200;
        }

        this.pos.y += elapsedTime * 100;
        super.update(elapsedTime);
    }

    render(ctx: CanvasRenderingContext2D) {
        SparksRender.renderSparksParticle(this, ctx);
    }
}
