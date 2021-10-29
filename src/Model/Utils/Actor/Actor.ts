import { Id } from "./Id";

export interface Actor extends Id {
    processKill?: (actor: Actor) => void;
}
