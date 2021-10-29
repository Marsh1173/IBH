import { Renderable } from "../../Rendering/Renderable";
import { ItemContainer } from "../../Utils/Containers/ItemContainer";

export class RenderableItemsHandler {
    public terrain: ItemContainer<Renderable> = new ItemContainer();
    public mobs: ItemContainer<Renderable> = new ItemContainer();
    public player: ItemContainer<Renderable> = new ItemContainer();
}
