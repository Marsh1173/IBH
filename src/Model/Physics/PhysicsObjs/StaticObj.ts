import { Vector } from "../../Utils/2D/Vector";
import { BaseObjInterface } from "../PhysicsInterfaces/BaseObjInterface";
import { StaticObjEdge } from "../PhysicsInterfaces/StaticObjEdgeInterface";
import { getNextActorID } from "../../Utils/Actor/Id";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { PresetStaticObjInterface } from "../../../DataStorage/Presets/StaticObjsPreset";

export abstract class StaticObj implements BaseObjInterface {
    public readonly points: Vector[];
    public readonly edges: StaticObjEdge[] = [];
    public readonly collisionDist: number = 0;
    public readonly position: Vector = { x: 0, y: 0 };

    constructor(public readonly id: number, public readonly offsetPosition: Vector, pointsPreset: PresetStaticObjInterface) {
        pointsPreset.points.forEach((point) => {
            this.position.x += point.point.x;
            this.position.y += point.point.y;
        });
        this.position.x = this.position.x / pointsPreset.points.length + this.offsetPosition.x;
        this.position.y = this.position.y / pointsPreset.points.length + this.offsetPosition.y;

        this.points = pointsPreset.points.map((edge) => {
            return { x: edge.point.x + this.offsetPosition.x, y: edge.point.y + this.offsetPosition.y };
        });

        this.collisionDist = StaticObj.getStaticCollisionDist(this.points, this.position);

        for (let i: number = 0; i < this.points.length; i++) {
            let p1: Vector = this.points[i];
            let p2: Vector = this.points[(i + 1) % this.points.length];
            let angle: number = Angle.findAngle(p1, p2);

            this.edges.push({ p1, p2, angle, material: pointsPreset.points[i].material });
        }

        if (this.offsetPosition.x == 0 && this.offsetPosition.y == 0) {
            let stringAddon: string = "";
            this.points.forEach((point) => {
                stringAddon +=
                    "{ point: { x: " + Math.floor(point.x - this.position.x) + ", y: " + Math.floor(point.y - this.position.y) + ' }, material: "none" },';
            });
            console.log(
                "{ positions: [ {x: " + Math.floor(this.position.x) + ", y: " + Math.floor(this.position.y) + " }], points: [ " + stringAddon + " ] },",
            );
        }
    }

    private static getStaticCollisionDist(points: Vector[], origin: Vector): number {
        let bestCollisionDist: number = 0;
        points.forEach((point) => {
            let dist: number = Vector.findDistance(point, origin);
            if (dist > bestCollisionDist) {
                bestCollisionDist = dist;
            }
        });

        return bestCollisionDist + 1;
    }
}
