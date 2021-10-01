import { Component, useState } from "react";
import React from "react";
import "./CharacterBankDivStyles.less";
import { CharacterComponentDiv } from "./CharacterComponent/CharacterComponentDiv";
import { Character, getAllChars, newChar } from "./DummyCharGenerator";

export const CharacterBankDiv: React.FC<{}> = (props) => {
    const characters: Character[] = getAllChars();

    const charElems: JSX.Element[] = characters.map((character) => {
        return <CharacterComponentDiv key={character.level} name={character.name} level={character.level} color={character.color}></CharacterComponentDiv>;
    });

    function newCharacter() {}

    return (
        <div className="CharacterBankDiv">
            <h1 className="title">Character Bank</h1>
            <div className="characterListContainer">{charElems}</div>
            <button className="newCharacter" onClick={newCharacter}>
                + Character
            </button>
        </div>
    );
};
