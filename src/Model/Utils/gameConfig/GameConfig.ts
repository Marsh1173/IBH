import { PhysicsConfig, PhysicsConfig_1 } from "./PhysicsConfig";
import { PlayerConfig, PlayerConfig_1 } from "./PlayerConfig";
import { MobConfig, MobConfig_1 } from "./MobConfig";

export const CONFIG: GameConfig = {
    PhysicsConfig: PhysicsConfig_1,
    PlayerConfig: PlayerConfig_1,
    MobConfig: MobConfig_1,
};

export type GameConfig = {
    PhysicsConfig: PhysicsConfig;
    PlayerConfig: PlayerConfig;
    MobConfig: MobConfig;
};
