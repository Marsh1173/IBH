import { createElement } from "react";
import ReactDOM from "react-dom";
import { GameOptionsPresenter } from "./GameOptionsPresenter";
import { MenuPresenter } from "./MenuPresenter";
import { StartScreenDiv } from "../../View/StartScreen/StartScreenDiv";

export class StartScreenPresenter {
    constructor() {}

    public static returnToStartScreen() {
        const domContainer = document.querySelector("#reactDom");
        ReactDOM.render(createElement(StartScreenDiv), domContainer);
    }
}
