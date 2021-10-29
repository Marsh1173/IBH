import { Id } from "../Actor/Id";

export interface Updateable extends Id {
    update: (elapsedTime: number) => void;
}
