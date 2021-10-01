import React, { useRef } from "react";
import { Component } from "react";
import { UserInterfaceDiv } from "./UserInterface/UserInterfaceDiv";
import { GameMainCanvasDiv } from "./GameCanvases/MainCanvas/GameMainCanvasDiv";
import "./GameDivStyles.less";
import { Game } from "../../Model/Game/Game";

export class GameDiv extends Component<any, {}> {
    private readonly canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props: any) {
        super(props);

        this.canvasRef = React.createRef();
    }
    render() {
        return (
            <div className="GameDiv">
                <canvas className="gameCanvas" ref={this.canvasRef}></canvas>
            </div>
        );
    }

    componentDidMount() {
        let canvas: HTMLCanvasElement = this.canvasRef.current!;
        let game: Game = new Game(canvas);
        game.start();
    }
}
