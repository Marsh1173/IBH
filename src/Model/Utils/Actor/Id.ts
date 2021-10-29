export interface Id {
    readonly id: number;
}

let id: number = 0;
export function getNextActorID(): number {
    return id++;
}
