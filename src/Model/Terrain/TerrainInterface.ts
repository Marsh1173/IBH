import { StaticObj } from "../Physics/PhysicsObjects/staticObj";
import { Renderable } from "../Rendering/Renderable";
import { Shape } from "../Utils/2D/Shape";
import { TerrainEdge } from "./TerrainEdge";

export interface TerrainInterface extends Shape, StaticObj, Renderable {
    edges: TerrainEdge[];
}
