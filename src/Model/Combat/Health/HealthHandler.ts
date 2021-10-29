import { Renderable } from "../../Rendering/Renderable";
import { IfRemove, IteratableLinkedList } from "../../Utils/Containers/IteratableLinkedList/IteratableLinkedList";
import { Updateable } from "../../Utils/Updateable/Updateable";
import { HealthActorInterface } from "./HealthActorInterface";
import { BaseObjInterface } from "../../Physics/PhysicsInterfaces/BaseObjInterface";
import { HEALTH_BAR_DURATION, RenderHealth } from "../../Rendering/NameplateRendering/RenderHealth";
import { getDamageColor, getHealthColor } from "../TeamLogic";
import { getNextActorID } from "../../Utils/Actor/Id";

export class HealthHandler {
    public currentHealth: number;
    public readonly healthColor: string;
    public readonly damageColor: string;

    public readonly healthParticles: IteratableLinkedList<HealthParticle> = new IteratableLinkedList<HealthParticle>();
    public readonly damageParticles: IteratableLinkedList<DamageParticle> = new IteratableLinkedList<DamageParticle>();

    constructor(
        public readonly owner: HealthActorInterface & Updateable & Renderable & BaseObjInterface,
        public maxHealth: number,
        public readonly barHeightOffset: number = 120,
    ) {
        this.currentHealth = this.maxHealth;
        this.healthColor = getHealthColor(this.owner);
        this.damageColor = getDamageColor(this.owner);
    }

    public takeDamage(quantity: number): undefined | { overkill: number } {
        this.currentHealth -= quantity;

        if (this.currentHealth <= 0) {
            let overkill: number = this.currentHealth * -1;
            this.currentHealth = 0;
            this.damageParticles.pushNode(new HealthParticle(quantity, 0));
            this.owner.die();
            return { overkill };
        } else {
            this.damageParticles.pushNode(new DamageParticle(quantity, this.currentHealth));
            return undefined;
        }
    }

    public healDamage(quantity: number) {
        this.currentHealth = Math.min(this.maxHealth, this.currentHealth + quantity);
        this.healthParticles.pushNode(new HealthParticle(quantity, this.currentHealth - quantity));
    }

    public update(elapsedTime: number) {
        this.healthParticles.update(elapsedTime);
        this.damageParticles.update(elapsedTime);
    }
    public render(ctx: CanvasRenderingContext2D) {
        RenderHealth.renderHealthBar(this, ctx);
    }
}

export class HealthParticle implements Updateable, Renderable, IfRemove {
    id: number = getNextActorID();
    constructor(public readonly width: number, public readonly XOffset: number) {}

    public ifRemove: boolean = false;

    public lifeTime: number = HEALTH_BAR_DURATION + 0;

    public update(elapsedTime: number) {
        this.lifeTime -= elapsedTime;
        if (this.lifeTime < 0) {
            this.ifRemove = true;
        }
    }
    public render = (ctx: CanvasRenderingContext2D) => {
        RenderHealth.renderHealthParticle(this, ctx);
    };
}

export class DamageParticle extends HealthParticle {
    public render = (ctx: CanvasRenderingContext2D) => {
        RenderHealth.renderDamageParticle(this, ctx);
    };
}
