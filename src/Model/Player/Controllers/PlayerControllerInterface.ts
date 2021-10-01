export interface PlayerControllerInterface {
    playerInputNextFrame: Record<PlayerInput, boolean>;

    update: (elapsedTime: number) => void;
}

export type PlayerInput =
    | "crouch"
    | "unCrouch"
    | "runLeft"
    | "stopRunLeft"
    | "runRight"
    | "stopRunRight"
    | "jump"
    | "useLMB"
    | "stopUseLMB"
    | "useRMB"
    | "stopUseRMB"
    | "useShift"
    | "stopUseShift";
