import React from "react";
import { OptionsScreenBase } from "../baseComponent/OptionsMenuScreenBase";
import "./HowToPlayDivStyles.less";

export class HowToPlayDiv extends OptionsScreenBase {
    protected getScreenDiv(): JSX.Element {
        return (
            <div className="HowToPlayDiv">
                <h1>How To Play</h1>
                <ul>
                    <li>Press W, A, S, and D to move around.</li>
                    <li>Aim with your mouse.</li>
                    <li>Use your abilities with LMB, RMB, and LShift.</li>
                </ul>
            </div>
        );
    }
}
