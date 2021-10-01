import { Actor } from "../../Utils/Actor/Actor";
import { TeamInterface } from "../TeamLogic";
import { HealthHandler } from "./HealthHandler";

export interface HealthActorInterface extends TeamInterface {
    die: () => void;
    lastHitBy: Actor | undefined;
    healthHandler: HealthHandler;
}
