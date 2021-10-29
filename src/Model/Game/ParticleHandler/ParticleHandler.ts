import { Updateable } from "../../Utils/Updateable/Updateable";
import { Renderable } from "../../Rendering/Renderable";
import { IfRemove, IteratableLinkedList } from "../../Utils/Containers/IteratableLinkedList/IteratableLinkedList";
import { Square } from "../../Utils/2D/Square";
import { Vector } from "../../Utils/2D/Vector";
import { BasicBulletParticle } from "./Particles/BasicBulletParticle";
import { SparkParticle } from "./Particles/SparkParticle";
import { BaseParticle } from "./BaseParticles";
import { Angle } from "../../Utils/2D/Angle/Angle";

export class ParticleHandler {
    private readonly particleList: IteratableLinkedList<BaseParticle> = new IteratableLinkedList<BaseParticle>();
    constructor(private readonly ctx: CanvasRenderingContext2D) {}

    updateAndRender(elapsedTime: number) {
        this.particleList.update(elapsedTime);
        this.particleList.render(this.ctx);
    }

    public newBasicBulletParticle(startPoint: Vector, endPoint: Vector) {
        this.particleList.pushNode(new BasicBulletParticle(startPoint, endPoint));
    }

    public newSparksParticle(pos: Vector, angle: number) {
        let sparkMom: Vector = Angle.findVectorFromAngle(angle - Math.PI, 400);

        this.particleList.pushNode(new SparkParticle(pos, sparkMom));
    }
}
