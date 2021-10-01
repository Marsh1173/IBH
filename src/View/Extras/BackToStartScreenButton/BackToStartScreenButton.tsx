import React from "react";
import { Component } from "react";
import { StartScreenPresenter } from "../../../Presenter/StartScreenPresenter/StartScreenPresenter";
import "./BackToStartScreenButtonStyles.less";

export abstract class BackToStartScreenButton extends Component<{}, {}> {
    render() {
        return (
            <div className="BackToStartScreenButton">
                <div className="backArrowDiv" onClick={this.returnToStart}>
                    <span className="backArrow">&#11164;</span>
                </div>
            </div>
        );
    }

    private returnToStart() {
        StartScreenPresenter.returnToStartScreen();
    }
}
