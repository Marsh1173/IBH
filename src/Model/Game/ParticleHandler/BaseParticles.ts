import { Updateable } from "../../Utils/Updateable/Updateable";
import { IfRemove } from "../../Utils/Containers/IteratableLinkedList/IteratableLinkedList";
import { Vector } from "../../Utils/2D/Vector";
import { Gravity } from "../../Physics/PhysicsProcessing/NaturalForces/Gravity";
import { Renderable } from "../../Rendering/Renderable";
import { getNextActorID } from "../../Utils/Actor/Id";

export abstract class BaseParticle implements Renderable, Updateable, IfRemove {
    private readonly totalLifetime: number;
    ifRemove = false;

    id: number = getNextActorID();

    constructor(private remainingLifeTime: number) {
        this.totalLifetime = remainingLifeTime + 0;
    }

    update(elapsedTime: number) {
        this.remainingLifeTime -= elapsedTime;
        if (this.remainingLifeTime <= 0) {
            this.ifRemove = true;
        }
    }

    abstract render(ctx: CanvasRenderingContext2D): void;
}

export abstract class PhysicsParticle extends BaseParticle implements PhysicsParticle {
    constructor(remainingLifeTime: number, public readonly position: Vector, public readonly momentum: Vector, public readonly collideRange?: number) {
        super(remainingLifeTime);
    }

    update(elapsedTime: number) {
        Gravity.registerGravity(this, elapsedTime);
        super.update(elapsedTime);
    }
}

export interface PhysicsParticle {
    readonly collideRange?: number;
    readonly momentum: Vector;
}
