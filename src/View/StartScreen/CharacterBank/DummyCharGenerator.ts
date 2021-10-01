export interface Character {
    name: string;
    level: number;
    color: string;
}

let currentLevel: number = 2;
export function newChar(): Character {
    return {
        name: "Nate" + currentLevel,
        level: currentLevel++,
        color: "red,",
    };
}

export function getAllChars(): Character[] {
    return [
        {
            name: "Tom",
            level: 100,
            color: "green",
        },
        {
            name: "Fred",
            level: 101,
            color: "blue",
        },
        {
            name: "Igor",
            level: 1000,
            color: "yellow",
        },
    ];
}
