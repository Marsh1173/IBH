export const PhysicsConfig_1: PhysicsConfig = {
    fallingAccel: 2400,
    groundFriction: 9000,
    maxStandAngle: Math.PI / 8,
};

export interface PhysicsConfig {
    fallingAccel: number;
    groundFriction: number;
    maxStandAngle: number;
}
