import React from "react";
import { Component } from "react";
import { MenuDiv } from "./Menu/MenuDiv";
import { CharacterBankDiv } from "./CharacterBank/CharacterBankDiv";
import "./StartScreenDivStyles.less";

export class StartScreenDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="StartScreenDiv">
                <div className="StartScreenContainer">
                    {/* <CharacterBankDiv></CharacterBankDiv> */}
                    <MenuDiv></MenuDiv>
                </div>
            </div>
        );
    }
}
