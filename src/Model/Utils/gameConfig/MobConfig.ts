import { Square } from "../2D/Square";

export const MobConfig_1: MobConfig = {
    HumanDimensions: { height: 170, width: 80 },
    HumanCrouchingDimensions: { height: 100, width: 80 },
    HumanMaxSidewaysSpeed: 500,
    HumanStandingAccel: 6000,
    HumanFallingAccel: 1500,
};

export interface MobConfig {
    HumanDimensions: Square;
    HumanCrouchingDimensions: Square;
    HumanMaxSidewaysSpeed: number;
    HumanStandingAccel: number;
    HumanFallingAccel: number;
}
