import { OptionsConfig, OptionsDao } from "../../Model/OptionsConfig/OptionsConfig";
import { LocalStorageHandler } from "./LocalStorageHandler";

const OPTIONS_KEY = "IBHOPTIONS";

export class LocalOptionsStorageHandler {
    public static initOptionsConfig() {
        let storedConfigString: string | null = LocalStorageHandler.getLocalStorageItem(OPTIONS_KEY);
        if (storedConfigString != null) {
            let storedConfig: OptionsConfig = JSON.parse(storedConfigString);

            OptionsDao.setParticlePercent(storedConfig.particlePercent);
            OptionsDao.setBloom(storedConfig.bloom);
            OptionsDao.setScreenShake(storedConfig.screenShake);
        }
    }

    public static saveOptionsConfig() {
        LocalStorageHandler.setLocalStorageItem(OptionsDao.getAllOptions(), OPTIONS_KEY);
    }
}
