import { Shape } from "../2D/Shape";
import { Vector } from "../2D/Vector";

export const MobConfig_1: MobConfig = {
    HumanShape: {
        points: [
            { x: -40, y: -85 },
            { x: 40, y: -85 },
            { x: 40, y: 85 },
            { x: -40, y: 85 },
        ],
    },
    HumanCrouchingShape: {
        points: [
            { x: -40, y: -15 },
            { x: 40, y: -15 },
            { x: 40, y: 85 },
            { x: -40, y: 85 },
        ],
    },
    HumanMaxSidewaysSpeed: 550,
    HumanStandingAccel: 15000,
    HumanFallingAccel: 1500,
};

export interface MobConfig {
    HumanShape: Shape;
    HumanCrouchingShape: Shape;
    HumanMaxSidewaysSpeed: number;
    HumanStandingAccel: number;
    HumanFallingAccel: number;
}
