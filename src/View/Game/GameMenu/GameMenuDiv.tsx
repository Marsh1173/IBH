import React from "react";
import { render } from "react-dom";
import "./GameMenuDivStyles.less";

export const GameMenuDiv: React.FC<GameMenuProps> = (props) => {
    window.onkeydown = (e: KeyboardEvent) => {
        if (e.code == "KeyP") {
            props.onResume();
        }
    };
    return (
        <div className="GameMenuDiv">
            <div className="centralMenu">
                <button className="gameMenuButton" onClick={props.onResume}>
                    Resume
                </button>
                <button className="gameMenuButton" onClick={props.onEnd}>
                    Leave
                </button>
            </div>
        </div>
    );
};

export interface GameMenuProps {
    onResume: () => void;
    onEnd: () => void;
}
