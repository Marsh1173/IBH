import { Game } from "../Game";
import { MouseMoveHandler } from "./MouseMoveHandler";
import { PlayerControllerInterface } from "../../Player/Controllers/PlayerControllerInterface";
import { Angle } from "../../Utils/2D/Angle/Angle";
import { Vector } from "../../Utils/2D/Vector";
import { Player } from "../../Player/Player";

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
            if (!document.pointerLockElement) {
                document.documentElement.requestPointerLock();
            }
            if (this.playerController) {
                if (e.button === 0) {
                    this.logMouseLocationAsTerrainPoint();

                    //left click
                    this.playerController.playerInputNextFrame["useLMB"] = true;
                    //this.Game.mobHandler.dummyPlayer.healthHandler.takeDamage(25);
                } else if (e.button === 2) {
                    this.launchPlayer();
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
                case "KeyP":
                    document.exitPointerLock();
                    this.Game.gameView.onPauseInput();
                    break;
                case "KeyO":
                    this.resetPlayerPosition();
                    break;
                case "KeyW":
                case "Space":
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

        //Set to "P" instead
        // document.onpointerlockchange = () => {
        //     if (!document.pointerLockElement) {
        //         this.Game.gameView.onPauseInput();
        //     }
        // };

        document.documentElement.requestPointerLock();
    }

    public clearInputListeners(endingGame: boolean = true) {
        if (endingGame) {
            window.onresize = () => {};
        }
        window.onmousemove = () => {};
        window.onmousedown = () => {};
        window.onmouseup = () => {};
        window.onkeydown = () => {};
        window.onkeyup = () => {};

        document.exitPointerLock();
    }

    public setPlayerController(controller: PlayerControllerInterface) {
        this.playerController = controller;
    }

    private logMouseLocationAsTerrainPoint() {
        let globalMousePos: Vector = this.mouseHandler.globalMousePos;
        console.log("{ point: { x: " + Math.floor(globalMousePos.x / 10) * 10 + ", y: " + Math.floor(globalMousePos.y / 10) * 10 + ' }, material: "snow" },');
    }
    private launchPlayer() {
        let globalMousePos: Vector = this.mouseHandler.globalMousePos;
        let player: Player = this.Game.dummyPlayer;

        let launchForce: Vector = Vector.findDifference(player.position, globalMousePos);

        let multiplyFactor: number = 10;

        player.momentum.x = launchForce.x * multiplyFactor;
        player.momentum.y = launchForce.y * multiplyFactor;
    }
    private resetPlayerPosition() {
        this.Game.dummyPlayer.position.x = 500;
        this.Game.dummyPlayer.position.y = -300;
        this.Game.dummyPlayer.momentum.x = 0;
        this.Game.dummyPlayer.momentum.y = 0;
    }
}
