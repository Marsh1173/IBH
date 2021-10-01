import { LocalOptionsStorageHandler } from "./LocalOptionsStorageHandler";

export class LocalStorageHandler {
    public static setLocalStorageItem(item: any, key: string) {
        localStorage.setItem(key, JSON.stringify(item));
    }
    public static getLocalStorageItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    public static fetchAllLocalData() {
        LocalOptionsStorageHandler.initOptionsConfig();
    }

    public static clearAllLocalData() {
        localStorage.clear();
    }
}
