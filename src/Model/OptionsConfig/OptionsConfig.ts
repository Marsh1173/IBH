import { LocalOptionsStorageHandler } from "../../DataStorage/LocalStorage/LocalOptionsStorageHandler";

export interface OptionsConfig {
    screenShake: boolean;
    bloom: boolean;
    particlePercent: number;
}

export class OptionsDao {
    private static screenShake: boolean = true;
    private static bloom: boolean = true;
    private static particlePercent: number = 100;

    public static getAllOptions(): OptionsConfig {
        return { screenShake: OptionsDao.screenShake, bloom: OptionsDao.bloom, particlePercent: OptionsDao.particlePercent };
    }

    public static initOptionsConfig() {
        LocalOptionsStorageHandler.initOptionsConfig();
    }

    public static saveOptionsConfig() {
        LocalOptionsStorageHandler.saveOptionsConfig();
    }

    public static setScreenShake(bool: boolean) {
        OptionsDao.screenShake = bool;
    }

    public static setBloom(bool: boolean) {
        OptionsDao.bloom = bool;
    }

    public static setParticlePercent(percent: number) {
        OptionsDao.particlePercent = percent;
    }
}
