import { DummyFloor } from "../../Terrain/DummyFloor";
import { TerrainInterface } from "../../Terrain/TerrainInterface";
import { Game } from "../Game";
import { PlatformPresets } from "../../Terrain/TerrainPresets";
import { Platform } from "../../Terrain/Platform";
import { findDistance, Vector } from "../../Utils/2D/Vector";
import { ifPointInside } from "../../Utils/2D/LineIntersection/ifPointInside";
import { TerrainEdge } from "../../Terrain/TerrainEdge";
import { LineIntersection, LineIntersectWithShapeReturnData, LineIntersectWithShapesReturnData } from "../../Utils/2D/LineIntersection/Lineintersection";

export class TerrainHandler {
    public readonly terrain: TerrainInterface[] = [];
    public readonly dummyFloor: DummyFloor = new DummyFloor();

    constructor(private readonly Game: Game) {
        Game.renderHandler.renderableTerrain.floor = this.dummyFloor;

        this.pushTerrain(new Platform(PlatformPresets[0], { x: 100, y: 100 }));
    }

    public pushTerrain(terrain: TerrainInterface) {
        this.terrain.push(terrain);
        this.Game.renderHandler.renderableTerrain.terrain.push(terrain);
    }

    public checkLineIntersectWithAllTerrain(startPoint: Vector, endPoint: Vector): TerrainHitResults {
        let returnData: TerrainHitResults = {
            ifStartsInsideShape: false,
            newEndPoint: { x: 0, y: 0 },
            edge: undefined,
        };

        let results: LineIntersectWithShapesReturnData = LineIntersection.IfLineIntersectsWithShapes(startPoint, endPoint, this.terrain);

        returnData.ifStartsInsideShape = results.ifStartsInsideShape;
        returnData.newEndPoint = results.newEndPoint;
        if (results.hitLineIndex != -1 && results.hitShapeIndex != -1) {
            returnData.edge = this.terrain[results.hitShapeIndex].edges[results.hitLineIndex];
        }

        return returnData;
    }
}

export interface TerrainHitResults {
    ifStartsInsideShape: boolean;
    newEndPoint: Vector;
    edge: TerrainEdge | undefined;
}
