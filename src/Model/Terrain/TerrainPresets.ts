import { Shape } from "../Utils/2D/Shape";
import { Vector } from "../Utils/2D/Vector";
import { MaterialType } from "./TerrainEdge";

export const PlatformPresets: { point: Vector; mat: MaterialType }[][] = [
    [
        { point: { x: -100, y: -20 }, mat: "snow" },
        { point: { x: 100, y: -20 }, mat: "wood" },
        { point: { x: 100, y: 200 }, mat: "sand" },
        { point: { x: -100, y: 200 }, mat: "metal" },
    ],
];
