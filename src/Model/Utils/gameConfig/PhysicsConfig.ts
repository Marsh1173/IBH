export const PhysicsConfig_1: PhysicsConfig = {
    fallingAccel: 2800,
    groundFriction: 3000,
    maxStandAngle: Math.PI / 6,
};

export interface PhysicsConfig {
    fallingAccel: number;
    groundFriction: number;
    maxStandAngle: number;
}
