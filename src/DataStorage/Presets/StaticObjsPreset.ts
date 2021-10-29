import { MaterialType } from "../../Model/Physics/PhysicsInterfaces/StaticObjEdgeInterface";
import { Vector } from "../../Model/Utils/2D/Vector";

export interface PresetStaticObjInterface {
    positions: Vector[];
    points: { point: Vector; material: MaterialType }[];
}

export const PLATFORM_PRESETS: PresetStaticObjInterface[] = [
    {
        positions: [{ x: 1000, y: -400 }],
        points: [
            { point: { x: -200, y: -100 }, material: "snow" },
            { point: { x: 50, y: -150 }, material: "none" },
            { point: { x: 100, y: -100 }, material: "none" },
            { point: { x: 100, y: 100 }, material: "snow" },
            { point: { x: -100, y: 80 }, material: "metal" },
        ],
    },
    {
        positions: [
            { x: -800, y: 0 },
            { x: -400, y: 0 },
            { x: 1, y: 0 },
            { x: 400, y: 0 },
            { x: 800, y: 0 },
            { x: 1200, y: 0 },
            { x: 1600, y: 0 },
        ],
        points: [
            { point: { x: -200, y: -20 }, material: "none" },
            { point: { x: 200, y: -20 }, material: "none" },
            { point: { x: 0, y: 20 }, material: "none" },
        ],
    },
    {
        positions: [
            { x: -1020, y: -620 },
            { x: -1020, y: -1020 },
        ],
        points: [
            { point: { x: 20, y: -200 }, material: "snow" },
            { point: { x: 20, y: 200 }, material: "snow" },
            { point: { x: -20, y: 0 }, material: "snow" },
        ],
    },
    {
        positions: [{ x: -420, y: -143 }],
        points: [
            { point: { x: -90, y: -138 }, material: "none" },
            { point: { x: 150, y: -118 }, material: "none" },
            { point: { x: 170, y: 132 }, material: "none" },
            { point: { x: -100, y: 122 }, material: "none" },
        ],
    },
    {
        positions: [{ x: -923, y: -195 }],
        points: [
            { point: { x: -98, y: -225 }, material: "none" },
            { point: { x: 122, y: -215 }, material: "none" },
            { point: { x: 122, y: 225 }, material: "none" },
            { point: { x: -158, y: 215 }, material: "none" },
        ],
    },
    {
        positions: [{ x: -273, y: -605 }],
        points: [
            { point: { x: -320, y: -85 }, material: "none" },
            { point: { x: 342, y: -65 }, material: "none" },
            { point: { x: 342, y: 105 }, material: "none" },
            { point: { x: 0, y: 0 }, material: "none" },
            { point: { x: -320, y: 10 }, material: "none" },
        ],
    },
];
