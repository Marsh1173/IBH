import "./SliderStyles.less";
import React, { useState } from "react";

interface SliderFuncProp {
    externalSliderFunc: (arg0: number) => void;
    initValue: number;
    min: number;
    max: number;
    step: number;
}

export const Slider: React.FC<SliderFuncProp> = (props) => {
    /*function changeSlider() {
        let tempToggled = !toggled;
        changeToggleState(tempToggled);
        props.externalToggleFunc(tempToggled);
    }
    const [value, changeSliderState] = useState(props.initValue);
    */

    function changeSlider(e: React.FormEvent<HTMLInputElement>): void {
        let newValue = e.currentTarget.valueAsNumber;
        props.externalSliderFunc(newValue);
    }

    return (
        <div className="Slider">
            <input
                className="SliderInput"
                type="range"
                min={props.min}
                max={props.max}
                step={props.step}
                defaultValue={props.initValue}
                onPointerUp={changeSlider}
            ></input>
        </div>
    );
};
