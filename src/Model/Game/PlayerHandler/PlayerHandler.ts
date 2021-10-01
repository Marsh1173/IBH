import { PlayerController } from "../../Player/Controllers/PlayerController";
import { PlayerControllerInterface } from "../../Player/Controllers/PlayerControllerInterface";
import { Player } from "../../Player/Player";
import { PlayerInterface } from "../../Player/PlayerInterface";
import { Game } from "../Game";

export class PlayerHandler {
    public readonly playerController: PlayerControllerInterface;

    constructor(private readonly Game: Game, public readonly player: PlayerInterface) {
        this.playerController = new PlayerController(player);
    }

    public update(elapsedTime: number) {
        this.playerController.update(elapsedTime);
    }
}
