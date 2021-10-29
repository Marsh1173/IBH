import React, { createElement } from "react";
import { Component } from "react";
import "./OptionsDivStyles.less";
import ReactDOM from "react-dom";
import { OptionsScreenBase } from "../OptionsMenuScreens/baseComponent/OptionsMenuScreenBase";
import { OptionsScreenDiv } from "../OptionsMenuScreens/OptionsScreen/OptionsScreenDiv";
import { WebsiteInfoDiv } from "../OptionsMenuScreens/WebsiteInfo/WebsiteInfoDiv";
import { HowToPlayDiv } from "../OptionsMenuScreens/HowToPlay/HowToPlayDiv";
import { PatchNotesDiv } from "../OptionsMenuScreens/PatchNotes/PatchNotesDiv";
import { TodoDiv } from "../OptionsMenuScreens/Todo/TodoDiv";

export class OptionsDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="OptionsDiv">
                <h3 onClick={() => this.expandScreen(PatchNotesDiv)}>Patch Notes</h3>
                <h3 onClick={() => this.expandScreen(WebsiteInfoDiv)}>Website Info</h3>
                <h3 onClick={() => this.expandScreen(HowToPlayDiv)}>How To Play</h3>
                <h3 onClick={() => this.expandScreen(OptionsScreenDiv)}>Options</h3>
                <h3 onClick={() => this.expandScreen(TodoDiv)}>Todos</h3>
            </div>
        );
    }

    public expandScreen(elem: any) {
        const domContainer = document.querySelector("#reactDom");
        ReactDOM.render(createElement(elem), domContainer);
    }
}
