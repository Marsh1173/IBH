import { ItemContainer } from "../../Utils/Containers/ItemContainer";
import { Shape } from "../../Utils/2D/Shape";
import { HealthActorInterface } from "../../Combat/Health/HealthActorInterface";
import { Id } from "../../Utils/Actor/Id";

export class HitboxItemsHandler {
    public hitboxItems: ItemContainer<Shape & HealthActorInterface & Id> = new ItemContainer();
}
