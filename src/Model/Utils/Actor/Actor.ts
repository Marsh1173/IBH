export interface Actor {
    id: number;
    processKill?: (actor: Actor) => void;
}
let id: number = 0;
export function getNextActorID(): number {
    return id++;
}
