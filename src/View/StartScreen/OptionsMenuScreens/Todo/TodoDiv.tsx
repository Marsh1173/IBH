import React from "react";
import { OptionsScreenBase } from "../baseComponent/OptionsMenuScreenBase";
import "./TodoDivStyles.less";

export class TodoDiv extends OptionsScreenBase {
    protected getScreenDiv(): JSX.Element {
        return (
            <div className="TodoDiv">
                <h1>Todos</h1>
                <p className="finishedTodo">Add movement</p>
                <p className="finishedTodo">Add aiming</p>
                <p className="finishedTodo">Add basic shooting</p>
                <p className="finishedTodo">Add basic particles</p>
                <p className="finishedTodo">Add terrain collision</p>
                <p>Add sprites and animations</p>
                <p>Add classes and character banks</p>
                <p>Add basic AIs</p>
                <p>Add class abilities and weapons</p>
                <p>Add AIs</p>
                <p>Add terrain art</p>
            </div>
        );
    }
}
