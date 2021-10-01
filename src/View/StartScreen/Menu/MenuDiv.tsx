import React from "react";
import { Component } from "react";
import { OptionsDiv } from "../OptionsMenu/OptionsDiv";
import "./MenuDivStyles.less";
import { MenuPresenter } from "../../../Presenter/StartScreenPresenter/MenuPresenter";

export class MenuDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="MenuDiv">
                <div id="startButtonDiv">
                    <button id="startButton" onMouseUp={this.startGameButtonPress}>
                        Enter
                    </button>
                </div>
                <OptionsDiv></OptionsDiv>
            </div>
        );
    }

    private startGameButtonPress() {
        MenuPresenter.startGame();
    }
}
