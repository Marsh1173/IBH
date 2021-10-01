import { createElement } from "react";
import ReactDOM from "react-dom";
import { GameDiv } from "../../View/Game/GameDiv";

export class MenuPresenter {
    public static startGame() {
        const domContainer = document.querySelector("#reactDom");
        ReactDOM.render(createElement(GameDiv), domContainer);
    }
}
