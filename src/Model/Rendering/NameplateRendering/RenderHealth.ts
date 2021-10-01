import { HealthParticle, DamageParticle, HealthHandler } from "../../Combat/Health/HealthHandler";

const BAR_SIZE_DECREASE_FACTOR: number = 2;
const BAR_HEIGHT: number = 8;
const HEALTH_DIVIDER_WIDTH: number = 20;
export const HEALTH_BAR_DURATION: number = 0.15;

function getHealthParticleHeight(lifeRemaining: number): number {
    return 150 * lifeRemaining;
}
function getDamageParticleHeight(lifeRemaining: number): number {
    return 20 * ((HEALTH_BAR_DURATION - lifeRemaining) / HEALTH_BAR_DURATION) + 5;
}

export class RenderHealth {
    public static renderHealthParticle(particle: HealthParticle, ctx: CanvasRenderingContext2D) {
        let height: number = getHealthParticleHeight(particle.lifeTime);
        ctx.globalAlpha = 1 - (HEALTH_BAR_DURATION - particle.lifeTime) / HEALTH_BAR_DURATION;
        ctx.fillRect(particle.XOffset / BAR_SIZE_DECREASE_FACTOR, BAR_HEIGHT / 2 - height / 2, particle.width / BAR_SIZE_DECREASE_FACTOR, height);
    }

    public static renderDamageParticle(particle: DamageParticle, ctx: CanvasRenderingContext2D) {
        let height: number = getDamageParticleHeight(particle.lifeTime);
        ctx.globalAlpha = 1 - (HEALTH_BAR_DURATION - particle.lifeTime) / HEALTH_BAR_DURATION;
        ctx.fillRect(particle.XOffset / BAR_SIZE_DECREASE_FACTOR, BAR_HEIGHT / 2 - height / 2, particle.width / BAR_SIZE_DECREASE_FACTOR, height);
    }

    public static renderHealthBar(healthHandler: HealthHandler, ctx: CanvasRenderingContext2D) {
        ctx.transform(
            1,
            0,
            -0.1,
            1,
            healthHandler.maxHealth / (-2 * BAR_SIZE_DECREASE_FACTOR) + healthHandler.owner.position.x,
            -healthHandler.barHeightOffset + healthHandler.owner.position.y,
        );

        ctx.fillStyle = healthHandler.healthColor;
        ctx.fillRect(0, 0, healthHandler.currentHealth / BAR_SIZE_DECREASE_FACTOR, BAR_HEIGHT);

        ctx.fillStyle = "#00000088";
        for (let i: number = 1; i < healthHandler.currentHealth / HEALTH_DIVIDER_WIDTH; i += 1) {
            ctx.fillRect(((healthHandler.maxHealth / BAR_SIZE_DECREASE_FACTOR - 2) * HEALTH_DIVIDER_WIDTH * i) / healthHandler.maxHealth, 0, 2, BAR_HEIGHT);
        }

        ctx.fillStyle = "#00000044";
        ctx.fillRect(-1, BAR_HEIGHT, healthHandler.maxHealth / BAR_SIZE_DECREASE_FACTOR + 2, 2);

        ctx.fillStyle = healthHandler.damageColor;
        healthHandler.damageParticles.render(ctx);
        ctx.fillStyle = healthHandler.healthColor;
        healthHandler.healthParticles.render(ctx);
        ctx.globalAlpha = 1;

        ctx.transform(1, 0, 0.1, 1, 0, 0);
        ctx.transform(
            1,
            0,
            0,
            1,
            healthHandler.maxHealth / (2 * BAR_SIZE_DECREASE_FACTOR) - healthHandler.owner.position.x,
            healthHandler.barHeightOffset - healthHandler.owner.position.y,
        );
    }
}
