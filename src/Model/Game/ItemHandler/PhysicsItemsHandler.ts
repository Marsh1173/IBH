import { ItemContainer } from "../../Utils/Containers/ItemContainer";
import { DynamObjInterface } from "../../Physics/PhysicsInterfaces/DynamObjInterface";
import { StaticObj } from "../../Physics/PhysicsObjs/StaticObj";

export class PhysicsitemsHandler {
    public statics: ItemContainer<StaticObj> = new ItemContainer();
    public dynams: ItemContainer<DynamObjInterface> = new ItemContainer();
}
