import { Vector } from "../../../Utils/2D/Vector";
import { getNextActorID } from "../../../Utils/Actor/Id";
import { ItemHandler } from "../ItemHandler";
import { TargetDummy } from "../../../Mobs/TargetDummy/TargetDummy";

export abstract class MobAdder {
    public static addTargetDummy(position: Vector, itemHandler: ItemHandler) {
        let id: number = getNextActorID();

        let targetDummy: TargetDummy = new TargetDummy(position);

        //this.updateableMobs.push(targetDummy);
        //this.hitBoxMobs.push(targetDummy);

        itemHandler.renderables.mobs.items.push(targetDummy);
        itemHandler.hitBoxes.hitboxItems.items.push(targetDummy);
        itemHandler.updateables.updateables.items.push(targetDummy);
    }

    public static deleteTargetDummy(id: number, itemHandler: ItemHandler) {
        itemHandler.renderables.mobs.removeItem(id);
        itemHandler.hitBoxes.hitboxItems.removeItem(id);
        itemHandler.updateables.updateables.removeItem(id);
    }
}
