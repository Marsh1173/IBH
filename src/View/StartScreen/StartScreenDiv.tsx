import React from "react";
import { Component } from "react";
import { MenuDiv } from "./Menu/MenuDiv";
import { OptionsDiv } from "./OptionsMenu/OptionsDiv";
import { CharacterBankDiv } from "./CharacterBank/CharacterBankDiv";
import "./StartScreenDivStyles.less";

export class StartScreenDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="StartScreenDiv">
                <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
                <div className="StartScreenContainer">
                    <CharacterBankDiv></CharacterBankDiv>
                    <MenuDiv></MenuDiv>
                </div>
            </div>
        );
    }
}
