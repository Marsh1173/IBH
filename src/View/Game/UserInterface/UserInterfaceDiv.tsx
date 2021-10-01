import React from "react";
import { Component } from "react";
import "./UserInterfaceDivStyles.less";

export class UserInterfaceDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="UserInterfaceDiv">
                <button id="button1">Button1</button>
            </div>
        );
    }
}
