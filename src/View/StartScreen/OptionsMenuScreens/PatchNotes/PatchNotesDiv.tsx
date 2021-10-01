import React from "react";
import { OptionsScreenBase } from "../baseComponent/OptionsMenuScreenBase";
import "./PatchNotesDivStyles.less";
import { PatchNotesItem, PatchNotesDao } from "../../../../Model/Utils/PatchNotes/PatchNotesDao";
import { makePatchNoteDiv } from "./PatchNote/makePatchNoteDiv";

export class PatchNotesDiv extends OptionsScreenBase {
    protected getScreenDiv(): JSX.Element {
        const patchNoteItems: PatchNotesItem[] = PatchNotesDao.getAllPatchNotes();
        const patchNoteDivs: JSX.Element[] = [];

        for (let i: number = 0; i < patchNoteItems.length; i++) {
            let newItem: JSX.Element = makePatchNoteDiv(patchNoteItems[i], i);
            patchNoteDivs.push(newItem);
        }
        return (
            <div className="PatchNotesDiv">
                <h1 className="pageTitle">Patch Notes</h1>
                {patchNoteDivs}
            </div>
        );
    }
}
