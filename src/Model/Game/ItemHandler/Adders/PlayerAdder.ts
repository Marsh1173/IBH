import { Player } from "../../../Player/Player";
import { Vector } from "../../../Utils/2D/Vector";
import { ItemHandler } from "../ItemHandler";

export abstract class PlayerAdder {
    public static addDummyPlayer(position: Vector, itemHandler: ItemHandler): Player {
        let dummyPlayer = new Player(position, itemHandler.game);

        itemHandler.physics.dynams.items.push(dummyPlayer);
        itemHandler.renderables.player.items.push(dummyPlayer);
        itemHandler.hitBoxes.hitboxItems.items.push(dummyPlayer);
        itemHandler.updateables.updateables.items.push(dummyPlayer);

        return dummyPlayer;
    }

    public static deletePlayer(id: number, itemHandler: ItemHandler) {
        itemHandler.physics.dynams.removeItem(id);
        itemHandler.renderables.player.removeItem(id);
        itemHandler.hitBoxes.hitboxItems.removeItem(id);
        itemHandler.updateables.updateables.removeItem(id);
    }
}
