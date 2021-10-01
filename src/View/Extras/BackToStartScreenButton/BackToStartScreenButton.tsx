import React from "react";
import { Component } from "react";
import { StartScreenPresenter } from "../../../Presenter/StartScreenPresenter/StartScreenPresenter";
import "./BackToStartScreenButtonStyles.less";

export const BackToStartScreenButton: React.FC<BackToStartScreenFuncProp> = (props) => {
    function returnToStart() {
        if (props.extraFunc) props.extraFunc();
        StartScreenPresenter.returnToStartScreen();
    }

    return (
        <div className="BackToStartScreenButton">
            <div className="backArrowDiv" onClick={returnToStart}>
                <span className="backArrow">&#11164;</span>
            </div>
        </div>
    );
};

export interface BackToStartScreenFuncProp {
    extraFunc?: () => void;
}
