import React from "react";
import { OptionsScreenBase } from "../baseComponent/OptionsMenuScreenBase";
import "./WebsiteInfoDivStyles.less";

export class WebsiteInfoDiv extends OptionsScreenBase {
    protected getScreenDiv(): JSX.Element {
        return (
            <div className="WebsiteInfoDiv">
                <h1>Website Info</h1>
                <hr />
                <ul>
                    <li>Version: 0.0.1</li>
                    <li>
                        Creator:
                        <p>Nate Roylance</p>
                    </li>
                    <li>Play-Testers:</li>
                    <li>
                        Special Thanks:
                        <p>Jefferson Roylance</p>
                    </li>
                    <li>
                        Made With:
                        <p>React</p>
                        <p>HTML Canvas</p>
                        <p>
                            Jefferson Roylance's{" "}
                            <a href="https://github.com/Markaronin/generic-interface" target="_blank">
                                Generic Interface
                            </a>
                        </p>
                    </li>
                    <li>
                        Other Links:
                        <p>
                            <a href="https://natehroylance.com" target="_blank">
                                Home Website
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/Marsh1173/IBH" target="_blank">
                                Github
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}
