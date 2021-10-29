import { PLATFORM_PRESETS, PresetStaticObjInterface } from "../../../DataStorage/Presets/StaticObjsPreset";
import { PhysicsitemsHandler } from "./PhysicsItemsHandler";
import { RenderableItemsHandler } from "./RenderableItemsHandler";
import { HitboxItemsHandler } from "./HitboxItemsHandler";
import { UpdateablesHandler } from "./UpdateablesHandler";
import { TerrainAdder } from "./Adders/TerrainAdder";
import { Game } from "../Game";

export class ItemHandler {
    public readonly physics: PhysicsitemsHandler;
    public readonly renderables: RenderableItemsHandler;
    public readonly hitBoxes: HitboxItemsHandler;
    public readonly updateables: UpdateablesHandler;

    constructor(public readonly game: Game) {
        this.physics = new PhysicsitemsHandler();
        this.renderables = new RenderableItemsHandler();
        this.hitBoxes = new HitboxItemsHandler();
        this.updateables = new UpdateablesHandler();

        this.loadItems();
    }

    private loadItems() {
        //load platforms
        let staticObjPresets: PresetStaticObjInterface[] = PLATFORM_PRESETS;
        staticObjPresets.forEach((staticObjPreset) => {
            staticObjPreset.positions.forEach((position) => {
                TerrainAdder.addPlatform(position, staticObjPreset, this);
            });
        });
    }
}
