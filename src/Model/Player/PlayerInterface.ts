import { HumanInterface } from "../Mobs/Human/HumanInterface";

export interface PlayerInterface extends HumanInterface {
    jump: () => void;

    isDoingLeftClick: boolean;
}
