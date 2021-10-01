import React, { useState } from "react";
import "./ToggleButtonStyles.less";

interface ToggleButtonFuncProp {
    externalToggleFunc: (arg0: boolean) => void;
    toggled: boolean;
}

export const ToggleButton: React.FC<ToggleButtonFuncProp> = (props) => {
    function toggle() {
        let tempToggled = !toggled;
        changeToggleState(tempToggled);
        props.externalToggleFunc(tempToggled);
    }

    const [toggled, changeToggleState] = useState(props.toggled);

    return <div className={`ToggleButton ${toggled ? "checked" : ""}`} onClick={toggle}></div>;
};
