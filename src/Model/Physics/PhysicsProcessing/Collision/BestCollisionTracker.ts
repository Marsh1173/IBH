import { Vector } from "../../../Utils/2D/Vector";
import { DynamObjCollisionResults } from "./CollisionProcessor";

export abstract class BestCollisionTracker {
    private static bestCollideLen: number = -1;
    private static bestCollision: DynamObjCollisionResults | undefined = undefined;

    public static compareCollision(collision: DynamObjCollisionResults | undefined) {
        if (collision) {
            let collideLen: number = Vector.findLength(collision.forcebackVector);
            if (collideLen > this.bestCollideLen) {
                this.bestCollideLen = collideLen;
                this.bestCollision = collision;
            }
        }
    }

    public static getBestResults(): DynamObjCollisionResults | undefined {
        let results: DynamObjCollisionResults | undefined = this.bestCollision;
        this.resetResults();
        return results;
    }

    private static resetResults() {
        this.bestCollideLen = -1;
        this.bestCollision = undefined;
    }
}
