import { ItemContainer } from "../../Utils/Containers/ItemContainer";
import { Updateable } from "../../Utils/Updateable/Updateable";

export class UpdateablesHandler {
    public updateables: ItemContainer<Updateable> = new ItemContainer();
}
