import React from "react";
import { PatchNotesItem } from "../../../../../DataStorage/PatchNotes/PatchNotesDao";

export function makePatchNoteDiv(item: PatchNotesItem, index: number): JSX.Element {
    const changes: JSX.Element[] = item.changes.map((change) => {
        return <li className="PatchNoteChange">{change}</li>;
    });

    return (
        <div className={`PatchNoteDiv ${index == 0 ? "newest" : ""}`}>
            <hr />
            <div className="PatchNoteTitle">{item.updateType + " " + item.version}</div>
            <div className="PatchNoteDate">{item.date}</div>
            <div className="PatchNoteSummary">"{item.summary}"</div>
            <ul className="PatchNoteChanges">{changes}</ul>
        </div>
    );
}
