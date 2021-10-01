import { Component } from "react";
import React from "react";
import "./CharacterComponentDivStyles.less";

export interface CharacterProp {
    name: string;
    level: number;
    color: string;
}
export const CharacterComponentDiv: React.FC<CharacterProp> = (props) => {
    /*function changeSlider() {
        let tempToggled = !toggled;
        changeToggleState(tempToggled);
        props.externalToggleFunc(tempToggled);
    }
    const [value, changeSliderState] = useState(props.initValue);
    

    function changeSlider(e: React.FormEvent<HTMLInputElement>): void {
        let newValue = e.currentTarget.valueAsNumber;
        props.externalSliderFunc(newValue);
    }*/

    return (
        <div className="CharacterComponentDiv">
            <div className="characterIcon" style={{ border: "5px solid " + props.color }}></div>
            <div className="characterInformation">
                <h2 className="characterClass">{props.name}</h2>
                <hr />
                <h4 className="characterLevel">Lvl.{props.level}</h4>
            </div>
            <button className="characterDeleteButton"></button>
        </div>
    );
};

/*export class CharacterComponentDiv extends Component {
    render() {
        return (
            <div className="CharacterComponentDiv">
                <div className="characterIcon"></div>
                <div className="characterInformation">
                    <h2 className="characterClass">Medic</h2>
                    <hr />
                    <h4 className="characterLevel">Lvl.7</h4>
                </div>
                <button className="characterDeleteButton"></button> 
            </div>
        );
    }
}*/
