import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { StartScreenDiv } from "../View/StartScreen/StartScreenDiv";
import { OptionsDao } from "../DataStorage/OptionsConfig/OptionsConfig";
import { ImageAssetManager } from "../DataStorage/ImageAssetManager";

OptionsDao.initOptionsConfig();
new ImageAssetManager().load();

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(StartScreenDiv), domContainer);
