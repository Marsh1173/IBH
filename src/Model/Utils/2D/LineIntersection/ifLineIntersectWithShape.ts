// import { Shape } from "../Shape";
// import { findDistance, Vector } from "../Vector";
// import { findIntersection } from "./IfLineIntersect";

// /**
//  * @param startPoint
//  * @param endPoint
//  * @param closestPointDistance distance from the start point to the end point.
//  * @param shape the collection of points of the shape.
//  * @returns the closest point of intersection to the start point or the original point if there was no intersection.
//  */
// function checkLineIntersectionWithShape(
//     startPoint: Vector,
//     endPoint: Vector,
//     closestPointDistance: number,
//     shape: Shape,
// ): { closestPoint: Vector; closestPointDistance: number; collideLineP1: Vector; collideLineP2: Vector } {
//     let lineIndex: number = 0;

//     for (let i: number = 0; i < shape.points.length; i++) {
//         let edgeCollisionCheck: Vector | undefined = findIntersection(startPoint, endPoint, shape.points[i], shape.points[(i + 1) % shape.points.length]);
//         if (edgeCollisionCheck) {
//             let distance: number = findDistance(startPoint, edgeCollisionCheck);
//             if (distance < closestPointDistance) {
//                 lineIndex = i;
//                 closestPointDistance = distance;
//                 endPoint = edgeCollisionCheck;
//             }
//         }
//     }

//     return {
//         closestPoint: endPoint,
//         closestPointDistance,
//         collideLineP1: shape.points[lineIndex],
//         collideLineP2: shape.points[(lineIndex + 1) % shape.points.length],
//     };
// }
