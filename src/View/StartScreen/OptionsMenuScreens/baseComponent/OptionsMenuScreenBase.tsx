import React, { createElement } from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { StartScreenDiv } from "../../StartScreenDiv";
import "./OptionsMenuScreenBaseStyles.less";
import { StartScreenPresenter } from "../../../../Presenter/StartScreenPresenter/StartScreenPresenter";
import { BackToStartScreenButton } from "../../../Extras/BackToStartScreenButton/BackToStartScreenButton";

export abstract class OptionsScreenBase extends Component<{}, {}> {
    render() {
        return (
            <div className="OptionsScreenBase">
                <BackToStartScreenButton></BackToStartScreenButton>
                <div className="OptionsContainerDiv">{this.getScreenDiv()}</div>
            </div>
        );
    }

    protected abstract getScreenDiv(): JSX.Element;
}
