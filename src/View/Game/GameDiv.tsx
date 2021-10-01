import React, { useRef } from "react";
import { Component } from "react";
import { UserInterfaceDiv } from "./UserInterface/UserInterfaceDiv";
import { GameMainCanvasDiv } from "./GameCanvases/MainCanvas/GameMainCanvasDiv";
import "./GameDivStyles.less";
import { Game } from "../../Model/Game/Game";
import { BackToStartScreenButton } from "../Extras/BackToStartScreenButton/BackToStartScreenButton";
import { GameMenuDiv } from "./GameMenu/GameMenuDiv";
import { StartScreenPresenter } from "../../Presenter/StartScreenPresenter/StartScreenPresenter";

export class GameDiv extends Component<any, { showPauseScreen: boolean }> implements GameViewObserver {
    private readonly canvasRef: React.RefObject<HTMLCanvasElement>;
    private game?: Game;

    constructor(props: any) {
        super(props);

        this.state = { showPauseScreen: false };

        this.canvasRef = React.createRef();
    }
    render() {
        return (
            <div className="GameDiv">
                <canvas className="gameCanvas" ref={this.canvasRef}></canvas>
                <p className="menuHint">P: Menu</p>
                {this.state.showPauseScreen && (
                    <GameMenuDiv
                        onResume={() => {
                            this.setState({ showPauseScreen: false });
                            this.game?.resume();
                        }}
                        onEnd={() => {
                            this.game?.stop();
                            StartScreenPresenter.returnToStartScreen();
                        }}
                    ></GameMenuDiv>
                )}
            </div>
        );
    }

    componentDidMount() {
        let canvas: HTMLCanvasElement = this.canvasRef.current!;
        this.game = new Game(canvas, this);
        this.game.start();
    }

    public onPauseInput() {
        this.game?.pause();
        this.setState((state) => ({
            showPauseScreen: true,
        }));
    }
}

export interface GameViewObserver {
    onPauseInput: () => void;
}
