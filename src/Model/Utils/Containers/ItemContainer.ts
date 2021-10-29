import { Id } from "../Actor/Id";

export class ItemContainer<ItemType extends Id> {
    public items: ItemType[] = [];

    public removeItem(id: number) {
        for (let i: number = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i, 1);
                i--;
            }
        }
    }
}
