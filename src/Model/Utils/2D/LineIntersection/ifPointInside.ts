import { Vector } from "../Vector";

//returns true if point is inside the shape. Doesn't work reliably if the point lies on an edge or corner, but those are rare cases.
export function ifPointInside(points: Vector[], point: Vector): boolean {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

    var x = point.x + 0,
        y = point.y + 0;

    var inside = false;
    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
        var xi = points[i].x + 0,
            yi = points[i].y + 0;
        var xj = points[j].x + 0,
            yj = points[j].y + 0;

        var intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
