import React from "react";
import { Component } from "react";
import "./GameMainCanvasDivStyles.less";

export class GameMainCanvasDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="GameMainCanvasDiv">
                <h1>Main Canvas</h1>
                <canvas id="gameCanvas"></canvas>
            </div>
        );
    }

    componentDidMount() {}
}
