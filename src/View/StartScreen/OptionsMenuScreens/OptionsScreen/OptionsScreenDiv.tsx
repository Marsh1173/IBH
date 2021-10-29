import React from "react";
import { OptionsConfig, OptionsDao } from "../../../../DataStorage/OptionsConfig/OptionsConfig";
import { OptionsScreenBase } from "../baseComponent/OptionsMenuScreenBase";
import "./OptionsScreenDivStyles.less";
import { ToggleButton } from "../../../Extras/ToggleButton/ToggleButton";
import { Slider } from "../../../Extras/Slider/Slider";

export class OptionsScreenDiv extends OptionsScreenBase {
    protected getScreenDiv(): JSX.Element {
        let options: OptionsConfig = OptionsDao.getAllOptions();

        return (
            <div className="OptionsScreenDiv">
                <h2>Options</h2>
                <ul>
                    <li>
                        <p>Screen Shake:</p>
                        <ToggleButton
                            externalToggleFunc={(bool: boolean) => {
                                OptionsDao.setScreenShake(bool);
                                OptionsDao.saveOptionsConfig();
                            }}
                            toggled={options.screenShake}
                        ></ToggleButton>
                    </li>
                    <li>
                        <p>Bloom:</p>
                        <ToggleButton
                            externalToggleFunc={(bool: boolean) => {
                                OptionsDao.setBloom(bool);
                                OptionsDao.saveOptionsConfig();
                            }}
                            toggled={options.bloom}
                        ></ToggleButton>
                    </li>
                    <li>
                        <p>Particle Percent:</p>
                        <Slider
                            externalSliderFunc={(val: number) => {
                                OptionsDao.setParticlePercent(val);
                                OptionsDao.saveOptionsConfig();
                            }}
                            initValue={options.particlePercent}
                            min={0}
                            max={100}
                            step={5}
                        ></Slider>
                    </li>
                </ul>
            </div>
        );
    }
}
