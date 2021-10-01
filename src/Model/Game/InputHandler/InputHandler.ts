import { Game } from "../Game";
import { MouseMoveHandler } from "./MouseMoveHandler";
import { PlayerControllerInterface } from "../../Player/Controllers/PlayerControllerInterface";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { Vector } from "../../Utils/2D/Vector";

export class InputHandler {
    public readonly mouseHandler: MouseMoveHandler;
    public playerController: PlayerControllerInterface | undefined = undefined;

    constructor(private readonly Game: Game) {
        this.mouseHandler = new MouseMoveHandler(this, this.Game);
    }

    public setInputListeners() {
        window.onresize = (e: UIEvent) => {
            this.Game.renderHandler.screenHandler.onWindowResize();
        };

        window.onmousemove = (e: MouseEvent) => {
            this.mouseHandler.onMouseMove(e);
        };

        window.onmousedown = (e: MouseEvent) => {
            if (this.playerController) {
                if (e.button === 0) {
                    //left click
                    this.playerController.playerInputNextFrame["useLMB"] = true;
                    //this.Game.mobHandler.dummyPlayer.healthHandler.takeDamage(25);
                } else if (e.button === 2) {
                    //right click
                    this.playerController.playerInputNextFrame["useRMB"] = true;
                    //this.Game.mobHandler.dummyPlayer.healthHandler.healDamage(20);
                }
            }
        };

        window.onmouseup = (e: MouseEvent) => {
            if (this.playerController) {
                if (e.button === 0) {
                    //left click
                    this.playerController.playerInputNextFrame["stopUseLMB"] = true;
                } else if (e.button === 2) {
                    //right click
                    this.playerController.playerInputNextFrame["stopUseRMB"] = true;
                }
            }
        };

        window.onkeydown = (e: KeyboardEvent) => {
            switch (e.code) {
                case "KeyW":
                    if (this.playerController) this.playerController.playerInputNextFrame["jump"] = true;
                    break;
                case "KeyA":
                    if (this.playerController) this.playerController.playerInputNextFrame["runLeft"] = true;
                    break;
                case "KeyS":
                    if (this.playerController) this.playerController.playerInputNextFrame["crouch"] = true;
                    break;
                case "KeyD":
                    if (this.playerController) this.playerController.playerInputNextFrame["runRight"] = true;
                    break;
            }
        };

        window.onkeyup = (e: KeyboardEvent) => {
            switch (e.code) {
                case "KeyA":
                    if (this.playerController) this.playerController.playerInputNextFrame["stopRunLeft"] = true;
                    break;
                case "KeyS":
                    if (this.playerController) this.playerController.playerInputNextFrame["unCrouch"] = true;
                    break;
                case "KeyD":
                    if (this.playerController) this.playerController.playerInputNextFrame["stopRunRight"] = true;
                    break;
            }
        };
    }

    public clearInputListeners() {
        window.onresize = () => {};
        window.onmousemove = () => {};
        window.onmousedown = () => {};
        window.onmouseup = () => {};
        window.onkeydown = () => {};
        window.onkeyup = () => {};
    }

    public setPlayerController(controller: PlayerControllerInterface) {
        this.playerController = controller;
    }
}
