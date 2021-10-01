export type Team = "self" | "ally" | "enemy";

export interface TeamInterface {
    team: Team;
}

export function getHealthColor(item: TeamInterface): string {
    switch (item.team) {
        case "self":
            return "#14ff3b";
        case "enemy":
            return "#ff1717";
        default:
            return "white";
    }
}

export function getDamageColor(item: TeamInterface): string {
    switch (item.team) {
        case "self":
            return "#ff1717";
        case "enemy":
            return "white";
        default:
            return "#ff1717";
    }
}
