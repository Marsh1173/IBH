import { HumanInterface } from "../../Mobs/Human/HumanInterface";
import { Player } from "../Player";
import { PlayerInterface } from "../PlayerInterface";
import { PlayerInput, PlayerControllerInterface } from "./PlayerControllerInterface";

export class PlayerController implements PlayerControllerInterface {
    public playerInputNextFrame: Record<PlayerInput, boolean> = {
        crouch: false,
        unCrouch: false,
        runLeft: false,
        stopRunLeft: false,
        runRight: false,
        stopRunRight: false,
        jump: false,
        useLMB: false,
        stopUseLMB: false,
        useRMB: false,
        stopUseRMB: false,
        useShift: false,
        stopUseShift: false,
    };

    constructor(private readonly player: PlayerInterface) {}

    public update = (elapsedTime: number) => {
        if (this.playerInputNextFrame.crouch) {
            if (!this.player.crouching) {
                this.player.crouch();
            }
            this.playerInputNextFrame.crouch = false;
        }
        if (this.playerInputNextFrame.unCrouch) {
            if (this.player.crouching) {
                this.player.unCrouch();
            }
            this.playerInputNextFrame.unCrouch = false;
        }
        if (this.playerInputNextFrame.runLeft) {
            if (!this.player.movingLeft) {
                this.player.movingLeft = true;
            }
            this.playerInputNextFrame.runLeft = false;
        }
        if (this.playerInputNextFrame.stopRunLeft) {
            if (this.player.movingLeft) {
                this.player.movingLeft = false;
            }
            this.playerInputNextFrame.stopRunLeft = false;
        }
        if (this.playerInputNextFrame.runRight) {
            if (!this.player.movingRight) {
                this.player.movingRight = true;
            }
            this.playerInputNextFrame.runRight = false;
        }
        if (this.playerInputNextFrame.stopRunRight) {
            if (this.player.movingRight) {
                this.player.movingRight = false;
            }
            this.playerInputNextFrame.stopRunRight = false;
        }
        if (this.playerInputNextFrame.jump) {
            if (!this.player.crouching) {
                this.player.jump();
            }
            this.playerInputNextFrame.jump = false;
        }
        if (this.playerInputNextFrame.useLMB) {
            this.player.isDoingLeftClick = true;
            this.playerInputNextFrame.useLMB = false;
        }
        if (this.playerInputNextFrame.stopUseLMB) {
            this.player.isDoingLeftClick = false;
            this.playerInputNextFrame.stopUseLMB = false;
        }
        if (this.playerInputNextFrame.useRMB) {
            this.playerInputNextFrame.useRMB = false;
        }
        if (this.playerInputNextFrame.stopUseRMB) {
            this.playerInputNextFrame.stopUseRMB = false;
        }
        if (this.playerInputNextFrame.useShift) {
            this.playerInputNextFrame.useShift = false;
        }
        if (this.playerInputNextFrame.stopUseShift) {
            this.playerInputNextFrame.stopUseShift = false;
        }
    };
}
