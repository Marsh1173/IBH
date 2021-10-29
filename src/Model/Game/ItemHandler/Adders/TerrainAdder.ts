import { PresetStaticObjInterface } from "../../../../DataStorage/Presets/StaticObjsPreset";
import { Platform } from "../../../Terrain/Platform";
import { Vector } from "../../../Utils/2D/Vector";
import { getNextActorID } from "../../../Utils/Actor/Id";
import { ItemHandler } from "../ItemHandler";
import { PlatformVisual } from "../../../Rendering/Terrain/PlatformVisual";

export abstract class TerrainAdder {
    public static addPlatform(offsetPosition: Vector, pointsPreset: PresetStaticObjInterface, itemHandler: ItemHandler) {
        let id: number = getNextActorID();
        let platform: Platform = new Platform(id, offsetPosition, pointsPreset);
        let platformVisual: PlatformVisual = new PlatformVisual(platform, itemHandler.game);

        itemHandler.physics.statics.items.push(platform);
        itemHandler.renderables.terrain.items.push(platformVisual);
    }

    public static deletePlatform(id: number, itemHandler: ItemHandler) {
        itemHandler.physics.statics.removeItem(id);
        itemHandler.renderables.terrain.removeItem(id);
    }
}
