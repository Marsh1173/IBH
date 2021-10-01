import { Updateable } from "../../Utils/Updateable/Updateable";
import { Renderable } from "../../Rendering/Renderable";
import { IfRemove } from "../../Utils/InteratableLinkedList/IteratableLinkedList";
import { Vector } from "../../Utils/2D/Vector";
import { MomentumObj } from "../../Physics/PhysicsObjects/MomentumObj";
import { Gravity } from "../../Physics/NaturalForces/Gravity";

export abstract class BaseParticle implements Renderable, Updateable, IfRemove {
    private readonly totalLifetime: number;
    ifRemove = false;

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

export interface PhysicsParticle extends MomentumObj {
    readonly collideRange?: number;
}
